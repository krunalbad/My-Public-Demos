import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Header, Body, Left, Right, Icon } from 'native-base';
import { connect } from 'react-redux';
import { toUpper } from 'lodash';
// import { showAlert } from '@common/actions';
import { userLogout } from '@auth/store/actions';
import { goToBack, resetPath } from '@navigation/store/actions';
import { routing } from '@navigation/store/constants';
import { Colors } from '@themes';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';

class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewRef: null,
    };
  }

  onTapLeftButton = () => {
    const { goBack } = this.props;
    goBack();
  };

  renderLeftButtons() {
    const leftIconName = 'arrow-back';
    if (Actions.currentScene === `_${routing.HOME}`) {
      return <Left style={styles.left} />;
    }
    return (
      <Left style={styles.left}>
        <TouchableOpacity
          style={styles.leftContainer}
          onPress={() => this.onTapLeftButton()}>
          <Icon name={leftIconName} style={styles.iconStyle} />
        </TouchableOpacity>
      </Left>
    );
  }

  onLogoutTapped = () => {
    const { userLogout, resetPath } = this.props;
    userLogout();
    resetPath(routing.LOGIN);
  }

  renderRightButtons() {
    return (
      <Right style={styles.right}>
        <Icon
          style={styles.iconStyle}
          name={'log-out'}
          onPress={() => this.onLogoutTapped()}
        />
      </Right>
    );
  }

  renderBody = () => {
    const { title } = this.props;
    return (
      <Body style={styles.body}>
        <Text style={styles.titleTextStyle}>{toUpper(title)}</Text>
      </Body>
    );
  };
  render() {
    // const { routeName, darkMode } = this.props;

    return (
      <Header style={styles.container} iosBarStyle={'light-content'}>
        {this.renderLeftButtons()}
        {this.renderBody()}
        {this.renderRightButtons()}
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

function mapDispatchToProps(dispatch) {
  return {
    goBack: () => {
      goToBack();
    },
    resetPath: function (path, param) {
      resetPath(path, param);
    },
    userLogout: function () {
      dispatch(userLogout());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar);
