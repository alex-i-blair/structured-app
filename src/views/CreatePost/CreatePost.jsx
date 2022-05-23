import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/user';
import { postPost } from '../../services/posts';

export default function CreatePost({ error }) {
  const { profile } = useUser();
  const [saving, setSaving] = useState(false);
  const [formState, setFormState] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    const chirp = event.target.value;
    setFormState((prevState) => {
      return {
        ...prevState,
        chirp,
        username: profile.username,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSaving(true);
      await postPost(formState);
      setSaving(false);
      history.push('/');
    } catch (err) {
      setSaving(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '20rem',
      }}
    >
      {/* <input type="file" accept="image/*" name="imagePost" id="imagePost" />
       */}
      <textarea
        onChange={handleChange}
        placeholder="Add a caption"
        name="caption-input"
      ></textarea>

      <button disabled={saving}>Save</button>

      {error && <p>{error}</p>}
    </form>
  );
}
