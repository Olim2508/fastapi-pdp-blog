import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createPostRequest, getCategoriesRequest} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import BlogForm from '../../components/BlogForm';

const CreateBlog = () => {
  // const isLoading = useSelector((state) => state.postsReducer.isLoading);
  // const success = useSelector((state) => state.postsReducer.success);
  // const error = useSelector((state) => state.postsReducer.error);
  const categories = useSelector((state) => state.categoriesReducer.categories);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  const initialValues = {
    title: '',
    content: '',
    category: '',
  };

  const onSubmit = async (values) => {
    console.log('values', values);
    await dispatch(createPostRequest(values));
    history.push('/');
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <BlogForm initialValues={initialValues} onSubmit={onSubmit} categories={categories}/>
      {/* <Formik*/}
      {/*  initialValues={initialValues}*/}
      {/*  validationSchema={validationSchema}*/}
      {/*  onSubmit={onSubmit}*/}
      {/* >*/}
      {/*  <Form>*/}

      {/*    <label>Title</label>*/}
      {/*    <Field type="text" name="title" />*/}
      {/*    <ErrorMessage name="title" component="div" className="error" />*/}

      {/*    <label>Category</label>*/}
      {/*    <Field as="select" name="category">*/}
      {/*      {categories && (*/}
      {/*        categories.map((category) => {*/}
      {/*          return (*/}
      {/*            <option key={category.id} value={category.id}>{category.title}</option>*/}
      {/*          );*/}
      {/*        })*/}
      {/*      )}*/}
      {/*    </Field>*/}
      {/*    <ErrorMessage name="category" component="div" className="error" />*/}

      {/*    <label>Author</label>*/}
      {/*    <Field type="text" name="author" />*/}
      {/*    <ErrorMessage name="author" component="div" className="error" />*/}

      {/*    <label>Content</label>*/}
      {/*    <Field as="textarea" type="text" name="content" />*/}
      {/*    <ErrorMessage name="author" component="div" className="error" />*/}

      {/*    {getFieldError('non_field_errors', error) && (*/}
      {/*      <div className="error">{getFieldError('non_field_errors', error)}</div>*/}
      {/*    )}*/}

      {/*    {isLoading ? (*/}
      {/*      <button type="submit" disabled style={{marginTop: '20px'}}>*/}
      {/*        Creating post...*/}
      {/*      </button>*/}
      {/*    ) : (*/}
      {/*      <button type="submit">Create Post</button>*/}
      {/*    )}*/}
      {/*  </Form>*/}
      {/* </Formik>*/}
    </div>
  );
};

export default CreateBlog;
