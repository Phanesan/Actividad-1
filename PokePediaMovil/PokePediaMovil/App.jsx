import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Content from './components/Content';
import NavBar from './components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <View className='application' maxWidth="100%">
        <NavBar></NavBar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
