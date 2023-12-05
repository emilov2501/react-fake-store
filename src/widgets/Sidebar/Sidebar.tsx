import React, { useEffect } from "react";
import "./Sidebar.css";
import { Text } from "../../core/ui";
import { AppBar } from "../../core/ui";

interface SideBarProps {
  items?: string[];
  show: boolean;
  close: () => void;
  appBarTitle?: string;
}

export const SideBar: React.FC<SideBarProps> = ({
  items = [],
  show,
  appBarTitle = "Title",
  close,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  return (
    <div
      className="sidebar"
      style={{
        visibility: show ? "visible" : "hidden",
        left: show ? "0" : "-100%",
      }}
    >
      <AppBar fluid>
        <Text color="white" weight={600}>
          {appBarTitle}
        </Text>
      </AppBar>

      {items.length > 0 && (
        <ul className="list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li onClick={close}>Close</li>
        </ul>
      )}
    </div>
  );
};
