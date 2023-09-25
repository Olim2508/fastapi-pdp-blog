export const postsTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
  GET_POSTS_RESET: 'GET_POSTS_RESET',

  GET_POST_DETAIL: 'GET_POST_DETAIL',
  GET_POST_DETAIL_SUCCESS: 'GET_POST_DETAIL_SUCCESS',
  GET_POST_DETAIL_ERROR: 'GET_POST_DETAIL_ERROR',
  GET_POST_DETAIL_RESET: 'GET_POST_DETAIL_RESET',

  DELETE_POST: 'DELETE_POST',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR: 'DELETE_POST_ERROR',

  CREATE_POST: 'CREATE_POST',
  CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',
  CREATE_POST_ERROR: 'CREATE_POST_ERROR',
  CREATE_POST_RESET: 'CREATE_POST_RESET',

  UPDATE_POST: 'UPDATE_POST',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',
};

export const getPosts = () => ({
  type: postsTypes.GET_POSTS,
});

export const getPostsSuccess = (payload) => ({
  type: postsTypes.GET_POSTS_SUCCESS,
  payload: payload,
});

export const getPostsError = (error) => ({
  type: postsTypes.GET_POSTS_ERROR,
  payload: error,
});

export const getPostDetail = () => ({
  type: postsTypes.GET_POST_DETAIL,
});

export const getPostDetailSuccess = (payload) => ({
  type: postsTypes.GET_POST_DETAIL_SUCCESS,
  payload: payload,
});

export const getPostDetailError = (error) => ({
  type: postsTypes.GET_POST_DETAIL_ERROR,
  payload: error,
});

export const deletePost = () => ({
  type: postsTypes.GET_POST_DETAIL,
});

export const deletePostSuccess = () => ({
  type: postsTypes.GET_POST_DETAIL_SUCCESS,
});

export const deletePostError = (error) => ({
  type: postsTypes.GET_POST_DETAIL_ERROR,
  payload: error,
});

export const createPostSuccess = (post) => ({
  type: postsTypes.CREATE_POST_SUCCESS,
  payload: post,
});

export const createPostError = (error) => ({
  type: postsTypes.CREATE_POST_ERROR,
  payload: error,
});

export const updatePostSuccess = (post) => ({
  type: postsTypes.UPDATE_POST_SUCCESS,
  payload: post,
});

export const updatePostError = (error) => ({
  type: postsTypes.UPDATE_POST_ERROR,
  payload: error,
});

