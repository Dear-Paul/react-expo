import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

 const Home = () => {
     
  return (
    <View style={styles.container}>
        <Text>Home Page!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
