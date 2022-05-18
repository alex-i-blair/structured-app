import { createContext, useContext, useState } from 'react';
import {
  getUser,
  signInUser,
  signUpUser,
  signOutUser,
} from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();

  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  const value = { user, setUser };

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
  const { user } = context;

  return { user };
};
