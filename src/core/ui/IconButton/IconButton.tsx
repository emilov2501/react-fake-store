import React, { useMemo } from "react";
import "./IconButton.css";

import { useThemeStore } from "../../hooks/useTheme";

interface IconButtonProps {
  onPressed: () => void;
  icon: React.FC<React.ComponentProps<"svg">>;
  size?: number;
}

export const IconButtonView: React.FC<IconButtonProps> = ({
  onPressed,
  icon: Icon,
  size = 24,
}) => {
  const { isDarkTheme } = useThemeStore();

  const iconTheme = useMemo(
    () => ({
      fill: !isDarkTheme ? "var(--background-dark)" : "var(--background-light)",
    }),
    [isDarkTheme]
  );

  return (
    <div className="icon-btn" onClick={onPressed}>
      <Icon style={{ width: size, height: size, ...iconTheme }} />
    </div>
  );
};

export const IconButton = IconButtonView;
