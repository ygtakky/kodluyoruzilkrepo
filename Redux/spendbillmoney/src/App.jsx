import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./components/Header";

import MoneyBar from "./components/MoneyBar";
import Items from "./components/Items";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <Container className="py-5">
        <Row className="row">
          <Col sm={12}>
            <Header />
          </Col>
          <Col sm={12} className="sticky-top">
            <MoneyBar />
          </Col>
          <Col sm={12}>
            <Items />
          </Col>
          <Col>
            <Receipt />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
