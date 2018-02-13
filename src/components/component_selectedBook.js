import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedBook extends Component {
    render() {

        if( !this.props.selectedBook2 ) {
            return (
                <div>
                    Select a link
                </div>
            );
        }

        return (
            <div>
                You selected: { this.props.selectedBook2.title }!
            </div>
        );
    }
};
// ==================================================
function mapStateToProps( state ) {
    return {
        selectedBook2: state.selectedBook3
    };
}

export default connect( mapStateToProps )( SelectedBook );