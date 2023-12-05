import { makeAutoObservable } from "mobx";
import { DEFAULT_THEME, Theme } from "../../../constants/theme";
import { ThemeProps } from "..";

export class ThemeStore implements ThemeProps {
  constructor() {
    makeAutoObservable(this);
  }

  theme: Theme = DEFAULT_THEME;

  get isDarkTheme(): boolean {
    return this.theme === Theme.dark;
  }

  setTheme = (theme: Theme) => {
    this.theme = theme;
  };
}
