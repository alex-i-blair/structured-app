import { Link } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useUser } from '../../context/UserContext';

export default function ViewProfile() {
  const { user, profile, isLoaded, update } = useUser();

  if (!isLoaded) return null;

  const hasUpdatedProfile = user && profile.name;

  const handleUpdateProfile = async (profile) => {
    await update(profile);
  };

  return hasUpdatedProfile ? (
    <>
      <Link to="/profile/edit">
        <button>Edit profile</button>
      </Link>
      <Profile profile={profile} />
    </>
  ) : (
    <>
      <ProfileForm
        formLabel="create profile"
        onSubmit={handleUpdateProfile}
        email={user.email}
      />
    </>
  );
}

// const ShowProfile = ({ profile }) => {
//   return (
//     <>
//       <Link to="/profile/edit">
//         <button>Edit profile</button>
//       </Link>
//       <Profile profile={profile} />
//     </>
//   );
// };

// const CreateProfile = ({ email, onCreate }) => {
//   return (
//     <>
//       <ProfileForm
//         formLabel="create profile"
//         onSubmit={onCreate}
//         email={email}
//       />
//     </>
//   );
// };
