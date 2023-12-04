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

  if (show) {
    return (
      <div className="sidebar">
        <AppBar color="#c2c2c2" fluid>
          <Text>{appBarTitle}</Text>
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
  }

  return <></>;
};
