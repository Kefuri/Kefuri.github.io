import React from 'react';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Content from '../components/Content';
import Row from 'react-bootstrap/Row';

function AboutPage(props) {

  return(
    <Container>
      <Hero title={props.title} />
      <Content>
        <Row>Hey! I'm Haydon, a budding software engineer. I've been writing code since 15, and conisder myself
        incredibly lucky to have found a passion that I could bring into my work-life this early on.</Row>
        <br />
        <Row>While most of my experience is in Python and Ruby, I learnt to pick-up new languages very easily through my time at Makers Academy.
        The experience of learning new languages is already well-embedded in me though, after I learnt to speak Spanish in Spain while I lived there as a kid.</Row>
        <br />
       <Row> When I'm not writing code, I usually end up playing video games or watching anime. When those aren't entertaining me though,
        I move to books or editing on photoshop</Row> 
      </Content>
    </Container>
    
  );

}
export default AboutPage;
