import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Picker } from "@react-native-picker/picker";



export default function Jobs({navigation}) {
  const [tituloDaVaga, setTituloDaVaga] = useState("");
  const [descricaoDaVaga,setDescricaoDaVaga ] = useState("");
  const [departamento, setDepartamento] = useState("");
 const [requester,setRequester] = useState("");
  
  

  return (
    

    <View style={styles.container}>
    <Header />

    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Informe as características da vaga:</Text>

      <View style={styles.formContainer}>
      <Text style={styles.text}>Título da vaga:</Text>
      <TextInput
        value={tituloDaVaga}
        onChangeText={(tituloDaVaga) => setTituloDaVaga(tituloDaVaga)}
        style={styles.input}
        
      />

    

    <Text style={styles.text}>Descrição da vaga:</Text>
      <TextInput
        value={descricaoDaVaga}
        onChangeText={(descricaoDaVaga) => setDescricaoDaVaga(descricaoDaVaga)}
        style={styles.input}
      />

         <Text style={styles.text}>Solicitante:</Text>
          <Picker
            selectedValue={requester}
            style={styles.input}
            onValueChange={(itemValue) => setRequester(itemValue)}
          >
            <Picker.Item label="Selecione o ID do solicitante" value="" />
            <Picker.Item label="1" value="solicitante1" />
            <Picker.Item label="2" value="solicitante2" />
        
          </Picker>


          <Text style={styles.text}>Departamento:</Text>
          <Picker
            selectedValue={departamento}
            style={styles.input}
            onValueChange={(itemValue) => setDepartmento(itemValue)}
          >
            <Picker.Item label="Selecione o ID do solicitante" value="" />
            <Picker.Item label="1" value="departamento1" />
            <Picker.Item label="2" value="departamento2" />
        
          </Picker>


    


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar vaga</Text>
      </TouchableOpacity>

      

   

      
      </View>
      </ScrollView>
    </View>

  );
}
