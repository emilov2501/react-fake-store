import React, { useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import { useThemeStore } from "../../hooks/useTheme";

interface ScaffoldProps {
  appBar: React.ReactElement;
  body: React.ReactElement;
}

const ScaffoldView: React.FC<ScaffoldProps> = ({ appBar, body }) => {
  const { isDarkTheme } = useThemeStore();

  const scaffoldTheme = useMemo(
    () => ({
      minHeight: "-webkit-fill-available",
      backgroundColor: isDarkTheme
        ? "var(--background-dark)"
        : "var(--background-light)",
    }),
    [isDarkTheme]
  );

  return (
    <Container style={scaffoldTheme} fluid>
      <Row xs={1} md={1} lg={1}>
        {appBar}
        {body}
      </Row>
    </Container>
  );
};

export const Scaffold = ScaffoldView;
