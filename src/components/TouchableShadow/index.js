import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const shadowStyle = StyleSheet.create({
  widthShadow: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0,0,0,0.05)',
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 3,
  },
});

const TouchableShadow = (props) => {
  const { style } = props;

  return (
    <TouchableOpacity {...props} style={[shadowStyle.widthShadow, style]} />
  );
};

export default TouchableShadow;
