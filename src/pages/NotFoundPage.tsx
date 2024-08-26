import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  color: #0066cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Heading>404 - Page Not Found</Heading>
      <Message>
        Oops! The page you're looking for doesn't exist.
      </Message>
      <StyledLink to="/">
        Go back to home page
      </StyledLink>
    </Container>
  );
};

export default NotFoundPage;