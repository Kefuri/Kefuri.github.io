import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StaticCard from '../components/StaticCard';
import TrappedinTokyo4 from '../assets/artwork/TrappedinTokyo4.png'
import HaloPyro from '../assets/artwork/HaloPyro.png'
import AESTHETIC4 from '../assets/artwork/AESTHETIC4.png'

class DesignCarousel extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          style: "tokyo-card-image",
          imgSrc: TrappedinTokyo4,
        },
        {
          id: 1,
          style: "aesthetic-card-image",
          imgSrc: AESTHETIC4,
        },
        {
          id: 2,
          style: "halo-card-image",
          imgSrc: HaloPyro,
        }
      ]
    }
  };

  makeItems = (items) => {
    return items.map(item => {
      return(
      <StaticCard item={item} key={item.id} />)
    })
  };

  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )
  }
}

export default DesignCarousel;