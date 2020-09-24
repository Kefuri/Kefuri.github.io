import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

  return( 
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-4">
          <Col md={9}>
          { props.title && <h2 className="display-4 font-weight-bold">{props.title}</h2> }
          { props.subtitle && <h3 className="display-6 font-weight-light">{props.subtitle}</h3> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;