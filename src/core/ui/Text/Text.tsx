import React, { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  weight?: number;
  color?: string;
}

export const Text: React.FC<TextProps> = ({ children, weight, color }) => {
  const styles = {
    fontWeight: weight,
    color,
  };

  return <div style={styles}>{children}</div>;
};
