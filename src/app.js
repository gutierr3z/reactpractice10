import React from 'react';
import ReactDom from 'react-dom';
// --------------------------------------------------
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
// ==================================================
class App extends React.Component {

    render() {

        return (
            <div className="app">
                app
                <Comp1 />
                <Comp2 />
            </div>
        );
    }
};
// ==================================================
ReactDom.render( <App />, document.querySelector( '#main' ) );