import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCategoryRequest, getCategoriesRequest, getUserMe} from '../../api';
import {Link} from 'react-router-dom';
import {categoryTypes} from '../../redux/actions/categoryActions';

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const isLoading = useSelector((state) => state.categoriesReducer.isLoading);
  const error = useSelector((state) => state.categoriesReducer.error);
  const success = useSelector((state) => state.categoriesReducer.success);
  // const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
  // const user = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  const handleDelete = async (id) => {
    await dispatch(deleteCategoryRequest(id));
    if (success) {
      dispatch({type: categoryTypes.GET_CATEGORIES_RESET});
    }
    // history.push('/');
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(getUserMe());
  //   }
  // }, []);

  return (
    <div className="home">
      {/* {user && isAuthenticated && <h1 className={'user-header'}>Hello {user.email}</h1>}*/}
      <h2>Categories</h2>
      <Link to={'/category/create/'}>Create new category</Link>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {categories && (
        <div className="blog-list">
          {categories.map((category) => (
            <div className="blog-preview" key={category.id} >
              <h2>{ category.title }</h2>
              <button className={'btn'} onClick={() => handleDelete(category.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
