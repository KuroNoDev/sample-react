import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store/configureStore';
import { AppActions, SET_ALBUMS, SET_ALBUMS_PAGINATION } from '../types/actions';
import Album from '../types/Album';
import Pagination from '../types/Pagination';

export const setAlbums = (albums: Album[]): AppActions => ({
  type: SET_ALBUMS,
  albums
});

export const setAlbumsPagination = (pagination: Pagination): AppActions => ({
  type: SET_ALBUMS_PAGINATION,
  pagination
});

export const updateAlbum = (album: Album) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const albums = getState().albums.map((_album: Album) => {
      return album.id === _album.id ? album : _album;
    });

    dispatch(setAlbums(albums));
  };
};

export const getAlbums = ():ThunkAction<Promise<void>, AppState, {}, any> => {
  return (dispatch: ThunkDispatch<{}, {}, AppActions>, getState: () => AppState): Promise<void> => {
    const albums = getState().albums;
    const startPage = getState().albumsPagination.startPage;

    return new Promise<void>((resolve) => {
      axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=18&_start=${startPage}`)
        .then(res => {
          dispatch(setAlbums([...albums, ...res.data]));
          resolve();
        });
    })
  };
};