import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import ViewProfile from './views/Profile/ViewProfile';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Layout/Header';
import EditProfile from './components/Profile/EditProfile';

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
          <PrivateRoute path="/profile/edit">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <ViewProfile />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}
