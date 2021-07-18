import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { goToPath, resetPath } from '@navigation/store/actions';
import { getUsersList, resetUserList, setUserID } from '@home/store/actions';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  usersList: state.home.usersList,
});

function mapDispatchToProps(dispatch) {
  return {
    goToPath: function (path, param) {
      goToPath(path, param);
    },
    resetPath: function (path, param) {
      resetPath(path, param);
    },
    getUsersList: function () {
      dispatch(getUsersList());
    },
    resetUserList: param => {
      dispatch(resetUserList(param));
    },
    setUserID: param => {
      dispatch(setUserID(param));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
