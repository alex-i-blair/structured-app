import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}
