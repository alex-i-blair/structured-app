import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PostCard({ post }) {
  const { profile } = useUser();
  // console.log('profile :>> ', profile);
  return (
    <>
      <Link to={`/details/${post.id}`}>
        <h1>{post.chirp}</h1>
        <p>by {profile?.username}</p>
      </Link>
    </>
  );
}
