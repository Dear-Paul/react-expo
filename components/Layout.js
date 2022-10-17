import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';
import Register from './Register';

const Layout = ({navigation}) => {
  const [showNextPage, setShowNextPage] = useState(false);  
  const handleShowNextPage = () => {
    setShowNextPage(!showNextPage);
  }

  return (
    <View style={styles.container}>

      {!showNextPage ? <Register handleShowNextPage={handleShowNextPage}/>: <Login handleShowNextPage={handleShowNextPage} navigation={navigation}/> }
      
      <StatusBar style="auto" />
    </View>
  );
}

export default Layout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
