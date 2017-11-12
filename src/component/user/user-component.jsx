import React from 'react';
import PropTypes from 'prop-types';
import { Textfield, Button } from 'react-mdl';
import Modal from 'react-modal';

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
        updateUserName: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.save();
    };

    render() {
        let content;
        if (this.props.user.authDetails && this.props.user.authDetails.type === 'custom') {
            content = <a href={this.props.user.authDetails.path}>Log inn</a>;
        } else {
            content = (
                <form onSubmit={this.handleSubmit}>
                    <Textfield
                        label="Username"
                        name="username"
                        required
                        value={this.props.user.userName}
                        onChange={e => this.props.updateUserName(e.target.value)}
                    />
                    <br />
                    <Button raised accent>
                        Save
                    </Button>
                </form>
            );
        }

        return (
            <div>
                <Modal isOpen={this.props.user.showDialog} contentLabel="test" style={customStyles}>
                    <h2>Action required</h2>
                    <div>
                        <p>You must be logged in to use Unleash.</p>
                        {content}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default EditUserComponent;
