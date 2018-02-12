import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
// --------------------------------------------------

// ==================================================
class Content extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }
    
    renderList() {
        return this.props.books.map( ( book ) => {
            return (
                <li key = { book.title }>{ book.title }</li>
            );
        });
    }

    render() {
        return (
            <div className = "content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <ul>
                    { this.renderList() }
                </ul>
            </div>
        );
    }
};
// ==================================================
// export default Content;
function mapStateToProps( state ) {
    return {
        books: state.books
    };
}

export default connect( mapStateToProps )( Content );