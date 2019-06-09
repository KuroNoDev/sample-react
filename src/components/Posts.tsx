import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getPosts, setLimit } from '../actions/posts';
import comments from '../assets/images/comments.svg';
import logo from '../assets/images/logo.svg';
import '../scss/Posts.scss';
import { AppState } from '../store/configureStore';
import { AppActions } from '../types/actions';
import Post, { default as PostType } from '../types/Post';

type PostsProps = LinkStateProps & LinkDispatchProps;

class Posts extends Component<PostsProps> {
  state = {
    filteredPosts: []
  }

  componentDidMount() {
    if (this.props.posts.length > 0) {
      this.filterPosts(this.props.limit);
    } else {
      this.props.getPosts().then(() => {
        this.filterPosts(this.props.limit);
      });
    }
  }

  filterPosts(limit:number) {
    const filteredPosts:any = [];

    this.props.posts.forEach((post: Post) => {
      const existingPosts = filteredPosts.filter((filteredPost: Post) => filteredPost.userId === post.userId);
      if (!existingPosts || existingPosts.length < limit) {
        filteredPosts.push(post);
      }
    })

    this.setState({ filteredPosts });
  }

  onSelectChange(event: React.FormEvent<HTMLSelectElement>) {
    const limit = parseInt(event.currentTarget.value);
    this.props.setLimit(limit);
    this.filterPosts(limit);
  }

  optionTpl() {
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        )
      }) 
    );
  }

  postTpl(post: Post) {
    return (
      <Link key={post.id} className={`post card mb-2 ${post.visited ? 'visited' : ''}`} to={`/posts/${post.id}/`}>
        <div className="card-body d-flex flex-column flex-sm-row">
          <div className="text-center mb-2 mb-sm-0">
            <img className="rounded" src={`https://api.adorable.io/avatars/100/${post.userId}.png`} alt={`user-${post.userId}`}/>
          </div>
          <div className="flex-grow-1 pl-0 pl-sm-3">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {
              post.comments !== undefined ?
              <div className="text-danger">
                <img src={comments} alt="comments" width="16"/>
                <span className="ml-1">{post.comments} comments</span>
              </div>
              : <span></span>
            }
          </div>
        </div>
      </Link>
    );
  }

  render() {
    return (
      <div>
        <h2 className="d-flex">
          <div className="flex-grow-1">All Posts</div>
          <div className="d-flex">
            <small className="text-nowrap mr-2">Limit posts per user:</small>
            <select value={this.props.limit} onChange={this.onSelectChange.bind(this)} className="form-control">
              { this.optionTpl() }
            </select>
          </div>
        </h2>

        <div>
          { 
            this.state.filteredPosts.length > 0 ? this.state.filteredPosts.map(this.postTpl)
            : <img src={logo} width="100" height="100" className="app-logo" alt=""></img>
          }
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  posts: PostType[];
  limit: number;
}

interface LinkDispatchProps {
  getPosts: () => any;
  setLimit: (limit:number) => any;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  posts: state.posts,
  limit: state.limit
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AppActions>): LinkDispatchProps => ({
  getPosts: bindActionCreators(getPosts, dispatch),
  setLimit: bindActionCreators(setLimit, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);