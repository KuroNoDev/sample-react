import { AlbumsActionTypes } from '../types/actions';
import Album from '../types/Album';
import Pagination from '../types/Pagination';

const defaultAlbumsState: Album[] = [];
const defaultPaginationState: Pagination = {
  startPage: 1
}

export function albumsPaginationReducer (state = defaultPaginationState, action: AlbumsActionTypes) {
  switch (action.type) {
    case 'SET_ALBUMS_PAGINATION':
      return action.pagination;
    default:
      return state;
  }
};

export function albumsReducer (state = defaultAlbumsState, action: AlbumsActionTypes) {
  switch (action.type) {
    case 'SET_ALBUMS':
      return action.albums;
    default:
      return state;
  }
};