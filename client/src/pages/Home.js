import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Carousel from 'react-bootstrap/Carousel';

function Home() {

  return (
    <Container className="p-3 text-center">
      <h1> Welcome to Sticky Boiz </h1>
      <p> We specialize in high-quality stickers of all designs. </p>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/carousel1.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/carousel2.png")}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div style={{ paddingTop: 10 }}>
        <Button variant="secondary" href="/Shop"> Explore the Shop </Button>
      </div>
    </Container>
  );
}

export default Home;
