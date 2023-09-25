import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {createPostRequest, getCategoriesRequest, getPostDetailRequest, updatePostRequest} from '../../api';
import {postsTypes} from '../../redux/actions/blogActions';
import BlogForm from '../BlogForm';

const BlogUpdate = () => {
  const {id} = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const post = useSelector((state) => state.postsReducer.post);
  const isLoading = useSelector((state) => state.postsReducer.isLoading);
  // const error = useSelector((state) => state.postsReducer.error);
  const success = useSelector((state) => state.postsReducer.success);
  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(getPostDetailRequest(id));
    dispatch(getCategoriesRequest());
  }, []);

  const onSubmit = async (values) => {
    await dispatch(updatePostRequest(id, values));
    history.push(`/blogs/${id}`);
  };

  const initialValues = {
    title: post.title,
    author: post.author,
    content: post.content,
    category: post.category?.id,
  };

  return (
    <div className="create">
      <h2>Update blog</h2>
      {isLoading ? <p>Loading...</p> : (
            <BlogForm initialValues={initialValues} onSubmit={onSubmit} categories={categories} isUpdate={true}/>
        )}

    </div>
  );
};

export default BlogUpdate;
