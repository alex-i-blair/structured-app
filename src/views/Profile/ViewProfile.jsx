import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useUser } from '../../context/UserContext';

export default function ViewProfile() {
  const { user, profile, isLoaded, create } = useUser();
  if (!isLoaded) return null;
  const hasProfile = user && profile;
  const handleCreateProfile = async (profile) => {
    await create(profile);
  };
  return <CreateProfile email={user.email} onCreate={handleCreateProfile} />;
}

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
