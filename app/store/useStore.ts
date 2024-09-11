import { create } from "zustand";

interface UserState {
  isLoggedIn: boolean;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  updateUser: (
    isLoggedIn: boolean,
    email: string | null,
    displayName: string | null,
    photoURL: string | null
  ) => void;
}

const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  email: null,
  displayName: null,
  photoURL: null,
  updateUser: (isLoggedIn, email, displayName, photoURL) =>
    set({
      isLoggedIn,
      email,
      displayName,
      photoURL,
    }),
}));

export default useUserStore;
