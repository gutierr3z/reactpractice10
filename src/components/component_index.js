import React from 'react';
import ReactDom from 'react-dom';
// --------------------------------------------------
import Comp1 from './comp1';
import Comp2 from './comp2';
import Content from './content';
// ==================================================
class Index extends React.Component {

    render() {

        return (
            <div className="app">
                app
                <Comp1 att1 = "test1" /> {/* passing a value to a child func component */}
                <Content />
                <Comp2 att2 = "test2" /> {/* passing a value to a child class component */}
            </div>
        );
    }
};
// ==================================================
export default Index;