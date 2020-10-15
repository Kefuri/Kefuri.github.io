import React from 'react';
import GitHubIconDark from '../assets/icons/GitHubIconSmall.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Footer(props) {

  return(
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className=" border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Haydon Houghton
          </Col>
          <Col className="p-0 d-flex justify-content-end">
            <a href='https://github.com/kefuri' target="_blank" rel="noopener noreferrer"><img src={GitHubIconDark} /></a>
          </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;