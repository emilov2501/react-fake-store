import Form from "react-bootstrap/Form";
import { useThemeStore } from "../../../../core/hooks/useTheme";
import { Theme } from "../../../../core/constants/theme";

const ThemeSwitcherView: React.FC = () => {
  const { setTheme, theme, isDarkTheme } = useThemeStore();

  return (
    <Form.Check
      type="switch"
      checked={isDarkTheme}
      onChange={() =>
        theme === Theme.light ? setTheme(Theme.dark) : setTheme(Theme.light)
      }
    />
  );
};

export const ThemeSwitcher = ThemeSwitcherView;
