import { createContext, useEffect, useState } from 'react';
import { getPosts } from '../services/posts';
import { getProfile } from '../services/profiles';
import { getUser } from '../services/users';

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
