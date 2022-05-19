import { Link } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useUser } from '../../context/UserContext';

export default function ViewProfile() {
  const { user, profile, isLoaded, create } = useUser();

  if (!isLoaded) return null;

  const hasProfile = user && profile;

  const handleCreateProfile = async (profile) => {
    await create(profile);
  };

  return hasProfile ? (
    <ShowProfile profile={profile} />
  ) : (
    <CreateProfile email={user.email} onCreate={handleCreateProfile} />
  );
}

const ShowProfile = ({ profile }) => {
  return (
    <>
      <Link to="/profile/edit">
        <button>Edit profile</button>
      </Link>
      <Profile profile={profile} />
    </>
  );
};

const CreateProfile = ({ email, onCreate }) => {
  return (
    <>
      <ProfileForm
        formLabel="create profile"
        onSubmit={onCreate}
        email={email}
      />
    </>
  );
};
