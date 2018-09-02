import React, { Component } from "react";
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 20em;
`;

export const CardHolder = props => <div>{props.children}</div>;