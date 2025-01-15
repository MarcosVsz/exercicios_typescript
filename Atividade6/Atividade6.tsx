import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './StyleAtividade6';

const Contador: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>-1</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contador;