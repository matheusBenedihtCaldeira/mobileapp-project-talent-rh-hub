import { useState, useEffect } from "react";
import { apiHandler } from "../../services/axiosApi";
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Picker } from "@react-native-picker/picker";



export default function Jobs({ navigation }) {
  const [requesters, setRequesters] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [tituloDaVaga, setTituloDaVaga] = useState("");
  const [descricaoDaVaga, setDescricaoDaVaga] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [requester, setRequester] = useState("");

  useEffect(() => {
    // Função para buscar e atualizar os dados
    const fetchData = async () => {
      const requestersData = await fetchRequesters();
      const departamentosData = await fetchDepartamentos();
      setRequesters(requestersData);
      setDepartamentos(departamentosData);
    };

    fetchData(); // Chame a função de busca quando o componente montar
  }, []);


  // Função para buscar os solicitantes
const fetchRequesters = async () => {
  try {
    const response = await apiHandler('/users');
    console.log('usuarios', response.data)
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar solicitantes:", error);
    return [];
  }
};

// Funçao para buscar os departamentos
const fetchDepartamentos = async () => {
  try {
    const response =  await apiHandler('/department');
    console.log('departamentos', response.data)
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar departamentos:", error);
    return [];
  }
};

// funçao para cadastrar a vaga
const handleSubmit = async () => {
  try {
    const body = {
      titulo: tituloDaVaga,
      descricao: descricaoDaVaga,
      departamento_id: departamento,
      solicitante_id: requester,
    }
    const response = await apiHandler.post("/vacancies/register", body);



    console.log(body);
    
  } catch (error) {
    console.error("Erro ao cadastrar a vaga:", error);
  }
};

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
            {requesters.map((item) => (
              <Picker.Item key={item.id} label={item.email} value={item.id} />
            ))}
          </Picker>

          <Text style={styles.text}>Departamento:</Text>
          <Picker
            selectedValue={departamento}
            style={styles.input}
            onValueChange={(itemValue) => setDepartamento(itemValue)}
          >
            <Picker.Item label="Selecione o departamento" value="" />
            {departamentos.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>

          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}
          
          >
            <Text style={styles.buttonText}>Criar vaga</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
