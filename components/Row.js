import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
});

export default Row;
