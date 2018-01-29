import React, {Component} from "react";
import "./App.css";

let num = 0;
export default class CustomButton extends Component {
    props: {
        text: String,
        touchMe: Function,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="buttonStyle" onClick={() => {
                this.props.touchMe(num++);
            }}>{this.props.text}</div>
        )
    }
}

