import React, { Component } from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export class CustomHeaderButton extends Component {
  render() {
    return (
      <HeaderButton
        {...this.props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
      />
    );
  }
}

export default CustomHeaderButton;
