import * as Actions from './actions';

const reducer = (state = { pending: false, key: null }, action) => {
    switch (action.type) {
        case Actions.REGISTER_REQUEST:
            return Object.assign({}, state, { pending: true, key: null, error: null });
        case Actions.REGISTER_SUCCESS:
            return Object.assign({}, state, { pending: false, key: action.payload.key });
        case Actions.REGISTER_FAILURE:
            return Object.assign({}, state, { pending: false, error: action.payload.error });
        default:
            return state;
    }
};

exports.reducer = reducer;