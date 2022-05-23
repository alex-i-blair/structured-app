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
          <h1>Chirper</h1>
        </Link>
        <AuthButton />
      </header>
    </div>
  );
};

export default Header;
