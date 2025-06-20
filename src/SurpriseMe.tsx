import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 100vh;
  background: url('/assets/gallery/bg-cute.jpg') center/cover no-repeat;
  color: white;
  padding: 3rem;
  text-align: center;
`;

const BigMsg = styled.h1`
  font-size: 2.2rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 2rem;
  border-radius: 20px;
`;

const BackBtn = styled.button`
  background-color: #FF6B6B;
  padding: 1rem 2rem;
  border-radius: 12px;
  color: white;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
`;

const SurpriseMe = () => {
  const today = new Date();
  const isSunday = today.getDay() === 0;
  const navigate = useNavigate();

  return (
    <Wrapper>
      {isSunday ? (
        <BigMsg>
          🎁 Surprise!<br />
          You're loved beyond words and adorable beyond reason.
        </BigMsg>
      ) : (
        <BigMsg>
          💤 Come back on Sunday for a magical surprise!
        </BigMsg>
      )}
      <BackBtn onClick={() => navigate('/')}>🔙 Back to Home</BackBtn>
    </Wrapper>
  );
};

export default SurpriseMe;
