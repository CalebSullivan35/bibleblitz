import { create } from "zustand";

type CounterStore = {
  currentScore: number;
  incrementCurrentScore: () => void;
  resetCurrentScore: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  currentScore: 0,
  incrementCurrentScore: () =>
    set((state) => ({ currentScore: state.currentScore + 1 })),
  resetCurrentScore: () => set(() => ({ currentScore: 0 })),
}));
