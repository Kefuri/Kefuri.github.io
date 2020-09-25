import React from 'react';
import keytime from '../assets/images/keytime.png';
import postbox from '../assets/images/postbox.png';
import sat from '../assets/images/sat.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

class Carousel extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Simple Asset Tracker',
          subtitle: 'Asset management made simple for start-ups',
          imgSrc: sat,
          repo: 'https://github.com/makersacademy/simpleassettracker',
          deployed: 'http://simple-asset-tracker.herokuapp.com/',
          selected: false
        },
        {
          id: 1,
          title: 'PostBox',
          subtitle: 'Virtual Gift Boxes with pics and vids',
          imgSrc: postbox,
          repo: 'https://github.com/Kefuri/MakersPostBox',
          deployed: 'http://makers-postbox.herokuapp.com/',
          selected: false
        },
        {
          id: 2,
          title: 'Key Time',
          subtitle: 'Show vulnerable population and key workers the best times to go shopping',
          imgSrc: keytime,
          repo: 'https://github.com/Kefuri/hfh-groceries',
          deployed: 'http://hfh-groceries.herokuapp.com/',
          selected: false
        }
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items]
    items[id].selected = items[id].selected ? false : true

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

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

export default Carousel;