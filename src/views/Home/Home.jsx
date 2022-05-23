import { Link, Switch, Route } from 'react-router-dom';
import AllPosts from '../../components/Posts/AllPosts';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import CreatePost from '../CreatePost/CreatePost';
import PostDetails from '../Details/PostDetails';

export default function Home() {
  return (
    <>
      <main>
        <Link to="/create">
          <button>create</button>
        </Link>
        <Switch>
          <PrivateRoute exact path="/create">
            <h1>create</h1>
            <CreatePost />
          </PrivateRoute>
          <Route path="/details/:postId">
            <PostDetails />
          </Route>
          <AllPosts />
        </Switch>
      </main>
    </>
  );
}
