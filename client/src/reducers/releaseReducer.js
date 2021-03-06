import {
  ADD_RELEASE,
  ADD_TRACK,
  DELETE_ARTWORK,
  DELETE_RELEASE,
  DELETE_TRACK_COMPLETE,
  DELETE_TRACK_START,
  FETCH_ARTIST_CATALOGUE,
  FETCH_CATALOGUE,
  FETCH_COLLECTION,
  FETCH_RELEASE,
  FETCH_USER_RELEASE,
  FETCH_USER_RELEASES,
  MOVE_TRACK,
  PUBLISH_STATUS,
  PURCHASE_RELEASE,
  SEARCH_RELEASES,
  SEARCH_RELEASES_CLEAR,
  SEARCH_RELEASES_LOADING,
  SET_IS_PAGING,
  TRANSCODING_COMPLETE,
  TRANSCODING_DURATION,
  TRANSCODING_START,
  TRANSCODING_STOP,
  UPDATE_RELEASE,
  UPLOAD_ARTWORK,
  UPLOAD_ARTWORK_PROGRESS,
  UPLOAD_AUDIO_PROGRESS
} from 'actions/types';

const initialState = {
  artist: {},
  artworkUploading: false,
  artworkUploadProgress: 0,
  audioUploadProgress: [],
  cancelAudioUpload: undefined,
  isLoading: false,
  isSearching: false,
  isDeleting: [],
  isPaging: false,
  isTranscoding: [],
  catalogue: [],
  catalogueLimit: 12,
  catalogueSkip: 0,
  collection: [],
  paymentAddress: '',
  priceInXem: '',
  reachedEndOfCat: false,
  selectedRelease: { tags: [], trackList: [] },
  searchQuery: '',
  searchResults: [],
  userReleases: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_RELEASE:
    case ADD_TRACK:
    case DELETE_ARTWORK:
    case FETCH_RELEASE:
    case FETCH_USER_RELEASE:
    case MOVE_TRACK:
    case UPDATE_RELEASE:
      return { ...state, selectedRelease: payload };
    case DELETE_RELEASE:
      if (state.userReleases) {
        return {
          ...state,
          userReleases: state.userReleases.filter(
            release => release._id !== payload
          )
        };
      }
      return { ...state };
    case DELETE_TRACK_START:
      return { ...state, isDeleting: [...state.isDeleting, action.trackId] };
    case DELETE_TRACK_COMPLETE:
      return {
        ...state,
        selectedRelease: payload,
        isDeleting: state.isDeleting.filter(id => id !== action.trackId)
      };
    case FETCH_ARTIST_CATALOGUE:
      return { ...state, artist: payload };
    case FETCH_CATALOGUE: {
      const reachedEndOfCat =
        payload.length < state.catalogueLimit ? true : false;
      return {
        ...state,
        catalogue: state.isPaging ? [...state.catalogue, ...payload] : payload,
        catalogueSkip: state.isPaging
          ? state.catalogueSkip + state.catalogueLimit
          : 0,
        isPaging: false,
        reachedEndOfCat
      };
    }
    case FETCH_COLLECTION:
      return { ...state, collection: payload };
    case FETCH_USER_RELEASES:
      return { ...state, userReleases: payload };
    case PUBLISH_STATUS:
      return {
        ...state,
        isLoading: action.isLoading,
        userReleases: state.userReleases.map(release => {
          if (release._id === payload._id) return payload;
          return release;
        })
      };
    case PURCHASE_RELEASE:
      return {
        ...state,
        selectedRelease: payload.release,
        paymentAddress: payload.paymentInfo.paymentAddress,
        paymentHash: payload.paymentInfo.paymentHash,
        priceInXem: payload.price
      };
    case SEARCH_RELEASES:
      return { ...state, searchResults: payload };
    case SEARCH_RELEASES_CLEAR:
      return { ...state, searchResults: [], searchQuery: '' };
    case SEARCH_RELEASES_LOADING:
      return {
        ...state,
        isSearching: action.isSearching,
        searchQuery: action.searchQuery
      };
    case SET_IS_PAGING:
      return { ...state, isPaging: true };
    case TRANSCODING_START:
      return {
        ...state,
        isTranscoding: [...state.isTranscoding, payload.trackId]
      };
    case TRANSCODING_COMPLETE:
      return {
        ...state,
        isTranscoding: state.isTranscoding.filter(id => id !== action.trackId),
        selectedRelease: {
          ...state.selectedRelease,
          trackList: [
            ...state.selectedRelease.trackList.map(track => {
              if (track._id === action.trackId) {
                return {
                  ...track,
                  hasAudio: true
                };
              }
              return track;
            })
          ]
        }
      };
    case TRANSCODING_DURATION:
      return {
        ...state,
        selectedRelease: {
          ...state.selectedRelease,
          trackList: [
            ...state.selectedRelease.trackList.map(track => {
              if (track._id === action.trackId) {
                return {
                  ...track,
                  duration: action.duration
                };
              }
              return track;
            })
          ]
        }
      };
    case TRANSCODING_STOP:
      return {
        ...state,
        isTranscoding: state.isTranscoding.filter(id => id !== action.trackId)
      };
    case UPLOAD_ARTWORK:
      return { ...state, artworkUploading: payload };
    case UPLOAD_ARTWORK_PROGRESS:
      return { ...state, artworkUploadProgress: payload };
    case UPLOAD_AUDIO_PROGRESS:
      return {
        ...state,
        audioUploadProgress: [
          ...state.audioUploadProgress.filter(
            track => !(action.trackId in track)
          ),
          { [action.trackId]: action.percent }
        ]
      };

    default:
      return state;
  }
};
