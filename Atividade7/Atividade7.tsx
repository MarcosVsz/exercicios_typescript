import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './StyleAtividade7';

type CalculatorButtonProps = {
  label: string;
  onPress: (value: string) => void;
};

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const Calculadora: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [isNewEntry, setIsNewEntry] = useState<boolean>(false);

  const handlePress = (value: string) => {
    if (value.match(/[0-9]/)) {
      if (isNewEntry) {
        setDisplayValue(value);
        setIsNewEntry(false);
      } else {
        setDisplayValue(prevDisplayValue => prevDisplayValue + value);
      }
    } else if (value === 'C') {
      clearAll();
    } else if (['+', '-', '*', '/'].includes(value)) {
      setOperation(value);
    } else if (value === '=') {
      calculate();
    }
  };

  const setOperation = (value: string) => {
    if (isNewEntry) {
      setOperator(value);
      setPreviousValue(displayValue);
      setDisplayValue(displayValue + ' ' + value + ' ');
      setIsNewEntry(false);
    } else if (!operator) {
      setOperator(value);
      setPreviousValue(displayValue);
      setDisplayValue(displayValue + ' ' + value + ' ');
    } else {
      calculate();
      setOperator(value);
      setDisplayValue(String(parseFloat(displayValue)) + ' ' + value + ' '); 
      setIsNewEntry(false); 
    }
  };
  
  const calculate = () => {
    if (operator && previousValue) {
      const numPrevious = parseFloat(previousValue);
      const numCurrent = parseFloat(displayValue.split(' ')[2]);  
      let result = numPrevious;
  
      switch (operator) {
        case '+':
          result += numCurrent;
          break;
        case '-':
          result -= numCurrent;
          break;
        case '*':
          result *= numCurrent;
          break;
        case '/':
          result /= numCurrent;
          break;
      }

      setDisplayValue(String(result));
      setPreviousValue(null);
      setOperator(null);
      setIsNewEntry(true);
    }
  };
  

  const clearAll = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
    setIsNewEntry(true);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.container}>
            <Text style={styles.display}>{displayValue}</Text>
            <View style={styles.row}>
                <CalculatorButton label="1" onPress={handlePress} />
                <CalculatorButton label="2" onPress={handlePress} />
                <CalculatorButton label="3" onPress={handlePress} />
                <CalculatorButton label="+" onPress={handlePress} />
            </View>
            <View style={styles.row}>
                <CalculatorButton label="4" onPress={handlePress} />
                <CalculatorButton label="5" onPress={handlePress} />
                <CalculatorButton label="6" onPress={handlePress} />
                <CalculatorButton label="-" onPress={handlePress} />
            </View>
            <View style={styles.row}>
                <CalculatorButton label="7" onPress={handlePress} />
                <CalculatorButton label="8" onPress={handlePress} />
                <CalculatorButton label="9" onPress={handlePress} />
                <CalculatorButton label="*" onPress={handlePress} />
            </View>
            <View style={styles.row}>
                <CalculatorButton label="0" onPress={handlePress} />
                <CalculatorButton label="C" onPress={handlePress} />
                <CalculatorButton label="/" onPress={handlePress} />
                <CalculatorButton label="=" onPress={handlePress} />
            </View>
        </View>
    </View>
  );
};


export default Calculadora;