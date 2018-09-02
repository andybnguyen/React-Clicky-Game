import styled from "styled-components";
import React from "react";

const StyledScore = styled.div`
  border-radius: 25px;
  background: green;
  color: white;
  padding: 2px; 
  width: 10%;
  text-align: center;
`;

export const Score = (props) => {
  return (
    <StyledScore>
      <p>High Score: {props.highScore}</p>
      <p>Score: {props.score}</p>
    </StyledScore>
  );
}