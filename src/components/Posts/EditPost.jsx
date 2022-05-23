import { useEffect } from 'react';
import { useState } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from '../../hooks/useForm';
import { deletePost, getPostDetails, updatePost } from '../../services/posts';

export default function EditPost({ chirp = '' }) {
  const history = useHistory();
  const [saving, setSaving] = useState(false);
  const { formState, handleChange } = useForm(chirp);
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      setPost(await getPostDetails(id));
    };
    getPost();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSaving(true);
      await updatePost(formState.editChirp, id);
      setSaving(false);
      history.push('/');
    } catch (error) {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    await deletePost(id);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Edit Post</legend>
            <section>
              <label htmlFor="editChirp">Edit Chirp</label>
              <input
                placeholder={post.chirp}
                type="text"
                id="editChirp"
                name="editChirp"
                value={formState?.chirp}
                onChange={handleChange}
              />
            </section>
          </fieldset>
          <button disabled={saving}>Save</button>
        </form>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}
