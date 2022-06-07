import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

function Home() {

  return (
    <Container className="p-5 text-center">
      <h1> Welcome to Sticky Boiz </h1>
      <p> We specialize in high-quality stickers of all designs. </p>
      <Button variant="secondary" href="/Shop"> Explore the Shop </Button>
    </Container>
  );
}

export default Home;
