import React, {Component} from "react";

class Nav extends Component {
    constructor(props) {
        super();
        this.state = {
            value: props.firstProp,
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>Andy</h1>
                <h2>{this.props.firstProp}</h2>
            </React.Fragment>
        )
    }
}

export default Nav;