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

// Styled container for the whole app
const AppContainer = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

// Styled title
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #7d5fff;
`;

// Card-style box
const Card = styled.div`
  background: linear-gradient(to right, #fdb1d7, #d9b4f3);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Text inside the card
const Message = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: #333;
`;

// Styled footer
const Footer = styled.footer`
  margin-top: 3rem;
  font-size: 1rem;
  color: #888;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>365 Days Bbg </Title>

        <Card>
          <h2>To this lost bbg - SEJAL 💌</h2>
          <Message>
            Hey prettiest soul inside out!!! 
            <br /><br />
            I built this little corner of the internet just for you — a soft place where my love for you lives in every pixel. Maybe I don’t always show it right, or say it enough, but this is me trying… trying to show you that you mean a lot to me. This might be small, but  I hope you feel it — in the words, the colors, the care. This is my heart, written in code.
            <br /><br />
            Every single day of this year, there's a special message waiting for you here.
            Some will make you laugh, some might make you cry (happy tears, I promise!),
            and all of them come straight from my heart to yours because you don’t have a bf bitch!!. 
            <br /><br />
            <strong>You are loved, you are cherished, and you are absolutely incredible!And The most imp           YOU ARE STRONG</strong>
          </Message>
        </Card>

        <Card>
          <h2>Today's Message 📅</h2>
          <Message>
            🎉 Welcome to first day !<br />
            Starting this with saying that you are really AMAZING as fuck! 
          </Message>
        </Card>

        <Footer>
          Made with 💖 and lots of love for the most amazing person I know.
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;
