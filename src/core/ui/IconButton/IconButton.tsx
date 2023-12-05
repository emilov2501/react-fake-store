import React, { useMemo } from "react";
import "./IconButton.css";
import { Theme } from "../../constants/theme";
import { observer } from "mobx-react";
import { useTheme } from "../../hooks/useTheme";

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
  const { theme } = useTheme();

  const iconTheme = useMemo(
    () => ({
      fill:
        theme !== Theme.dark
          ? "var(--background-dark)"
          : "var(--background-light)",
    }),
    [theme]
  );

  return (
    <div className="icon-btn" onClick={onPressed}>
      <Icon style={{ width: size, height: size, ...iconTheme }} />
    </div>
  );
};

export const IconButton = observer(IconButtonView);
