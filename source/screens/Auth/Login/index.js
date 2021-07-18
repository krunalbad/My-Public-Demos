import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { goToPath, resetPath } from '@navigation/store/actions';
import { getUserLoginRequest } from '@auth/store/actions';

// const mapStateToProps = state => ({
//   darkMode: state.common.darkMode,
//   isSansSerif: state.common.isSansSerif,
//   isBoldText: state.common.isBoldText,
//   selectedFontSize: state.common.selectedFontSize,
// });

function mapDispatchToProps(dispatch) {
  return {
    goToPath: function (path, param) {
      goToPath(path, param);
    },
    resetPath: function (path, param) {
      resetPath(path, param);
    },
    getUserLoginRequest: function (param) {
      dispatch(getUserLoginRequest(param));
    },
  };
}

export default connect(null, mapDispatchToProps)(LoginComponent);
