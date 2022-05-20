import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm';
import { useUser } from '../../context/UserContext';

export default function EditProfile() {
  const history = useHistory();
  const { profile, update, isLoaded } = useUser();
  const [loading, setLoading] = useState(false);

  if (!isLoaded) return null;

  const handleSubmit = async (profile) => {
    try {
      setLoading(true);
      await update(profile);
      history.push('/profile');
    } catch (error) {
      setLoading(false);
    }
  };
  if (loading) return <p>Loading...</p>;
  return (
    <ProfileForm
      formLabel="Edit Profile"
      name={profile?.name}
      email={profile?.email}
      bio={profile?.bio}
      username={profile?.username}
      onSubmit={handleSubmit}
    />
  );
}
