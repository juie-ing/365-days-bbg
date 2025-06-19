import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #FFF8F0;
    color: #4B2C36;
    overflow-x: hidden;
  }
`;

const AppContainer = styled.div`
  padding: 1.3rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  color: rgb(255, 117, 117);
  margin-bottom: 0.3rem;
`;

const Tagline = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(95, 46, 62);
  margin-bottom: 1.5rem;
`;

const ContentRow = styled.div`
  display: flex;
  margin-top: 0.5rem;  // reduced margin
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;


const SideColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 0;         // remove any internal spacing
  margin-top: -8rem;      // pull it closer to top
`;


const CenterColumn = styled.div`
  flex: 2;
  max-width: 700px;
`;

const SideImage = styled.img`
  width: 90%;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const Card = styled.div`
  background-color: #F7DAD9;
  border-left: 6px solid #FF6B6B;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  white-space: pre-line;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(255, 107, 107, 0.2);
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
  color: #4B2C36;
`;

const DateText = styled.p`
  font-size: 0.95rem;
  text-align: center;
  color: #6b4b53;
  margin: 0.3rem 0;
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
  gap: 2.5rem;
  margin-top: 3rem;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Button = styled.button`
  background-color: #FF6B6B;
  color: #FFF8F0;
  border: none;
  padding: 1.4rem 2.8rem;
  font-size: 1.15rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow: 0 8px 18px rgba(75, 44, 54, 0.2);
  
  /* 💡 Added width control */
  min-width: 220px;
  max-width: 100%;
  width: 240px;

  &:hover {
    background-color: #4B2C36;
    color: white;
    animation: ${pulse} 0.6s ease-in-out;
  }
`;


function App() {
  const startDate = new Date(2025, 5, 19); // June 19, 2025
  const birthday = new Date(2026, 2, 1);   // March 1, 2026
  const today = new Date();

  const diffDays = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const dayCountText = `🔢 Day ${diffDays + 1} of 365`;

  const timeDiff = birthday.getTime() - today.getTime();
  const daysLeft = Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0);
  const birthdayCountdown = `🎉 ${daysLeft} day${daysLeft === 1 ? '' : 's'} left until Sejal's Birthday!`;

  const messages = [
    `To this lost bbg - SEJAL 💌\nHey prettiest soul inside out!\nI made this little corner of internet just for you — where every pixel holds a piece of my love.\nMaybe I don’t always show it right, or say it enough,  but this is me trying… to show you how much you mean to me.\nEach day, there’s a special message here — some to make you laugh, maybe even cry (happy tears, I promise).\nBecause you don’t have a bf, bitch!!!!`,
    `🎉 Welcome to the first day!\nStarting this with saying that you are really AMAZING as fuck!\nThis the first and special one as you are. `
  ];

  const birthdayMessage = `🎂 Happy Birthday, SEJAL! 🎂\n\nYou are light wrapped in stardust, strength wrapped in a smile.\nOn this day, know that the world became brighter because of you.\nToday is for celebrating YOU — your beauty, your grace, your soul.\nYou deserve joy beyond galaxies. Love you endlessly 💖`;

  const isBirthday = today.getDate() === 1 && today.getMonth() === 2 && today.getFullYear() === 2026;
  const dailyMessage = isBirthday ? birthdayMessage : messages[(diffDays + 1) % messages.length];

  const formattedDate = today.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>365 Days Bbg</Title>
        <Tagline>Getting Lost in You? That’s My Daily Routine, bbg.</Tagline>
      

        <ContentRow>
          <SideColumn>
            <SideImage src="/assets/gallery/HomeL.jpg" alt="Left decoration" />
          </SideColumn>

          <CenterColumn>
          <Card>
              <h3 style={{ color: '#C6A5A5', marginBottom: '1rem' }}>Today's Message 💖</h3>
              
              <Message>{dailyMessage}</Message>
            </Card>
            <DateText>{dayCountText}</DateText>
            <Card>
              <Message>{messages[0]}</Message>
            </Card>
            <DateText>📅 {formattedDate}</DateText>
            {!isBirthday && <DateText>{birthdayCountdown}</DateText>}
          </CenterColumn>

          <SideColumn>
            <SideImage src="/assets/gallery/Home.jpg" alt="Right decoration" />
          </SideColumn>
        </ContentRow>

        <ButtonContainer>
          <Button>
            Time Travel
            <br />⏳
          </Button>
          <Button>
            Surprise Me
            <br />🎁
          </Button>
        </ButtonContainer>

        <Footer>
          Made with lots of love for the most amazing person I know.
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;
