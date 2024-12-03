import { useState, useEffect } from "react";
import { apiHandler } from "../../services/axiosApi";
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Picker } from "@react-native-picker/picker";

export default function JobsEditar({ navigation, route }) {
  const [requesters, setRequesters] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [tituloDaVaga, setTituloDaVaga] = useState(route.params.data.titulo);
  const [descricaoDaVaga, setDescricaoDaVaga] = useState(route.params.data.descricao);
  const [departamento, setDepartamento] = useState(route.params.data.departamento_id);
  const [requester, setRequester] = useState(route.params.data.solicitante_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestersData = await fetchRequesters();
        const departamentosData = await fetchDepartamentos();
        setRequesters(requestersData);
        setDepartamentos(departamentosData);
      } catch (error) {
        Alert.alert("Erro", "Falha ao carregar os dados.");
      }
    };
    fetchData();
  }, []);

  const fetchRequesters = async () => {
    try {
      const response = await apiHandler('/users');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar solicitantes:", error);
      return [];
    }
  };

  const fetchDepartamentos = async () => {
    try {
      const response = await apiHandler('/department');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar departamentos:", error);
      return [];
    }
  };

  const handleSubmit = async () => {
    try {
      const body = {
        titulo: tituloDaVaga,
        descricao: descricaoDaVaga,
        departamento_id: departamento,
        solicitante_id: requester,
      };
      await apiHandler.patch(`/vacancies/update/${route.params.data.id}`, body);
      Alert.alert("Sucesso", "Vaga atualizada com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao atualizar a vaga:", error);
      Alert.alert("Erro", "Não foi possível atualizar a vaga.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Atualizar vaga</Text>

        <View style={styles.formContainer}>
          <Text style={styles.text}>Título da vaga:</Text>
          <TextInput
            value={tituloDaVaga}
            onChangeText={setTituloDaVaga}
            style={styles.input}
            placeholder="Digite o título da vaga"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Descrição:</Text>
          <TextInput
            value={descricaoDaVaga}
            onChangeText={setDescricaoDaVaga}
            style={styles.input}
            placeholder="Digite a descrição da vaga"
            placeholderTextColor="#A0A0A0"
            multiline
          />

          <Text style={styles.text}>Solicitante:</Text>
          <Picker
            selectedValue={requester}
            style={styles.picker}
            onValueChange={setRequester}
          >
            <Picker.Item label="Selecione o solicitante" value="" color="#2C3E50" />
            {requesters.map((item) => (
              <Picker.Item key={item.id} label={item.email} value={item.id}  color="#2C3E50" />
            ))}
          </Picker>

          <Text style={styles.text}>Departamento:</Text>
          <Picker
            selectedValue={departamento}
            style={styles.picker}
            onValueChange={setDepartamento}
          >
            <Picker.Item label="Selecione o departamento" value="" color="#2C3E50" />
            {departamentos.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.id} color="#2C3E50" />
            ))}
          </Picker>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Atualizar Vaga</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}