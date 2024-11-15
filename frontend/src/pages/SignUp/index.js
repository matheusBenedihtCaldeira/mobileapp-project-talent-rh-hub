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
      !firstName ||
      !lastName ||
      !location ||
      !celular ||
      !cargo ||
      !role ||
      !departamento ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não conferem.");
    } else {
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
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
            placeholder="Digite seu nome"
            placeholderTextColor="#A0A0A0"
            autoCapitalize="words"
          />

          <Text style={styles.text}>Sobrenome:</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            placeholder="Digite seu sobrenome"
            placeholderTextColor="#A0A0A0"
            autoCapitalize="words"
          />

          <Text style={styles.text}>Localidade:</Text>
          <TextInput
            value={location}
            onChangeText={setLocation}
            style={styles.input}
            placeholder="Digite sua cidade"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Celular:</Text>
          <TextInput
            value={celular}
            onChangeText={setCelular}
            style={styles.input}
            placeholder="Digite seu celular"
            placeholderTextColor="#A0A0A0"
            keyboardType="numeric"
          />

          <Text style={styles.text}>Cargo:</Text>
          <TextInput
            value={cargo}
            onChangeText={setCargo}
            style={styles.input}
            placeholder="Digite seu cargo"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Função:</Text>
          <Picker
            selectedValue={role}
            style={styles.picker}
            onValueChange={setRole}
          >
            <Picker.Item label="Selecione a Função" value="" />
            <Picker.Item label="Admin" value="admin" />
            <Picker.Item label="User" value="user" />
          </Picker>

          <Text style={styles.text}>Departamento:</Text>
          <Picker
            selectedValue={departamento}
            style={styles.picker}
            onValueChange={setDepartamento}
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
            placeholder="Digite sua senha"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
          />

          <Text style={styles.text}>Confirmar Senha:</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            placeholder="Confirme sua senha"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
