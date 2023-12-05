import { makeAutoObservable } from "mobx";
import { Theme } from "../../../constants/theme";
import { ThemeProps } from "..";

export class ThemeStore implements ThemeProps {
  constructor() {
    makeAutoObservable(this);
  }

  theme: Theme = Theme.light;

  get isDarkTheme(): boolean {
    return this.theme === Theme.dark;
  }

  setTheme = (theme: Theme) => {
    this.theme = theme;
  };
}
