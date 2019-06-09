import { PostsActionTypes } from '../types/actions';
import Post from '../types/Post';

const defaultState: Post[] = [];

export default (state = defaultState, action: PostsActionTypes) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.posts;
    default:
      return state;
  }
};