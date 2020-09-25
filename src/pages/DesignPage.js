import React from 'react';
import Container from 'react-bootstrap/Container'
import Hero from '../components/Hero';
import Content from '../components/Content';
import DesignCarousel from '../components/DesignCarousel';

function DesignPage(props) {

  return(
    <Container>
      <Hero title={props.title} />
      <Content>
        I found that Photoshop editing was a great creative outlet for me. Drawing and painting never took off, but the crossover with technology here made GFX design fun.
        <br />
        Each of the works below was made in a different year, with the bottom work coming from 2016 and the top from late 2019.
      </Content>
      <DesignCarousel />
    </Container>
    
  );

}
export default DesignPage;
