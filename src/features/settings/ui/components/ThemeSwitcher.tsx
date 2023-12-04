import Form from "react-bootstrap/Form";
import { useStore } from "../../../../core/hooks/useStore";
import { SettingStore } from "..";
import { observer } from "mobx-react";
import { Theme } from "../../../../core/constants/theme";

const ThemeSwitcherView: React.FC = () => {
  const { setTheme, theme, isDarkTheme } = useStore<SettingStore>("settingStore");

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
