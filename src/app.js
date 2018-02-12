import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
// --------------------------------------------------
import Index from './components/index';
import Reducers from './reducers/index';
// ==================================================
class App extends React.Component {

    render() {

        return (
            <Provider store = { createStore( Reducers ) }>
                <Index />
            </Provider>
        );
    }
};
// ==================================================
ReactDom.render( <App />, document.querySelector( '#main' ) );