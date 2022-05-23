import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <>
      <Link to={`/details/${post.id}`}>
        <h1>{post.chirp}</h1>
        <p>by {post.username}</p>
      </Link>
    </>
  );
}
