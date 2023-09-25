import {Link, useHistory, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deletePostRequest, getCategoriesRequest, getPostDetailRequest} from '../../api';
import {postsTypes} from '../../redux/actions/blogActions';

const BlogDetail = () => {
  const {id} = useParams();
  const history = useHistory();

  // redux
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postsReducer.post);
  const isLoading = useSelector((state) => state.postsReducer.isLoading);
  const error = useSelector((state) => state.postsReducer.error);
  const success = useSelector((state) => state.postsReducer.success);

  useEffect(() => {
    dispatch(getPostDetailRequest(id));
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePostRequest(id));
    if (success) {
      dispatch({type: postsTypes.GET_POSTS_RESET});
    }
    history.push('/');
  };

  return (
    <div className="blog-details">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {post && (
        <article>
          <h2>{ post.title }</h2>
          <p>Category: {post.category?.title}</p>
          <p>Author: { post.author?.full_name } { post.author?.email }</p>
          <div>{ post.content }</div>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <Link to={`/update/${post.id}`}>
            <button style={{marginLeft: 23}}>Update</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
