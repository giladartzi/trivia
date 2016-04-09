import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class RegisterForm extends React.Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onRegister({
            username: this.refs.username.getValue(),
            password: this.refs.password.getValue()
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <TextField ref="username" hintText="Username" />
                <br/>
                <TextField ref="password" type="password" hintText="Password" />
                <br/>
                <RaisedButton type="submit" label="Register" disabled={this.props.disabled} />
            </form>
        );
    }
}

RegisterForm.propTypes = {
    onRegister: React.PropTypes.func.isRequired
};