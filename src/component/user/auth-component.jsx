import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'react-mdl';
import Modal from 'react-modal';
import AuthBuiltinComponent from './auth-builtin-component';
import AuthCustomComponent from './auth-custom-component';

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
        backgroundColor: 'transparent',
        padding: 0,
        overflow: 'none',
    },
};

class AuthComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        unsecureLogin: PropTypes.func.isRequired,
        fetchFeatureToggles: PropTypes.func.isRequired,
    };

    render() {
        const authDetails = this.props.user.authDetails;
        if (!authDetails) return null;

        let content;
        if (authDetails.type === 'builtin') {
            content = (
                <AuthBuiltinComponent
                    unsecureLogin={this.props.unsecureLogin}
                    authDetails={authDetails}
                    fetchFeatureToggles={this.props.fetchFeatureToggles}
                />
            );
        } else {
            content = <AuthCustomComponent authDetails={authDetails} />;
        }
        return (
            <div>
                <Modal isOpen={this.props.user.showDialog} contentLabel="test" style={customStyles}>
                    <Card shadow={0}>
                        <CardTitle
                            expand
                            style={{
                                color: '#fff',
                                background: '#000',
                            }}
                        >
                            Action required
                        </CardTitle>
                        <CardText>{content}</CardText>
                    </Card>
                </Modal>
            </div>
        );
    }
}

export default AuthComponent;
