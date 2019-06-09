import { PostsActionTypes } from '../types/actions';

const limitReducersDefaultState: number = 1;

export default (state = limitReducersDefaultState, action: PostsActionTypes): number => {
  switch (action.type) {
    case 'SET_LIMIT':
      return action.limit;
    default:
      return state;
  }
};