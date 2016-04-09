export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

let registerRequest = (username, password) => {
    return {
        type: REGISTER_REQUEST,
        username,
        password
    }
};

let registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
};

let registerFailure = (payload) => {
    return {
        type: REGISTER_FAILURE,
        payload
    }
};

export function registerRequestAsync(username, password) {
    return (dispatch) => {
        dispatch(registerRequest(username, password));

        fetch("http://localhost/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((response) => response.json())
            .then((json) => {if (json.error) throw json; dispatch(registerSuccess(json))})
            .catch((json) => dispatch(registerFailure(json)));
    };
}