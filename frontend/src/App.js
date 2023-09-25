import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateBlog from './pages/BlogCreate';
import BlogDetail from './components/BlogDetail';
import React, {lazy} from 'react';
import BlogUpdate from './components/BlogUpdate';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import CategoryList from './pages/CategoryList';
import CategoryCreate from './pages/CategoryCreate';
import routes from './constants/routes';
import ResponsiveNavBar from './components/NavbarNew';

// const Home = lazy(() => import('./pages/Home'));

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveNavBar/>
        {/* <Navbar/>*/}
        <Switch>
          <React.Fragment>
            <div className={'content'}>
              <Route exact={true} path={routes.home} component={Home} />
              <Route path={routes.blogCreate} component={CreateBlog} />
              <Route path={routes.blogDetail} component={BlogDetail} />
              <Route path={routes.blogUpdate} component={BlogUpdate} />
              <Route path={routes.signUp} component={SignUp} />
              <Route path={routes.logIn} component={LogIn} />
              <Route path={routes.categories} component={CategoryList} />
              <Route path={routes.categoryCreate} component={CategoryCreate} />
            </div>
          </React.Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
