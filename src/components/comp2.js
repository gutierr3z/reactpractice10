import React from 'react';
import ReactDom from 'react-dom';
// --------------------------------------------------

// ==================================================
class Comp2 extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            name: 'comp2x'
        };
    }

    render() {
        return (
            <div className = "comp2">
                { this.state.name }, { this.props.att2 }
            </div>
        );
    }
};
// ==================================================
export default Comp2;