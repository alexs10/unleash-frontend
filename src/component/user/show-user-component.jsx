import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-mdl';

export default class ShowUserComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const userName = this.props.user.email || '';
        return (
            <span>
                <Icon name="account_circle" />
                <span> {userName}</span>
            </span>
        );
    }
}
