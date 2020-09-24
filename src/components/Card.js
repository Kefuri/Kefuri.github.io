import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Card(props) {
  return(
    <Container>
      <Row>
        <Col>
          {props.item.title}
          <Image src={props.item.imgSrc} rounded />
          {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} />}
        </Col>
      </Row>
    </Container>


  )

}

export default Card