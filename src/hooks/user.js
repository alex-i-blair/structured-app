import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { createProfile, updateProfile } from '../services/profiles';
import { signInUser, signOutUser, signUpUser } from '../services/users';

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a UserProvider');
  }
  const { user, setUser } = context;
  const isLoggedIn = user?.email;

  const signUp = async (email, password) => {
    const user = await signUpUser(email, password);
    setUser(user);
    await createProfile({ username: email });
  };
  const signIn = async (email, password) => {
    const user = await signInUser(email, password);
    setUser(user);
  };

  const signOut = async () => {
    await signOutUser();
    setUser({});
  };

  return { user, isLoggedIn, signUp, signIn, signOut };
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  const { user, profile, setProfile, isLoaded } = context;

  const update = async (data) => {
    const profile = await updateProfile(data);
    setProfile(profile);
  };
  return { user, profile, isLoaded, update };
};

export const usePosts = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  const { posts } = context;

  return { posts };
};
