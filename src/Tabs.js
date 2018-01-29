import React, {Component} from 'react';
import "./Tabs.css"

export default class Tabs extends Component {

    props: {
        //name: type
        tabNames: Object,
        onItemClick: Function,
        colorText: String,
    }

    constructor(props) {
        super(props)

        this.state = ({
            tabNames: this.props.tabNames,
        });

    }


    render() {
        return (
            <ul>
                {this._createTabViews()}
            </ul>
        );
    }

    _createTabViews() {
        let views = [];
        if (this.state.tabNames) {
            for (var item in this.state.tabNames) {
                let temp = item;
                let v = (<li style={{color: this.props.colorText}}
                             className="TabCSS"
                             onClick={() => this._itemClick(temp)}>{this.state.tabNames[temp]}</li>);
                views.push(v);
            }
        } else {
            console.error("tabTitles is empty!")
        }
        return views;
    }

    _itemClick(temp) {
        if (this.props.onItemClick) {
            this.props.onItemClick(temp);
        }
    }
}


Tabs.defaultProps = {
    tabNames: ['tab1', 'tab2', 'tab3']
}