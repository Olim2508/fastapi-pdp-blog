import {categoryTypes} from '../actions/categoryActions';


const initialState = {
  isLoading: false,
  error: '',
  categories: [],
  // category: {},
  success: false,
};


export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryTypes.GET_CATEGORIES:
      return {...state, isLoading: true};
    case categoryTypes.GET_CATEGORIES_SUCCESS:
      return {...state, isLoading: false, categories: action.payload, error: ''};
    case categoryTypes.GET_CATEGORIES_ERROR:
      return {...state, isLoading: false, categories: null, error: action.payload};
    case categoryTypes.GET_CATEGORIES_RESET:
      return {...state, isLoading: false, success: false, error: ''};

      // case postsTypes.GET_POST_DETAIL:
      //   return {...state, isLoading: true};
      // case postsTypes.GET_POST_DETAIL_SUCCESS:
      //   return {...state, isLoading: false, post: action.payload, error: '', success: true};
      // case postsTypes.GET_POST_DETAIL_ERROR:
      //   return {...state, isLoading: false, post: null, error: action.payload, success: false};
      // case postsTypes.GET_POST_DETAIL_RESET:
      //   return {...state, isLoading: false, success: false, error: ''};
      //
    case categoryTypes.DELETE_CATEGORY:
      return {...state, isLoading: true};
    case categoryTypes.DELETE_CATEGORY_SUCCESS:
      // const deletedCategoryIndex = state.categories.findIndex((category) => category.id === action.payload);
      const updatedCategories = state.categories.filter((category) => category.id !== action.payload);
      return {...state, isLoading: false, error: '', success: true, categories: updatedCategories};
    case categoryTypes.DELETE_CATEGORY_ERROR:
      return {...state, isLoading: false, error: action.payload, success: false};
    case categoryTypes.DELETE_CATEGORY_RESET:
      return {...state, isLoading: false, error: '', success: false};

    case categoryTypes.CREATE_CATEGORY:
      return {...state, isLoading: true};
    case categoryTypes.CREATE_CATEGORY_SUCCESS:
      return {...state, isLoading: false, error: '', success: true, categories: [...state.categories, action.payload]};
    case categoryTypes.CREATE_CATEGORY_ERROR:
      return {...state, isLoading: false, error: action.payload, success: false};

      // case postsTypes.UPDATE_POST:
      //   return {...state, isLoading: true};
      // case postsTypes.UPDATE_POST_SUCCESS:
      //   return {...state, isLoading: false, error: '', success: true, post: action.payload};
      // case postsTypes.UPDATE_POST_ERROR:
      //   return {...state, isLoading: false, error: action.payload, success: false};

    default: return state;
  }
};
