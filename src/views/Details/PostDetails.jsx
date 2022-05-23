import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { getPostDetails } from '../../services/posts';

export default function PostDetails() {
  const { postId } = useParams();
  const { profile } = useUser();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const currPost = await getPostDetails(Number(postId));
      console.log('currPost :>> ', currPost);
      setPost(currPost);
      setLoading(false);
    };
    getPost();
  }, [postId]);
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <p>{post.chirp}</p>
          <p>
            created at {new Date(post.created_at).toLocaleTimeString()}{' '}
            {new Date(post.created_at).toLocaleDateString()}
          </p>
          <p>by {profile?.username}</p>
        </div>
      )}
    </>
  );
}