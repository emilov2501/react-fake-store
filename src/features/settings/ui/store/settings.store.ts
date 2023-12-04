import { makeAutoObservable } from "mobx";
import { Theme } from "../../../../core/constants/theme";

export class SettingStore {
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
