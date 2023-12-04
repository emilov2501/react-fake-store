import { observer } from "mobx-react";
import React, { ReactNode } from "react";
import { useStore } from "../../hooks/useStore";
import { SettingStore } from "../../../features/settings";

interface TextProps {
  children?: ReactNode;
  weight?: number;
  color?: string;
}

export const TextView: React.FC<TextProps> = ({ children, weight }) => {
  const { isDarkTheme } = useStore<SettingStore>("settingStore");

  const styles = {
    fontWeight: weight,
    color: isDarkTheme ? "var(--background-light)" : "var(--background-dark)",
  };

  return <span style={styles}>{children}</span>;
};

export const Text = observer(TextView);
