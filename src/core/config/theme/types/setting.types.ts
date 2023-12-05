import { Theme } from "../../../constants/theme";

export interface ThemeProps {
  isDarkTheme?: boolean;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
