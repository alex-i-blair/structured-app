import { Link, Switch, Route } from 'react-router-dom';
import AllPosts from '../../components/Posts/AllPosts';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '20rem',
              }}
            >
              <input
                type="file"
                accept="image/*"
                name="imagePost"
                id="imagePost"
              />
              <textarea
                placeholder="Add a caption"
                name="caption-input"
              ></textarea>
            </div>
          </PrivateRoute>
          <Route path="/details">
            <h1>details</h1>
          </Route>
          <AllPosts />
        </Switch>
      </main>
    </>
  );
}
