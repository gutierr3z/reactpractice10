import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
// --------------------------------------------------
import Index from './components/component_index';
import Reducers from './reducers/reducer_index';
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







