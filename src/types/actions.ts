import Album from '../types/Album';
import Post from '../types/Post';
import Pagination from '../types/Pagination';

export const SET_POSTS = 'SET_POSTS';
export const SET_LIMIT = 'SET_LIMIT';
export const UPDATE_POST = 'UPDATE_POST';

export const SET_ALBUMS = 'SET_ALBUMS';
export const SET_ALBUMS_PAGINATION = 'SET_ALBUMS_PAGINATION';

export interface SetPostsAction {
  type: typeof SET_POSTS;
  posts: Post[];
}

export interface SetLimitAction {
  type: typeof SET_LIMIT;
  limit: number;
}

export interface SetAlbumsAction {
  type: typeof SET_ALBUMS;
  albums: Album[];
}

export interface SetAlbumsPagination {
  type: typeof SET_ALBUMS_PAGINATION;
  pagination: Pagination;
}

export type PostsActionTypes = SetPostsAction | SetLimitAction;
export type AlbumsActionTypes = SetAlbumsAction | SetAlbumsPagination;
export type AppActions = PostsActionTypes | AlbumsActionTypes;