import React from 'react';
import ReactDom from 'react-dom';
// --------------------------------------------------

// ==================================================
var Comp1 = ( props ) => {

    var name = 'comp1x';

    return (
        <div className = "comp1">
            { name }, { props.att1 }
        </div>
    );
};
// ==================================================
export default Comp1;