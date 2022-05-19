import { useState } from 'react';

export default function ProfileForm({
  formLabel = 'ProfileForm',
  name = '',
  email,
  bio = '',
  error,
  onSubmit,
  profilePic = null,
}) {
  console.log(email);
  const [formState, setFormState] = useState({});
  const [saving, setSaving] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        email,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSaving(true);
      await onSubmit(formState);
    } catch (err) {
      setSaving(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{formLabel}</legend>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            value={formState.username}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <p>{email}</p>
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            id="bio"
            rows={4}
            value={formState.bio}
            placeholder="Tell the people about yourself"
            onChange={handleChange}
          />
          <label htmlFor="profilePic">Upload a profile picture</label>
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            accept="image/*"
          />
        </div>
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
        {error && <p>{error}</p>}
      </fieldset>
    </form>
  );
}
