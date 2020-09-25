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
        title: 'Design Work',
        description: 'As a creative outlet, I took to Photoshop to make art pieces known on the internet as GFX. The few below are all from different years of my progress.',
        artwork: 'Art'
      },

      about: {
        title: 'About Me'
      },
    }
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Container className="p-0" fluid={true}>
        <Navbar sticky="top" className="border-bottom" bg="white" fluid={true}>
            <Navbar.Brand>{this.state.title}</Navbar.Brand>
            <Nav className="ml-auto">
              <Link className="nav-link" to='/'>Home</Link>
              <Link className="nav-link" to="/design">Design</Link>
              <Link className="nav-link" to="/about">About Me</Link>
            </Nav>

          </Navbar>
          
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle}/>} />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/design' render={() => <DesignPage title={this.state.design.title}/>} />
        </Container>
        <Footer />
      </Router>
    );
  }
}

export default App;
