import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import Header from "../../components/Header";

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [celular, setCelular] = useState("");
  const [cargo, setCargo] = useState("");
  const [role, setRole] = useState(""); 
  const [departamento, setDepartamento] = useState("");

  const handleSignUp = () => {
    if (
      password === "" ||
      confirmPassword === "" ||
      firstName === "" ||
      lastName === "" ||
      location === "" ||
      celular === "" ||
      cargo === "" ||
      role === ""||
      departamento === ""
    ) {
      Alert.alert("Preencha todos os campos");
    } else if (password !== confirmPassword) {
      Alert.alert("Senhas não conferem");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.text}>Nome:</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
            autoCapitalize="words"
          />

          <Text style={styles.text}>Sobrenome:</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            autoCapitalize="words"
          />

          
          <Text style={styles.text}>Localidade:</Text>
          <TextInput
            value={location}
            onChangeText={setLocation}
            style={styles.input}
          />

          <Text style={styles.text}>Celular:</Text>
          <TextInput
            value={celular}
            onChangeText={setCelular}
            style={styles.input}
            keyboardType="numeric"
          />


          <Text style={styles.text}>Cargo:</Text>
          <TextInput
            value={cargo}
            onChangeText={setCargo}
            style={styles.input}
          />

      
          <Text style={styles.text}>Função:</Text>
          <Picker
            selectedValue={role}
            style={styles.input}
            onValueChange={(itemValue) => setRole(itemValue)}
          >
            <Picker.Item label="Selecione a Função" value="" />
            <Picker.Item label="Admin" value="admin" />
            <Picker.Item label="User" value="user" />
        
          </Picker>


          <Text style={styles.text}>Departamento:</Text>
          <Picker
            selectedValue={departamento}
            style={styles.input}
            onValueChange={(itemValue) => setDepartamento(itemValue)}
          >
            <Picker.Item label="Selecione o Departamento" value="" />
            
            <Picker.Item label="RH" value="rh" />
            <Picker.Item label="TI" value="ti" />
          
          </Picker>

          <Text style={styles.text}>Senha:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={true}
          />

          <Text style={styles.text}>Confirmar Senha:</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            secureTextEntry={true}
          />


          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
