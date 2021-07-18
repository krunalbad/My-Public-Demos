import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Text } from 'native-base';
import { styles } from './styles';

export default class ActionButton extends Component {
  render() {
    const {
      icon,
      iconType,
      text,
      buttonStyle = {},
      textStyle = {},
      iconStyle = {},
      onPress = () => { },
      opacity = 0.2,
      disabled = false,
    } = this.props;

    if (icon && text) {
      return (
        <TouchableOpacity
          style={buttonStyle}
          activeOpacity={opacity}
          disabled={disabled}
          onPress={onPress}>
          <Text style={textStyle}>{text}</Text>
          <Icon name={icon} type={iconType} style={iconStyle} />
        </TouchableOpacity>
      );
    } else if (!icon && text) {
      return (
        <TouchableOpacity
          style={buttonStyle}
          activeOpacity={opacity}
          disabled={disabled}
          onPress={onPress}>
          <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
      );
    } else if (icon && !text) {
      return (
        <TouchableOpacity
          style={buttonStyle}
          activeOpacity={opacity}
          disabled={disabled}
          onPress={onPress}>
          <Icon name={icon} type={iconType} style={iconStyle} />
        </TouchableOpacity>
      );
    } else {
      return;
    }
  }
}
