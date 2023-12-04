import React, { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
}

export const Text: React.FC<TextProps> = ({ children }) => {
  return <div>{children}</div>;
};
