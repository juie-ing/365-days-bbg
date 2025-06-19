import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #fff0f5, #e0c3fc);
    color: #333;
    overflow-x: hidden;
  }
`;

const AppContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #9d4edd;
  margin-bottom: 0.2rem;
`;

const Tagline = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: #6c5ce7;
`;

const ContentRow = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const CardColumn = styled.div`
  flex: 1;
  max-width: 55%;
  min-width: 320px;
`;

const RightSpace = styled.div`
  flex: 1;
  min-height: 300px;
  background-image: url('https://i.pinimg.com/originals/29/da/4a/29da4ac10a8a6e42f431f8f1920cb6a5.gif');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin-left: 2rem;
  flex-shrink: 0;
  min-width: 320px;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 1.8rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.6s ease forwards;
  backdrop-filter: blur(12px);
`;

const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  white-space: pre-wrap;
  color: #444;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.95rem;
  color: #888;
  margin-top: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: #7d5fff;
  color: white;
  border: none;
  padding: 0.9rem 1.8rem;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #5f3dc4;
    transform: scale(1.05);
  }
`;

const messages: string[] = [
  `To this lost bbg - SEJAL 💌
Hey prettiest soul inside out!
I made this little corner of internet just for you — where every pixel holds a piece of my love.
I may not always say it right, but this is me trying… to show you how much you mean to me.
Each day, there’s a special message here — some to make you laugh, maybe even cry (happy tears, I promise).
Because you don’t have a bf, bitch!!!!`,

  `🎉 Welcome to the first day!
Starting this with saying that you are really AMAZING as fuck!`,

  `Day 2 ✨
Remember how bright your smile is?
Even cloudy days bow down to your glow.`,

  `Day 3 🌸
Your presence feels like the first sip of chai on a cold morning.
Comforting, warm, perfect.`
  // Add more messages up to 365...
];

function App() {
  const [dayIndex, setDayIndex] = useState(0);

  useEffect(() => {
    const startDate = new Date('2025-01-01');
    const today = new Date();
    const diff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setDayIndex(Math.min(diff, messages.length - 1));
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>365 Days BBG</Title>
        <Tagline>Getting Lost in You? That’s My Daily Routine, BBG.</Tagline>

        <ContentRow>
          <CardColumn>
            <Card>
              <Message>{messages[0]}</Message>
            </Card>

            <Card>
              <h3>Today's Message 📅</h3>
              <Message>{messages[dayIndex]}</Message>
            </Card>
          </CardColumn>

          <RightSpace />
        </ContentRow>

        <ButtonContainer>
          <Button>Time Travel</Button>
          <Button>Surprise Me</Button>
        </ButtonContainer>

        <Footer>
          Made with 💖 and softest code for the most precious soul I know.
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;