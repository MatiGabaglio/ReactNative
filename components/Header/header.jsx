import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './styles.js';

const Header = ({titule}) => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.headerText}>{titule}</Text>
    </View>
  );
};

export default Header;
