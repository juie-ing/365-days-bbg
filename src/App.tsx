import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// ---- GLOBAL STYLES ----
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #fef6fa;
    color: #2a2a2a;
    overflow-x: hidden;
  }
`;

// ---- ANIMATED BACKGROUND ----
const aura = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AuraBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, #ffc3a0, #ffafbd, #d299c2, #a18cd1);
  background-size: 600% 600%;
  animation: ${aura} 20s ease infinite;
  z-index: -1;
`;

// ---- LAYOUT ----
const AppContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  color: #7028e4;
  margin-bottom: 0.3rem;
`;

const Tagline = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #5f5f5f;
  margin-bottom: 2rem;
`;

const ContentRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const CardColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  white-space: pre-line;
  line-height: 1.8;
  color: #333;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 1rem;
  color: #888;
  margin-top: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  background: #7028e4;
  color: white;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #501ec9;
  }
`;

// ---- AUTO MESSAGES ----
const messages: string[] = [
  "Day 1: You’re a beautiful soul — don’t forget that.",
  "Day 2: Smile a little more today. You’re doing better than you think!",
  "Day 3: The world is lucky to have someone like you.",
  "Day 4: You bring light wherever you go.",
  "Day 5: Never underestimate how far you’ve come."
  // Add more messages for each day (up to 365)...
];

function getTodayMessage(): string {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return messages[(dayOfYear - 1) % messages.length];
}

// ---- APP ----
function App() {
  const introMessage = `
To this lost bbg - SEJAL 💌
Hey prettiest soul inside out!
This space is crafted with love — every pixel, every word, every shade.
You may not have a bf, but guess what? You have me, every single day.
Come here when you're low, when you're smiling, or when you just want to feel seen.
You're not alone. You're admired. You are LOVED.`;

  const todayMessage = getTodayMessage();

  return (
    <>
      <GlobalStyle />
      <AuraBackground />
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

          <CardColumn>
            <img src="https://i.imgur.com/N3YrE2O.png" alt="Cute Aura Girl" style={{ width: '100%', borderRadius: '20px' }} />
          </CardColumn>
        </ContentRow>

        <ButtonContainer>
          <Button>Time Travel</Button>
          <Button>Surprise Me</Button>
        </ButtonContainer>

        <Footer>Built with infinite care & love 💖</Footer>
      </AppContainer>
    </>
  );
}

export default App;
