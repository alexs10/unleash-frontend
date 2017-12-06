import React from 'react';
import PropTypes from 'prop-types';
import { Textfield, Button } from 'react-mdl';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 99999,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFFFFF',
    },
};

class EditUserComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const email = this.refs.email.inputRef.value;
        const user = { email };
        const path = evt.target.action;

        // Todo: clean up (other locations needs fixing also)
        this.props
            .unsecureLogin(path, user)
            .then(this.props.fetchFeatureToggles)
            .then(() => {
                hashHistory.push('/features');
            });
    };

    render() {
        const authDetails = this.props.user.authDetails;
        let content;
        if (authDetails && authDetails.type === 'custom') {
            content = (
                <div>
                    <p>{authDetails.message}</p>
                    <a href={authDetails.path}>Log inn</a>
                </div>
            );
        } else if (authDetails && authDetails.type === 'builtin') {
            content = (
                <form onSubmit={this.handleSubmit} action={authDetails.path}>
                    <p>{authDetails.message}</p>
                    <p>
                        This instance of Unleash is not set up with a secure authentication provider. You can read more
                        about <a href="">securing unleash on GitHub</a>
                    </p>
                    <Textfield label="Email" name="email" required type="email" ref="email" />
                    <br />
                    <Button raised accent>
                        Unsecure Login
                    </Button>
                </form>
            );
        }

        return (
            <div>
                <Modal isOpen={this.props.user.showDialog} contentLabel="test" style={customStyles}>
                    <h2>Action required</h2>
                    <div>{content}</div>
                </Modal>
            </div>
        );
    }
}

export default EditUserComponent;
