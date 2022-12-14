import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,   TextInput,
  Button,
  TouchableOpacity } from "react-native";

const Login = ({ navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginValidate = () => {
    const credentials = {
      email,
      password
    }
    if(!email || !password){
      for(const key in credentials){
        if(credentials[key] === '' || credentials[key] === undefined){
          alert(`Please input ${key} to continue`);
          return
        }
      }
    }
    navigation.navigate('Profile')
    // handleShowNextPage();
  }
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
    </View>

    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn} onPress={handleLoginValidate}>
      <Text>LOGIN</Text>
    </TouchableOpacity>
  </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    boxShadow: '1px 2px 9px #F4AAB9'
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    margin: 'auto',
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
 
  },
 
  loginBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
 
});
