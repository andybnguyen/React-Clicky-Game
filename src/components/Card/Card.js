import React, { Component } from "react";
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 50em;
`
    ;

class Card extends Component {
    constructor() {
        super();
        this.state = {
            clicked: 0
        };
    };

    handleOnClickEvent = () => {
        this.setState({ clicked: 1 });
    }

    render() {
        return (
            <StyledImg
                src={this.props.imgURL}
                alt="Card image cap"
                onClick={this.handleOnClickEvent}
            />
        )
    }
}

export default Card;