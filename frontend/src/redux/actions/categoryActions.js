export const categoryTypes = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',
  GET_CATEGORIES_RESET: 'GET_CATEGORIES_RESET',

  GET_CATEGORY_DETAIL: 'GET_CATEGORY_DETAIL',
  GET_CATEGORY_DETAIL_SUCCESS: 'GET_CATEGORY_DETAIL_SUCCESS',
  GET_CATEGORY_DETAIL_ERROR: 'GET_CATEGORY_DETAIL_ERROR',
  GET_CATEGORY_DETAIL_RESET: 'GET_CATEGORY_DETAIL_RESET',

  DELETE_CATEGORY: 'DELETE_CATEGORY',
  DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
  DELETE_CATEGORY_ERROR: 'DELETE_CATEGORY_ERROR',
  DELETE_CATEGORY_RESET: 'DELETE_CATEGORY_RESET',

  CREATE_CATEGORY: 'CREATE_CATEGORY',
  CREATE_CATEGORY_SUCCESS: 'CREATE_CATEGORY_SUCCESS',
  CREATE_CATEGORY_ERROR: 'CREATE_CATEGORY_ERROR',

  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
  UPDATE_CATEGORY_SUCCESS: 'UPDATE_CATEGORY_SUCCESS',
  UPDATE_CATEGORY_ERROR: 'UPDATE_CATEGORY_ERROR',
};

export const getCategories = () => ({
  type: categoryTypes.GET_CATEGORIES,
});

export const getCategoriesSuccess = (payload) => ({
  type: categoryTypes.GET_CATEGORIES_SUCCESS,
  payload: payload,
});

export const getCategoriesError = (error) => ({
  type: categoryTypes.GET_CATEGORIES_ERROR,
  payload: error,
});

export const createCategorySuccess = (post) => ({
  type: categoryTypes.CREATE_CATEGORY_SUCCESS,
  payload: post,
});

export const createCategoryError = (error) => ({
  type: categoryTypes.CREATE_CATEGORY_ERROR,
  payload: error,
});

export const deleteCategory = () => ({
  type: categoryTypes.DELETE_CATEGORY,
});

export const deleteCategorySuccess = (id) => ({
  type: categoryTypes.DELETE_CATEGORY_SUCCESS,
  payload: id,
});

export const deleteCategoryError = (error) => ({
  type: categoryTypes.DELETE_CATEGORY_ERROR,
  payload: error,
});

// export const getPostDetail = () => ({
//   type: categoryTypes.GET_CATEGORIES_RESET,
// });
//
// export const getPostDetailSuccess = (payload) => ({
//   type: postsTypes.GET_POST_DETAIL_SUCCESS,
//   payload: payload,
// });
//
// export const getPostDetailError = (error) => ({
//   type: postsTypes.GET_POST_DETAIL_ERROR,
//   payload: error,
// });
//
//
//
// export const updatePostSuccess = (post) => ({
//   type: postsTypes.UPDATE_POST_SUCCESS,
//   payload: post,
// });
//
// export const updatePostError = (error) => ({
//   type: postsTypes.UPDATE_POST_ERROR,
//   payload: error,
// });

