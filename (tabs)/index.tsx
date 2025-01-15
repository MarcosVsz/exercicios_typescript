import 'react-native-gesture-handler';
import NavigationStack from '@/components/NavigationStack';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NavigationStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});