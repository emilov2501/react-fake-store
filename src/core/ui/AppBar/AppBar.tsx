import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AppBar.css";

interface AppBarProps {
  actions?: ReactElement[];
  children?: React.ReactNode;
}

export const AppBar: React.FC<AppBarProps> = ({ actions = [], children }) => {
  return (
    <Container>
      <Row className="align-items-center justify-content-center app-bar">
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
