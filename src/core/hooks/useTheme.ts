import create from "zustand-store-addons";
import { Theme } from "../constants/theme";

interface ThemeStore {
  isDarkTheme: boolean;
  theme: Theme;

  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>(
  (set) => ({
    theme: Theme.dark,
    isDarkTheme: false,

    setTheme: (theme: Theme) => {
      set({ theme: theme });
    },
  }),
  {
    computed: {
      isDarkTheme: function () {
        return this.theme === Theme.dark;
      },
    },
  }
);
