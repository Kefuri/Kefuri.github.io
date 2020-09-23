import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "Haydon Houghton",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Design', path: '/design'},
        {title: 'About Me', path: '/about'}
      ],

      home: {
        title: 'Title',
        subtitle: 'subtitle',
        projects: 'projects below'
      },

      design: {
        title: 'Title',
        description: 'Desc',
        artwork: 'Art'
      },

      about: {
        title: 'Title'
      },
    }
  }
  render() {
    return (
      <Router>
        <Navbar bg="dark">
            <Nav className="mr-auto">
              {this.state.headerLinks.map(item => {
                return (
                  <Nav.Link href={item.path}>{item.title}</Nav.Link>
                )
              })}
            </Nav>

          </Navbar>
        <Container fluid={true}>
          {this.state.title}
          
        </Container>
      </Router>
    );
  }
}

export default App;
