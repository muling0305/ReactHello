import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WeStormApp from "./WeStormApp";
import TabsDemo from "./TabsDemo";
import CustomButton from "./CustomButton";

ReactDOM.render(<CustomButton touchMe={(num)=>{alert(num)}} text={"hahahahhahahahn"} />, document.getElementById('root'));
registerServiceWorker();
