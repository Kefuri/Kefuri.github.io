import React from 'react';
import { useSpring, animated } from 'react-spring';



function CardInfo(props) {

  const style = useSpring({opacity:1 , from: {opacity: 0}});

  return(
    <animated.div className="c-card-info" style={style}>
      <p className="c-card-title">{props.title}</p>
      <p className="c-card-subtitle">{props.subtitle}</p>
      <a href={props.deployed} target="_blank" rel="noopener noreferrer">View Live</a>
      <br />
      <a href={props.repo} target="_blank" rel="noopener noreferrer">See the Repo</a>
      
    </animated.div>
  )

}

export default CardInfo