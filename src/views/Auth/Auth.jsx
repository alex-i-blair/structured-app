import {
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useAuth } from '../../context/UserContext';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { isLoggedIn, signUp, signIn } = useAuth();

  const signUpOptions = {
    action: signUp,
    label: 'Sign Up',
    message: <Link to="/login">Sign in</Link>,
  };
  const signInOptions = {
    action: signIn,
    redirectTo: '/',
    label: 'Sign in',
    message: <Link to="/register">Sign up</Link>,
  };

  const options = isSigningUp ? signUpOptions : signInOptions;

  const handleAuthSubmit = async (email, password) => {
    await options.action(email, password);
    history.replace(options.redirectTo);
  };

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <>
      <div className="authForm">
        <AuthForm onSubmit={handleAuthSubmit} label={options.label} />
      </div>
    </>
  );
}
