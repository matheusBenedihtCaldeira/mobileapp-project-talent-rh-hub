import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (

    <View style={styles.container}>
    <Header />
      <View style={styles.formContainer}>
      <Text style={styles.text}>Nome Completo:</Text>
      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        style={styles.input}
      />

      <Text style={styles.text}>E-mail:</Text>
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
         keyboardType="email-address"
         mode={'outlined'}

      />

      <Text style={styles.text}>Senha:</Text>
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={styles.input}

        secureTextEntry={true}
      />


      <Text style={styles.text}>Confirmar Senha:</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        style={styles.input}
        secureTextEntry={true}
      />


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      </View>
    </View>

  );
}
