import React, { ReactNode } from "react";
import { useThemeStore } from "../../hooks/useTheme";

interface TextProps {
  children?: ReactNode;
  weight?: number;
  color?: string;
}

export const TextView: React.FC<TextProps> = ({ children, weight }) => {
  const { isDarkTheme } = useThemeStore();

  const styles = {
    fontWeight: weight,
    color: isDarkTheme ? "var(--background-light)" : "var(--background-dark)",
  };

  return <span style={styles}>{children}</span>;
};

export const Text = TextView;
