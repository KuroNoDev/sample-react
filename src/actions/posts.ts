import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store/configureStore';
import { AppActions, SET_LIMIT, SET_POSTS } from '../types/actions';
import Post from '../types/Post';

export const setPosts = (posts: Post[]): AppActions => ({
  type: SET_POSTS,
  posts
});

export const setLimit = (limit: number): AppActions => ({
  type: SET_LIMIT,
  limit
});

export const updatePost = (post: Post) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const posts = getState().posts.map((_post: Post) => {
      return post.id === _post.id ? post : _post;
    });

    dispatch(setPosts(posts));
  };
};

export const getPosts = ():ThunkAction<Promise<void>, {}, {}, any> => {
  return (dispatch: ThunkDispatch<{}, {}, AppActions>): Promise<void> => {
    return new Promise<void>((resolve) => {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
          dispatch(setPosts(res.data));
          resolve();
        });
    })
  };
};