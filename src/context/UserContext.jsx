import { createContext, useContext, useEffect, useState } from 'react';
import { getPosts } from '../services/posts';
import { createProfile, getProfile, updateProfile } from '../services/profiles';
import {
  getUser,
  signInUser,
  signOutUser,
  signUpUser,
} from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();

  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );
  const [profile, setProfile] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        if (!posts) return;
        setPosts(await getPosts());
      } catch (error) {
        setPosts(null);
      }
    };
    loadPosts();
  }, [posts]);

  useEffect(() => {
    const loadProfile = async () => {
      setIsLoaded(false);
      try {
        if (!user) return setProfile();
        const profile = await getProfile();
        setProfile(profile);
      } catch (error) {
        setProfile(null);
      } finally {
        setIsLoaded(true);
      }
    };
    loadProfile();
  }, [user]);
  const value = { user, setUser, profile, posts, setProfile, isLoaded };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

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

export const usePosts = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  const { posts } = context;

  return { posts };
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
