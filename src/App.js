import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DesignPage from './pages/DesignPage';
import Footer from './components/Footer';
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
        title: 'Solving Problems With Code',
        subtitle: 'I never thought it could be this fun.',
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
        <Container className="p-0" fluid={true}>
        <Navbar sticky="top" className="border-bottom" bg="white" fluid={true}>
            <Navbar.Brand>{this.state.title}</Navbar.Brand>
            <Nav className="ml-auto">
              {this.state.headerLinks.map(item => {
                return (
                  <Nav.Link href={item.path}>{item.title}</Nav.Link>

                )
              })}
              
            </Nav>

          </Navbar>
          
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle}/>} />
          <Route path='/about' exact render={() => <AboutPage />} />
          <Route path='/design' exact render={() => <DesignPage />} />
        </Container>
        <Footer />
      </Router>
    );
  }
}

export default App;
