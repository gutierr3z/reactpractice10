import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
// --------------------------------------------------
import { AselectedBook } from '../actions/action_selectedBook';
import { bindActionCreators } from 'redux';
import SelectedBookComp from './component_selectedBook';
// ==================================================
class Content extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    renderList() {
        return this.props.books.map( ( book ) => {
            return (
                <li key = { book.title } 
                    onClick = { 
                        () => { 
                            this.props.xselectedBook( book ) 
                        }
                    }>
                    { book.title }
                </li>
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
                <hr />
                <SelectedBookComp />
                <hr />
                value: { this.props.value }
            </div>
        );
    }
};
// ==================================================
function mapStateToProps( state ) {
    return {
        books: state.books,
        value: state.value
    };
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { xselectedBook: AselectedBook }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Content );



