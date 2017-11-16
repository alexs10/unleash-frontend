import { connect } from 'react-redux';
import UserComponent from './user-component';
import { unsecureLogin } from '../../store/user/actions';

const mapDispatchToProps = {
    unsecureLogin,
};

const mapStateToProps = state => ({
    user: state.user.toJS(),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
