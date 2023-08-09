import { create } from 'zustand';

export const useUserStore = create((set) => ({
  currentUser: null,
  addCurrentUser: (user) => set(() => ({ currentUser: user })),
  deleteCurrentUser: () => set(() => ({ currentUser: null })),
  updateCurrentUser: (updateUser) => set((state) => ({ user: { ...state.user, ...updateUser } }))
}));
