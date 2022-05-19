import { Link } from 'react-router-dom';
import AuthButton from '../AuthButton';

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
