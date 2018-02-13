import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
// --------------------------------------------------

// ==================================================
class Comp2 extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            name: 'comp2x'
        };
    }

    throughList() {
        return this.props.books.map( ( book ) => {
            return (
                <li key = { book.title }>{ book.title }</li>
            );
        });
    }

    render() {
        return (
            <div className = "comp2">
                { this.state.name }, { this.props.att2 }, value: { this.props.value }

                <ul>
                    { this.throughList() }
                </ul>
            </div>
        );
    }
};
// ==================================================
// export default Comp2;
function mapStateToProps( state ) {
    return {
        books: state.books,
        value: state.value
    };
}

export default connect( mapStateToProps )( Comp2 );