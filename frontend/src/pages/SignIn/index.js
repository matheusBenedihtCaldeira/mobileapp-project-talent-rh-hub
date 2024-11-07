import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleSingIn = async() => {
    if (password === "" || email === "") {
      alert("Preencha todos os campos");
    } else if (!email.includes("@")) {
      alert("Email invalido");
    }

    const body = {
      email: email,
      password: password
    }
    
    const resposta = await apiHandler.post('/token', body)
    if(resposta.status === 200){
      navigation.navigate("Home");
      console.log('logou legal dog')
    }


  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.text}>E-mail:</Text>
          <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
            keyboardType="email-address"
          />

          <Text style={styles.text}>Senha:</Text>
          <TextInput
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={styles.input}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={handleSingIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.naoText}>Não tem conta?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
