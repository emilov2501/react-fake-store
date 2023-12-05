import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AppBar.css";
import { useStore } from "../../hooks/useStore";
import { SettingStore } from "../../config/settings";
import { observer } from "mobx-react-lite";

interface AppBarProps {
  actions?: ReactElement[];
  fluid?: boolean;
  children?: React.ReactNode;
}

export const AppBarView: React.FC<AppBarProps> = ({
  actions = [],
  children,

  fluid = true,
}) => {
  const { isDarkTheme } = useStore<SettingStore>("settingStore");

  const rowStyles = {
    backgroundColor: isDarkTheme ? "#494949 " : "#29B6F6",
  };

  return (
    <Container
      fluid={fluid}
      style={{ position: "sticky", top: 0, zIndex: 998, ...rowStyles }}
    >
      <Row
        className="align-items-center justify-content-center app-bar"
        style={rowStyles}
      >
        <Col>
          <div className="body">{children}</div>
        </Col>
        {actions.length > 0 && (
          <Col xs="auto">
            <Row className="justify-content-end" xs="auto">
              {actions.map((elem, index) => (
                <Col key={index}>{elem}</Col>
              ))}
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export const AppBar = observer(AppBarView);
