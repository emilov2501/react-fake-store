import React from "react";
import "./IconButton.css";

interface IconButtonProps {
  onPressed: () => void;
  icon: React.FC<React.ComponentProps<"svg">>;
  size?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onPressed,
  icon: Icon,
  size = 24,
}) => {
  return (
    <div className="icon-btn" onClick={onPressed}>
      <Icon style={{ width: size, height: size }} />
    </div>
  );
};
