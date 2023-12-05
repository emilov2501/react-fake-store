import { observer } from "mobx-react";
import Form from "react-bootstrap/Form";
import { Theme } from "../../../constants/theme";
import { useTheme } from "../../../hooks/useTheme";

const ThemeSwitcherView: React.FC = () => {
  const { setTheme, theme, isDarkTheme } = useTheme();

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

export const ThemeSwitcher = observer(ThemeSwitcherView);
