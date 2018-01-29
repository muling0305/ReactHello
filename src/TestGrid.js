import React, {Component} from 'react'


export default class TestGrid extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <button onClick={() => alert("some")}>hello</button>
                {this.createButtons()}
            </div>
        );
    }

    createButtons() {
        let numbers = [
            {
                name: 'File',
            },
            {
                name: 'Edit',
            },
            {
                name: 'View',
            }
        ];
        let views = [];
        for (var item in numbers) {
            let vv = (
                <button key={item} onClick={() => {
                    console.info(">>>>" + numbers[item].name);
                    this.itemsClick(numbers[item].name);
                }}>
                    {item}</button>
            );
            views.push(vv)
        }

        return views;
    }

    itemsClick(item) {
        alert(item);
    }
}