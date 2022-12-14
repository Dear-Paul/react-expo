import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Layout from './components/Layout';

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <View style={styles.container}>
       <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Home' component={Layout}/>
        <Stack.Screen name='Profile' component={Home}/>
        </Stack.Navigator>
       {/* <Layout/> */}
       </NavigationContainer>
   
    //   <StatusBar style="auto" />
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
