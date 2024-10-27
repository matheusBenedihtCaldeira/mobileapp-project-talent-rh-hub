import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState(false);

  const handleSingUp = () => {
    if(password === "" || confirmPassword ==="" || name==="" || email==="" || cpf===""){
      alert("Preencha todos os campos");
      
    
    }else if(cpf.length != 11){
      alert("CPF inválido");

    }else if(password != confirmPassword){
        alert("Senhas não conferem");
      
    } else if (!email.includes("@")) {
      alert("Email invalido")
  }else{
    //colocar aqui para mudarde tela
  
  }

}


  return (

    <View style={styles.container}>
    <Header />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.formContainer}>
       
      <Text style={styles.text}>Nome Completo:</Text>
      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        style={styles.input}
        autoCapitalize="words"
      />

      <Text style={styles.text}>E-mail:</Text>
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
         keyboardType="email-address"
        

      />

      <Text style={styles.text}>CPF:</Text>
      <TextInput
        value={cpf}
        onChangeText={(cpf) => setCpf(cpf)}
        style={styles.input}
         keyboardType="numeric"
         

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


      <TouchableOpacity 
      style={styles.button}
      onPress={handleSingUp}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>

  );
}
