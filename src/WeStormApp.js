import React, {Component} from 'react'

import './WeStormApp.css'

import Tabs from  './Tabs'

const dataSource = [
    {
        tabName: 'Welcome',
        info: 'we are family because our time is here and you are best friends.'
    },
    {
        tabName: 'File',
        info: 'last year i worked as an editor so i am good at writing some student\' papers'
    },
    {
        tabName: 'Edit',
        info: 'come on we see some senses '
    }
    ,
    {
        tabName: 'View',
        info: 'please don\'t go away'
    },
    {
        tabName: 'Navigate',
        info: 'hello navigating some lalalalalala'
    },
    {
        tabName: 'Code',
        info: 'HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:'
    },
    {
        tabName: 'Refactor',
        info: 'This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.'
    },
    {
        tabName: 'Run',
        info: "In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState()."
    },
    {
        tabName: 'Tools',
        info: 'tools'
    },
    {
        tabName: 'VCS',
        info: 'vcs'
    },
    {
        tabName: 'Window',
        info: 'window'
    },
    {
        tabName: 'Help',
        info: 'help'
    },
];


export default class WeStormApp extends Component {

    constructor(props) {
        super(props)

        console.log('wo de:'+dataSource.tabName)

        this.state = ({
            currentShowIndex: 0
        })
    }

    componentWillMount() {

    }

    // _handleClick(value) {
    //     let index = 0;
    //     switch (value) {
    //         case "Welcome":
    //             index = 0;
    //             break;
    //         case "File":
    //             index = 1;
    //             break;
    //         case "Edit":
    //             index = 2;
    //             break;
    //         case "View":
    //             index = 3;
    //
    //             break;
    //         case "Navigate":
    //             index = 4;
    //
    //             break;
    //         case "Code":
    //             index = 5;
    //
    //             break;
    //         case "Refactor":
    //             index = 6;
    //
    //             break;
    //         case "Run":
    //             index = 7;
    //
    //             break;
    //         case "Tools":
    //             index = 8;
    //
    //             break;
    //         case "VCS":
    //             index = 9;
    //
    //             break;
    //         case "Window":
    //             index = 10;
    //
    //             break;
    //         case "Help":
    //             index = 11;
    //             break;
    //     }
    //     this.setState({
    //         currentShowIndex: index,
    //     })
    //
    // }

    _createItem() {
        let views = [];
        for (var t in dataSource) {//
            let temp = t;
            let v = <li style={{color: 'white', textAlign: 'center'}} key={'key_' + temp}
                        onClick={() => this._handleClick(dataSource[temp].tabName)}>{dataSource[temp].tabName}</li>
            views.push(v);
        }
        return views;
    }

    _createTabs() {
        let view = <div className="sub">
            {dataSource[this.state.currentShowIndex].info}
        </div>
        return view;
    }
    _sourceLoop(){
        let some=[];
        for(var i in dataSource){
            let name=dataSource[i].tabName;
            some.push(name);
        }
        return some;
    }

    render() {
        return (
            <div className="Main">
                <Tabs colorText={"white"} tabNames={this._sourceLoop()} onItemClick={(index)=>{
                    this.setState({
                        currentShowIndex: index,
                    })
                }}/>
                {/*<ul className="Tab">*/}
                    {/*{this._createItem()}*/}
                {/*</ul>*/}

                {this._createTabs()}

            </div>
        );
    }

}