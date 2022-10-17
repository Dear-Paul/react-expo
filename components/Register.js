import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,   TextInput,
  Button,
  TouchableOpacity } from "react-native";

const Register = ({handleShowNextPage}) => {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleRegisterValidate = () => {
    const credentials = {
      email,
      password,
      firstName,
      lastName,
      password,
      confirmPass
    }
    if(!email || !password || !firstName || !lastName || !confirmPass){
      for(const key in credentials){
        if(credentials[key] === '' || credentials[key] === undefined){
          alert(`Please input ${key} to continue`);
          return
        }
      }
    }
    handleShowNextPage();
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
        placeholder="First name."
        placeholderTextColor="#003f5c"
        onChangeText={(firstName) => setFirstName(firstName)}
        value={firstName}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Last name."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(lastName) => setLastName(lastName)}
        value={lastName}
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

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
        value={confirmPass}
      />
    </View>

    <TouchableOpacity>
      <Text style={styles.registered_btn}>Signed up already? Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.signUpBtn} onPress={handleRegisterValidate}>
      <Text>SIGN UP</Text>
    </TouchableOpacity>
  </View>
  );
}

export default Register;
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
 
  registered_btn: {
    height: 30,
    marginBottom: 30,
 
  },
 
  signUpBtn: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
 
});
