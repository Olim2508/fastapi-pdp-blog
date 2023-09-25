import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../api';


const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('logged out');
    dispatch(logOut());
  };

  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
  return (
    <nav className={'navbar'}>
      <h1>My Blog</h1>
      <div className={'links'}>
        <Link to={'/'}>Home</Link>
        <Link to={'/categories/'}>Categories</Link>

        {isAuthenticated ? (
                <>
                  <Link to={'/create'}>Create blog</Link>
                  <button onClick={handleLogout}>Log out</button>
                </>
              ) : (
                <>
                  <Link to={'/sign-up'}>Sign up</Link>
                  <Link to={'/log-in'}>Log in</Link>
                </>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
