import {postsTypes} from '../actions/blogActions';

const initialState = {
  isLoading: false,
  error: '',
  posts: [],
  postsCount: null,
  post: {},
  success: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsTypes.GET_POSTS:
      return {...state, isLoading: true};
    case postsTypes.GET_POSTS_SUCCESS:
      return {...state, isLoading: false, posts: action.payload.result, error: '', postsCount: action.payload.count};
    case postsTypes.GET_POSTS_ERROR:
      return {...state, isLoading: false, posts: null, error: action.payload};
    case postsTypes.GET_POSTS_RESET:
      return {...state, isLoading: false, success: false, error: ''};

    case postsTypes.GET_POST_DETAIL:
      return {...state, isLoading: true};
    case postsTypes.GET_POST_DETAIL_SUCCESS:
      return {...state, isLoading: false, post: action.payload, error: '', success: true};
    case postsTypes.GET_POST_DETAIL_ERROR:
      return {...state, isLoading: false, post: null, error: action.payload, success: false};
    case postsTypes.GET_POST_DETAIL_RESET:
      return {...state, isLoading: false, success: false, error: ''};

    case postsTypes.DELETE_POST:
      return {...state, isLoading: true};
    case postsTypes.DELETE_POST_SUCCESS:
      return {...state, isLoading: false, error: '', success: true};
    case postsTypes.DELETE_POST_ERROR:
      return {...state, isLoading: false, error: action.payload, success: false};

    case postsTypes.CREATE_POST:
      return {...state, isLoading: true};
    case postsTypes.CREATE_POST_SUCCESS:
      return {...state, isLoading: false, error: '', success: true};
    case postsTypes.CREATE_POST_ERROR:
      return {...state, isLoading: false, error: action.payload, success: false};
    case postsTypes.CREATE_POST_RESET:
      return {...state, isLoading: false, success: false, error: ''};

    case postsTypes.UPDATE_POST:
      return {...state, isLoading: true};
    case postsTypes.UPDATE_POST_SUCCESS:
      return {...state, isLoading: false, error: '', success: true, post: action.payload};
    case postsTypes.UPDATE_POST_ERROR:
      return {...state, isLoading: false, error: action.payload, success: false};
    default: return state;
  }
};
