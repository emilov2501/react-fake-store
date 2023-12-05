import { ThemeProps, ThemeStore } from "../config/theme";
import { DI } from "../di/di";

export const useTheme = (): ThemeProps => DI.resolve<ThemeStore>("themeStore");
