import React, { Component } from "react";
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 15%;
    &:hover {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
    };
`;

export const Card = (props) => {
    return (
        <StyledImg
            src={props.imgURL}
            alt="Card image cap"
            onClick={() => {props.handleCardClicked(props.id)}}
        />
    )
};