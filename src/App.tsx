import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styling
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right top, #fff0f5, #e0c3fc);
    color: #333;
    overflow-x: hidden;
  }
`;

// Main container
const AppContainer = styled.div`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Title styling
const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  color: #a061ff;
  margin-bottom: 0.3rem;
  letter-spacing: 1px;
`;

// Tagline styling
const Tagline = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: #777;
  margin-bottom: 2.5rem;
`;

// Flex row for layout
const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

// Left side column
const CardColumn = styled.div`
  flex: 1;
  min-width: 340px;
  max-width: 55%;
`;

// Right side image box
const RightSpace = styled.div`
  flex: 1;
  min-width: 340px;
  min-height: 380px;
  background: url('https://source.unsplash.com/400x500/?flowers,clouds') no-repeat center;
  background-size: cover;
  border-radius: 25px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
`;

// Cute glassy card
const Card = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease-in-out;
  white-space: pre-line;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-top: 0;
    color: #6c4cff;
    font-weight: 600;
  }
`;

// Message text
const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
`;

// Buttons layout
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

// Button style
const Button = styled.button`
  background: linear-gradient(to right, #a061ff, #ff85b3);
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 4px 14px rgba(160, 97, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(255, 133, 179, 0.4);
  }
`;

// Footer
const Footer = styled.footer`
  text-align: center;
  font-size: 0.95rem;
  color: #aaa;
  margin-top: 4rem;
  padding-bottom: 2rem;
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
          Made with 💖 and soft code just for the cutest soul ever.
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;
