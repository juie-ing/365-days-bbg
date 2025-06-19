import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles for the body
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #fff0f6, #e0c3fc);
    color: #333;
    overflow-x: hidden;
  }
`;

// App layout container
const AppContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Page title
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #7d5fff;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

// Page tagline
const Tagline = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 2rem;
`;

// Flex container for content
const ContentRow = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
`;

// Card container (left column)
const CardColumn = styled.div`
  flex: 1;
  min-width: 320px;
  max-width: 55%;
`;

// Right section (for future image or design)
const RightSpace = styled.div`
  flex: 1;
  min-width: 320px;
  min-height: 300px;
  background: url('https://source.unsplash.com/400x400/?love,heart') no-repeat center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

// Card design
const Card = styled.div`
  background: linear-gradient(to right, #ffc8dd, #d0bfff);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  white-space: pre-line;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    margin-top: 0;
    color: #5c3dc4;
  }
`;

// Text content in cards
const Message = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
`;

// Button container
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

// Styled button
const Button = styled.button`
  background-color: #7d5fff;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(125, 95, 255, 0.3);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #5f3dc4;
    transform: scale(1.03);
  }
`;

// Footer section
const Footer = styled.footer`
  text-align: center;
  font-size: 0.95rem;
  color: #888;
  margin-top: 4rem;
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
              <Message>{introMessage}</Message>
            </Card>
            <Card>
              <h3>Today's Message 📅</h3>
              <Message>{todayMessage}</Message>
            </Card>
          </CardColumn>

          <RightSpace />
        </ContentRow>

        <ButtonContainer>
          <Button>Time Travel</Button>
          <Button>Surprise Me</Button>
        </ButtonContainer>

        <Footer>
          Made with 💖 and lots of love for the most amazing person I know.
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;
