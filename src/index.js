import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class App extends React.Component {
    render() {
        return <p>Hello</p>
    }
}

const ele = <App/>;

ReactDOM.render(
    ReactDOMServer.renderToStaticMarkup(ele),
    document.getElementById('root')
)
