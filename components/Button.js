import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding: 10,
    height:70,
    width:140,
    margin:5,
    borderRadius: 10 ,
    flex: 1,
  },
  buttonText: {
    fontSize: 30,
    color:'black',
  },
});

export default Button;
