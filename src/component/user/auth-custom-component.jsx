import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, Button } from 'react-mdl';

class AuthCustomComponent extends React.Component {
    static propTypes = {
        authDetails: PropTypes.object.isRequired,
    };

    render() {
        const authDetails = this.props.authDetails;
        return (
            <div>
                <p>{authDetails.message}</p>
                <CardActions style={{ textAlign: 'center' }}>
                    <a href={authDetails.path}>
                        <Button raised colored>
                            Click to Auhtenticate
                        </Button>
                    </a>
                </CardActions>
            </div>
        );
    }
}

export default AuthCustomComponent;
