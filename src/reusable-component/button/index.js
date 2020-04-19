import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <button onClick={this.props.click} className={this.props.class} disabled={this.props.state}>
                <img src={this.props.icon} alt='' style={{width: this.props.icnWidth, height: this.props.icnHeight}}/>
                {this.props.icon && this.props.text ? <span>&nbsp; {this.props.text}</span> : <span>{this.props.text}</span>}
            </button>
         );
    }
}
 
export default Button;