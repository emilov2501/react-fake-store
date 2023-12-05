import React, { ReactElement, useEffect } from "react";
import "./Sidebar.css";
import { Text } from "../../core/ui";
import { AppBar } from "../../core/ui";

type Slide = "left" | "right";
interface SideBarProps {
  items?: string[];
  show: boolean;
  close: () => void;
  appBarTitle?: string;
  appBarAction?: ReactElement[];
  slide?: Slide;
}

export const SideBar: React.FC<SideBarProps> = ({
  items = [],
  show,
  appBarAction = [],
  slide = "left",
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

  const slideDirection = {
    [slide]: show ? "0" : "-100%",
  };

  return (
    <>
      {show && <div className="overlay" onClick={close}></div>}
      <div
        className="sidebar"
        style={{
          visibility: show ? "visible" : "hidden",
          ...slideDirection,
        }}
      >
        <AppBar fluid actions={appBarAction}>
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
    </>
  );
};
