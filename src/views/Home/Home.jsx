import { Link, Switch, Route } from 'react-router-dom';
import AuthButton from '../../components/AuthButton';

export default function Home() {
  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/">
          <h1>ironicgram</h1>
        </Link>
        <Link to="/profile">
          <h3>username</h3>
        </Link>
        <AuthButton />
      </header>
      <main>
        <Link to="/create">
          <button>create</button>
        </Link>
        <Switch>
          <Route exact path="/create">
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
          </Route>
          <Route path="/details">
            <h1>details</h1>
          </Route>
          <Route>
            <div className="listView">
              <ul>
                <Link to="/details/:id">
                  <p>user author</p>
                  <img src="https://www.placecage.com/c/100/100" alt="" />
                  <p>caption</p>
                </Link>
                <Link>
                  <p>user author</p>
                  <img src="https://www.placecage.com/c/100/101" alt="" />
                  <p>caption</p>
                </Link>
                <Link>
                  <p>user author</p>
                  <img src="https://www.placecage.com/c/100/102" alt="" />
                  <p>caption</p>
                </Link>
              </ul>
            </div>
          </Route>
        </Switch>
      </main>
    </>
  );
}
