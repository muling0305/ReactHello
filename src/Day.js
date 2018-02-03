import React, {Component} from 'react';


let that;

class Day extends Component {


    constructor(props) {
        super(props);
        that = this;
        this.state = {
            count: 300
        }
    }

    _handleClick() {
        console.log("1");
        setInterval(this.changeCount, 1000);
    }


    // 箭头函数能够将this放到全局使用
    changeCount = () => {
        console.log("2");
        this.setState({
            count: this.state.count - 1,
        });
    }

    render() {
        return (
            <div>
                <button style={{width: 30, height: 10}} onClick={() => this._handleClick()}>{this.state.count}</button>
                <button style={{width: 30, height: 10}} onClick={() => setInterval(this.changeCount, 1000)
                }>{this.state.count}</button>
            </div>
        )
    }

}

export default Day;