import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles for body
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #fdf6f9, #f6f0ff);
    color: #333;
    overflow-x: hidden;
  }
`;

// Layout container
const AppContainer = styled.div`
  padding: 2rem;
`;

// Title
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #7d5fff;
  margin-bottom: 0.2rem;
`;

// Tagline
const Tagline = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: #555;
`;

// Main content row
const ContentRow = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: flex-start;
`;

// Left card container
const CardColumn = styled.div`
  flex: 1;
  max-width: 55%;
`;

// Placeholder for future image or design
const RightSpace = styled.div`
  flex: 1;
  min-height: 300px;
`;

// Card
const Card = styled.div`
  background: linear-gradient(to right, #fdb1d7, #d9b4f3);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  white-space: pre-line;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Message text
const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
  color: #333;
`;

// Footer
const Footer = styled.footer`
  text-align: center;
  font-size: 1rem;
  color: #888;
  margin-top: 3rem;
`;

// Button Container
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

// Button
const Button = styled.button`
  background-color: #7d5fff;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #5f3dc4;
  }
`;

function App() {
  const introMessage = `
  To this lost bbg - SEJAL 💌
Hey prettiest soul inside out!
I made this little corner of internet just for you — where every pixel holds a piece of my love.
I may not always say it right, but this is me trying… to show you how much you mean to me.
Each day, there’s a special message here — some to make you laugh, maybe even cry (happy tears, I promise).
Because you don’t have a bf, bitch!!!!`;

  const todayMessage = `
🎉 Welcome to the first day!

Starting this with saying that you are really AMAZING as fuck!`;

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>365 Days BBG</Title>
        <Tagline>Getting Lost in You? That’s My Daily Routine, BBG.</Tagline>

        <ContentRow>
          <CardColumn>

            <Card>
              <h3>Today's Message 📅</h3>
              <Message>{todayMessage}</Message>
            </Card>
          </CardColumn>

          <RightSpace>{/* Reserved for image/design */}</RightSpace>
          <ButtonContainer>
          <Button>Time Travel</Button>
          <Button>Surprise Me</Button>
        </ButtonContainer>
        </ContentRow>

        
        <Card>
              <Message>{introMessage}</Message>
         </Card>

        <Footer>
          Made with 💖 and lots of love for the most amazing person I know.
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;
