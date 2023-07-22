import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AppNavigator = () => {
  return (
    <View>
      <Text style={styles.welcome}> Hello World </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    alignItem: 'center',
    margin: 20,
  },
});
