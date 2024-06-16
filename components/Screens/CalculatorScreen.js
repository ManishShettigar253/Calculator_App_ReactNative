import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Row from '../Row';
import Button from '../Button';


const CalculatorScreen = ({ navigation }) => {
  const [display, setDisplay] = useState('');

  const handleButtonPress = (value) => {
    setDisplay(display + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
      <Text style={styles.texts}>{display}</Text></View>
   
        <View style={styles.container}>
      <Row>
        <Button title="1" onPress={() => handleButtonPress('1')} />
        <Button title="2" onPress={() => handleButtonPress('2')} />
        <Button title="3" onPress={() => handleButtonPress('3')} />
      </Row>
      <Row>
        <Button title="4" onPress={() => handleButtonPress('4')} />
        <Button title="5" onPress={() => handleButtonPress('5')} />
        <Button title="6" onPress={() => handleButtonPress('6')} />
      </Row>
      <Row>
        <Button title="7" onPress={() => handleButtonPress('7')} />
        <Button title="8" onPress={() => handleButtonPress('8')} />
        <Button title="9" onPress={() => handleButtonPress('9')} />
      </Row>
      <Row>
        <Button title="+" onPress={() => handleButtonPress('+')} />
        <Button title="0" onPress={() => handleButtonPress('0')} />
        <Button title="-" onPress={() => handleButtonPress('-')} />
      </Row>
      <Row>
        <Button title="*" onPress={() => handleButtonPress('*')} />
        <Button title="/" onPress={() => handleButtonPress('/')} />
        <Button title="C" onPress={handleClear} />
      </Row>

      <Row>
        <Button title="=" onPress={handleCalculate} />
      </Row>
     
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:'#F0FFF0',
  },
  display: {
    borderRadius:10,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    border : 10,
    padding : 5,
    marginTop:5,
   height:150,
   width:400,
   //marginBottom:600,
    borderWidth:5,
    borderRadius : 10,
  },
  texts:{
    fontSize:50,
    padding : 10,
  },
});

export default CalculatorScreen;
