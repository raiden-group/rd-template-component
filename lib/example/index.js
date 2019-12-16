import ReactDom from 'react-dom';
import React from 'react';
import Component from '../index';

class App extends React.Component {
    render() {
        return <div>
            <Component/>
        </div>
    }
}

ReactDom.render(<App/>, document.getElementById('stage'));