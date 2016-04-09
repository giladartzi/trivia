import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/lib/app-bar';
import RegisterForm from './registerForm/RegisterForm';
import * as registerFormActions from "./registerForm/actions"

let TriviaApp = ({ onRegister, disabled }) => {
    return (
        <div>
            <AppBar title="Trivia" iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <RegisterForm onRegister={ onRegister } disabled={ disabled } />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        disabled: state.registerForm.pending
    };
};
const mapDispatchToProps = (dispatch, state) => {
    return {
        onRegister: (payload) => {
            dispatch(registerFormActions.registerRequestAsync(payload.username, payload.password));
        }
    }
};

TriviaApp = connect(mapStateToProps, mapDispatchToProps)(TriviaApp);

export default TriviaApp;