export default function( state = null, action ) {

    switch( action.type ) {
        case "BOOK_SELECTED":
            // console.log( 'xxxx', action.payload );
            return action.payload;
        default:
            return state;
    };

    // return state;
};