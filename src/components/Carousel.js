import React from 'react';
import keytime from '../assets/images/keytime.png';
import postbox from '../assets/images/postbox.png';
import sat from '../assets/images/sat.png';

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
          subtitle: 'Asset management made simple for start-ups',
          imgSrc: keytime,
          repo: 'https://github.com/Kefuri/hfh-groceries',
          deployed: 'http://hfh-groceries.herokuapp.com/',
          selected: false
        }
      ]
    }
  }
}

export default Carousel;