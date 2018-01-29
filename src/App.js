import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from "./Tabs";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            currentShowIndex: 0
        })
    }

    handleClick(value) {
        // alert(value)
        switch (value) {
            case "Welcome":
                this.setState({
                    currentShowIndex: 0
                });
                break;
            case "File":
                this.setState({
                    currentShowIndex: 1
                });
                break;
            case "Edit":
                this.setState({
                    currentShowIndex: 2
                });
                break;
            case "View":
                break;
            case "Navigate":
                break;
            case "Code":
                break;
            case "Refactor":
                break;
            case "Run":
                break;
            case "Tools":
                break;
            case "VCS":
                break;
            case "Window":
                break;
            case "Help":
                break;
        }

    }


    render() {
        console.log("refresh");
        return (
            <div className="App">

                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}

                <Tabs tabNames={['WebStorm', "File", "Edit", "view"]}
                      onItemClick={(index) => {
                          let source = ['WebStorm', "File", "Edit", "view"];
                          alert(source[index])
                      }}
                />

                {/*<div>*/}
                {/*<h1 style={{*/}
                {/*visibility: this.state.currentShowIndex === 0 ? 'visible' : 'hidden',*/}
                {/*position: 'absolute',*/}
                {/*top: 200,*/}
                {/*left: 0,*/}
                {/*backgroundColor:'blue',*/}
                {/*}}>Hello</h1>*/}
                {/*<h1 style={{*/}
                {/*visibility: this.state.currentShowIndex === 1 ? 'visible' : 'hidden',*/}
                {/*position: 'absolute',*/}
                {/*top: 200,*/}
                {/*backgroundColor:'red',*/}
                {/*left: 0,*/}
                {/*}}>Wello</h1>*/}
                {/*</div>*/}

                {/*<div className="father">*/}
                {/*<ul className="nap">*/}
                {/*{this.createItem()}*/}
                {/*</ul>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*{this._createTabs()}*/}
                {/*</div>*/}

            </div>
        );
    }

    createItem() {
        let views = [];
        let itemNames = ['Welcome', 'File', 'View', 'Navigate', 'Code', 'Refactor', 'Run', 'Tools', 'VCS', 'Window', 'Help'];
        for (var t in itemNames) {//
            let temp = t;
            let v = <li key={itemNames[t]} onClick={() => this.handleClick(itemNames[temp])}>{itemNames[t]}</li>
            views.push(v);
        }
        return views;
    }

    _createTabs() {
        let tabs = [];
        let itemNames = ['Welcome', 'File', 'View', 'Navigate', 'Code', 'Refactor', 'Run', 'Tools', 'VCS', 'Window', 'Help'];
        for (var t in itemNames) {
            let temp = t;
            let v = (
                <div style={{
                    width: 100,
                    height: 20,
                    backgroundColor: 'red',
                }} key={"tab_" + temp}
                     onClick={() => this.handleClick(itemNames[temp])}>
                    <h1>hello</h1>
                </div>
            );
            tabs.push(v);
        }
        return tabs
    }
}


export default App;
