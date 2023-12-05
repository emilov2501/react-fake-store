import { makeAutoObservable } from "mobx";
import { Theme } from "../../../constants/theme";

export class ThemeStore {
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
