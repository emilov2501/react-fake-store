import React, { useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import { Theme } from "../../constants/theme";
import { observer } from "mobx-react";
import { useTheme } from "../../hooks/useTheme";

interface ScaffoldProps {
  appBar: React.ReactElement;
  body: React.ReactElement;
}

const ScaffoldView: React.FC<ScaffoldProps> = ({ appBar, body }) => {
  const { theme } = useTheme();

  const scaffoldTheme = useMemo(
    () => ({
      minHeight: "-webkit-fill-available",
      backgroundColor:
        theme === Theme.dark
          ? "var(--background-dark)"
          : "var(--background-light)",
    }),
    [theme]
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

export const Scaffold = observer(ScaffoldView);
