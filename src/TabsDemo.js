import React, {Component} from 'react';
import Tabs from "./Tabs";

let source = ['sunny', 'rainy', 'cloudy', 'sunshine', 'earth'];
export default class TabsDemo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Tabs
                    onItemClick={(index) => {
                        alert(source[index]);
                    }}
                    >
                </Tabs>
            </div>
        );
    }

}