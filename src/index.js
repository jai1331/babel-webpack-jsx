import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

class App extends React.Component {
    componentDidMount() {
        d3.json("./data/employees.json", this.draw());
    }
    draw(d) {
        console.log(d);
    }
    render() {
        return <p>Hello</p>
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)