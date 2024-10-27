import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../Header";


export default function Jobs() {
  const [tituloDaVaga, setTituloDaVaga] = useState("");
  const [descricaoDaVaga,setDescricaoDaVaga ] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [contrato, setContrato] = useState("");
  const [modeloDeTrabalho,setModeloDeTrabalho] = useState("");
  const[habilidades,setHabilidades] =useState("");
  const [qualificacoes, setQualificacoes]= useState("");
  

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


    <Text style={styles.text}>Departamento ou setor:</Text>
      <TextInput
        value={departamento}
        onChangeText={(departamento) => setDepartamento(departamento)}
        style={styles.input}
      />

    <Text style={styles.text}>Nível de experiência:</Text>
      <TextInput
        value={experiencia}
        onChangeText={(experiencia) => setExperiencia(experiencia)}
        style={styles.input}
      />

    <Text style={styles.text}>Tipo de contrato:</Text>
      <TextInput
        value={contrato}
        onChangeText={(contrato) => setContrato(contrato)}
        style={styles.input}
      />

      <Text style={styles.text}>Modelo de trabalho:</Text>
      <TextInput
        value={modeloDeTrabalho}
        onChangeText={(modeloDeTrabalho) => setModeloDeTrabalho(modeloDeTrabalho)}
        style={styles.input}
      />


    <Text style={styles.text}>Habilidades:</Text>
      <TextInput
        value={habilidades}
        onChangeText={(habilidades) => setHabilidades(habilidades)}
        style={styles.input}
      />

      <Text style={styles.text}>Qualificações:</Text>
      <TextInput
        value={qualificacoes}
        onChangeText={(qualificacoes) => setQualificacoes(qualificacoes)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar vaga</Text>
      </TouchableOpacity>

      

   

      
      </View>
      </ScrollView>
    </View>

  );
}
