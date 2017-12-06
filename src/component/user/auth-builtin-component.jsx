import React from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { CardActions, Button, Textfield } from 'react-mdl';

class AuthBuiltinComponent extends React.Component {
    static propTypes = {
        authDetails: PropTypes.object.isRequired,
        unsecureLogin: PropTypes.func.isRequired,
        fetchFeatureToggles: PropTypes.func.isRequired,
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const email = this.refs.email.inputRef.value;
        const user = { email };
        const path = evt.target.action;

        this.props
            .unsecureLogin(path, user)
            .then(this.props.fetchFeatureToggles)
            .then(() => {
                hashHistory.push('/features');
            });
    };

    render() {
        const authDetails = this.props.authDetails;
        return (
            <form onSubmit={this.handleSubmit} action={authDetails.path}>
                <p>{authDetails.message}</p>
                <p>
                    This instance of Unleash is not set up with a secure authentication provider. You can read more
                    about{' '}
                    <a href="https://github.com/Unleash/unleash/blob/master/docs/securing-unleash.md" target="_blank">
                        securing unleash on GitHub
                    </a>
                </p>
                <Textfield label="Email" name="email" required type="email" ref="email" />
                <br />

                <CardActions style={{ textAlign: 'center' }}>
                    <Button raised accent colored>
                        Unsecure Login
                    </Button>
                </CardActions>
            </form>
        );
    }
}

export default AuthBuiltinComponent;
