import { useState, useContext } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [loading, setLoading] = useState(false);

  const {signIn} = useContext(AuthContext)

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("Erro", "E-mail inválido. Verifique e tente novamente.");
      return;
    }

    signIn(email, password)  
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.text}>E-mail:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Senha:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
          />

          {loading ? (
            <ActivityIndicator size="large" color="#2C3E50" style={{ marginTop: 20 }} />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.naoText}>Não tem conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
