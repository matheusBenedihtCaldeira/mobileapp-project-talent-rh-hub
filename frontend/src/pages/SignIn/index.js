import { React, useState } from "react";
import { Image, Text } from "react-native";
import { Background, Container, AreaInput, RecuperarSenha } from "./styles";
import { Button, HelperText, TextInput } from "react-native-paper";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!email.includes("@")) {
      setError(true);
      return;
    }
  };

  return (
    <Background>
      <Container>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 200, height: 200, marginBottom: 10 }}
          resizeMode="contain"
        />
        <AreaInput>
          <TextInput
            label="E-mail"
            value={email}
            mode={"outlined"}
            onChangeText={(email) => setEmail(email)}
            outlineColor="#1e40af"
            activeOutlineColor="#1e40af"
            style={{}}
          />
          <TextInput
            label="Password"
            secureTextEntry
            mode={"outlined"}
            onChangeText={(password) => setPassword(password)}
            outlineColor="#1e40af"
            activeOutlineColor="#1e40af"
            value={password}
          />
          <RecuperarSenha>Esqueceu sua senha?</RecuperarSenha>
          <Button
            icon="login"
            mode="contained"
            onPress={handleLogin}
            style={{ marginTop: 18 }}
          >
            Login
          </Button>
          <HelperText type="error" visible={error}>
                        Error: E-mail address is invalid!
                </HelperText>
        </AreaInput>
      </Container>
    </Background>
  );
}
