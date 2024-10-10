import { Container, Row, Col } from "react-bootstrap";
import GiphyViewer from "./components/GiphyViewer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {


  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <GiphyViewer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
