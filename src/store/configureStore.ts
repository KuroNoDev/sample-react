import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { albumsReducer, albumsPaginationReducer } from '../reducers/albums';
import limitReducer from '../reducers/postsLimit';
import postsReducer from '../reducers/posts';
import { AppActions } from '../types/actions';

export const rootReducer = combineReducers({
  posts: postsReducer,
  limit: limitReducer,
  albums: albumsReducer,
  albumsPagination: albumsPaginationReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
