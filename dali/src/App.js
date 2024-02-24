import React from 'react';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import './index.css'; 
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Mon Projet</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1>En-Tête</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="Card">
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>Bonjour mes amis</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="Card">
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>projet pfe</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="Card">
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>mohamed ali arayssi</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;

