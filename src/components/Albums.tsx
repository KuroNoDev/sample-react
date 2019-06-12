import axios from 'axios';
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-responsive-modal';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getAlbums, setAlbumsPagination, updateAlbum } from '../actions/albums';
import logo from '../assets/images/logo.svg';
import '../scss/Albums.scss';
import { AppState } from '../store/configureStore';
import { AppActions } from '../types/actions';
import { default as AlbumType } from '../types/Album';
import Pagination from '../types/Pagination';
import Photo from '../types/Photo';

type AlbumsProps = LinkStateProps & LinkDispatchProps;

class Albums extends Component<AlbumsProps> {
  albumsElement = createRef<HTMLDivElement>();
  requests = 0;
  unmounted = false;
  state = {
    showModal: false,
    isLoading: false,
    carouselAlbum: {
      id: 0,
      title: '',
      photos: []
    },
    carouselItems: []
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    if (this.props.albums.length === 0) {
      this.props.getAlbums().then(() => {
        this.getPhotos();
      });
    }
  }

  componentWillUnmount () {
    this.unmounted = true;
  }

  getCarouselItems (album: AlbumType) {
    return (
      album.photos
        ? album.photos.map((photo:Photo) => <img key={photo.id} src={photo.url} alt=""/>)
        : ''
    )
  }

  getPhotos () {
    this.props.albums.forEach((album) => {
      if (album.photos === undefined) {
        this.requests = this.requests + 1;
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}&_limit=6`)
          .then(res => {
            if (this.unmounted) return;
            album.photos = res.data;
            this.props.updateAlbum(album);
            if (this.state.carouselAlbum.id === album.id) this.setState({carouselItems: this.getCarouselItems(album)});
            this.requests = this.requests - 1;
          });
      }
    })
  }

  handleScroll () {
    if (this.state.isLoading !== true && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.lazyLoadAlbums();
    }
  }

  async lazyLoadAlbums () {
    const albumsPagination = this.props.albumsPagination;
    if (this.requests > 0 || albumsPagination.startPage > 100 || this.unmounted) return;

    this.setState({isLoading: true});
    albumsPagination.startPage += 18;

    await new Promise(resolve => setTimeout(resolve, 200));
    await this.props.setAlbumsPagination(albumsPagination);
    await this.props.getAlbums();
    this.getPhotos();

    this.setState({isLoading: false});
  }

  onAlbumClick (album: AlbumType) {
    this.setState({
      carouselAlbum: album,
      carouselItems: this.getCarouselItems(album),
      showModal: true
    });
  }

  onAlbumClose () {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>
        <h2>Albums</h2>
        <div className="d-flex justify-content-between flex-wrap" ref={this.albumsElement}>
          { 
            this.props.albums.length > 0 ? this.props.albums.map((album) => {
              return (
                <div key={album.id} className="album mb-3 w-25 card">
                  <div onClick={this.onAlbumClick.bind(this, album)}>
                    <div className="d-flex flex-column justify-content-around card-body">
                      <div className="thumbnails d-flex justify-content-between">
                        {
                          album.photos !== undefined ?
                          album.photos.slice(0, 3).map((photo: Photo) => {
                            return (
                              <div key={photo.id} className="thumbnail">
                                <img className="rounded" src={photo.thumbnailUrl} alt=""/>
                              </div>
                            )
                          }) :
                          <div className="w-100 text-center">
                            <img src={logo} width="100" height="100" className="app-logo" alt=""></img>
                          </div>
                        }
                      </div>
                      <h4 className="text-center mt-3">
                        {album.title}
                      </h4>
                    </div>
                  </div>
                </div>
              )
            }) : ''
          }
        </div>
        {
          this.state.isLoading === true ?
          <div className="w-100 text-center">
            <img src={logo} width="100" height="100" className="app-logo" alt=""></img>
          </div> : ''
        }
        <Modal open={this.state.showModal} onClose={this.onAlbumClose.bind(this)} classNames={{
          overlay: 'modal-overlay',
          modal: 'modal-body',
        }} center>
          <h2 className="mb-4">{this.state.carouselAlbum.title}</h2>
          {
            this.state.showModal && this.state.carouselItems.length > 0 ?
            <Carousel showArrows={true} infiniteLoop={true} centerMode={true} emulateTouch={true}>
              {this.state.carouselItems}
            </Carousel> :
            <div className="w-100 text-center">
              <img src={logo} width="100" height="100" className="app-logo" alt=""></img>
            </div>
          }
        </Modal>
      </div>
    );
  }
}

interface LinkStateProps {
  albums: AlbumType[];
  albumsPagination: Pagination;
}

interface LinkDispatchProps {
  getAlbums: () => any;
  updateAlbum: (album: AlbumType) => void;
  setAlbumsPagination: (pagination: Pagination) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  albums: state.albums,
  albumsPagination: state.albumsPagination
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AppActions>): LinkDispatchProps => ({
  getAlbums: bindActionCreators(getAlbums, dispatch),
  updateAlbum: bindActionCreators(updateAlbum, dispatch),
  setAlbumsPagination: bindActionCreators(setAlbumsPagination, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);