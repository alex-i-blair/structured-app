import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <h1>ironicgram</h1>
        <h3>username</h3>
        <button>signout</button>
      </header>
      <main>
        <Router>
          <Link to="/create">
            <button>create</button>
          </Link>
          <Switch>
            <Route exact path="/create">
              <h1>create</h1>
              <input
                type="file"
                accept="image/*"
                id="upload-dish-image"
                name="dish-image"
              />
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
        </Router>
      </main>
    </>
  );
}
