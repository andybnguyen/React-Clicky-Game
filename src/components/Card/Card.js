import React, { Component } from "react";
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 20em;
`;

export const Card = (props) => {
    return (
        <StyledImg
            src={props.imgURL}
            alt="Card image cap"
            onClick={() => {props.updateScore(props.id)}}
        />
    )
};