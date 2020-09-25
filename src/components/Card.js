import React from 'react';
import CardInfo from './CardInfo'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';

function Card(props) {
  return(
    <div className="d-inline-block c-card" onClick={(e) => props.click(props.item)}>
      <img className="c-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}></img>
      {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} repo={props.item.repo} deployed={props.item.deployed} />}
    </div>
  )

}

export default Card