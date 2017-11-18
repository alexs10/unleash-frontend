import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-mdl';

export default class ShowUserComponent extends React.Component {
    static propTypes = {
        profile: PropTypes.object,
    };

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const email = this.props.profile ? this.props.profile.email : '';
        return (
            <span>
                <Icon name="account_circle" />
                <span> {email}</span>
            </span>
        );
    }
}
