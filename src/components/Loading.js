import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 16px solid #ccc;
  border-radius: 50%;
  border-top: 16px solid #000;
  width: 6rem;
  height: 6rem;
  animation: ${spin} 0.4s linear infinite;
`;

export const Loading = () => {
  return <Spinner />;
};
