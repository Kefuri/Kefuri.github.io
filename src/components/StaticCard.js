import React from 'react';

function StaticCard(props) {
  console.log(props.item)
  return(
    <div className="d-inline-block c-card">
      <img className={props.item.style} src={props.item.imgSrc} alt={props.item.imgSrc}></img>
    </div>
  )
}

export default StaticCard;
