import { useState, useEffect } from "react";
import { apiHandler } from "../../services/axiosApi";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
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
    const fetchData = async () => {
      try {
        const requestersData = await fetchRequesters();
        const departamentosData = await fetchDepartamentos();
        setRequesters(requestersData);
        setDepartamentos(departamentosData);
      } catch (error) {
        Alert.alert("Erro", "Falha ao carregar dados.");
      }
    };

    fetchData();
  }, []);

  const fetchRequesters = async () => {
    try {
      const response = await apiHandler("/users");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar solicitantes:", error);
      return [];
    }
  };

  const fetchDepartamentos = async () => {
    try {
      const response = await apiHandler("/department");
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
      await apiHandler.post("/vacancies/register", body);
      Alert.alert("Sucesso", "Vaga cadastrada com sucesso!");
      console.log("Dados enviados:", body);
    } catch (error) {
      console.error("Erro ao cadastrar a vaga:", error);
      Alert.alert("Erro", "Não foi possível cadastrar a vaga.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Detalhes da vaga</Text>

        <View style={styles.formContainer}>
          <Text style={styles.text}>Título da vaga</Text>
          <TextInput
            value={tituloDaVaga}
            onChangeText={setTituloDaVaga}
            style={styles.input}
            placeholder="Digite o título"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Descrição</Text>
          <TextInput
            value={descricaoDaVaga}
            onChangeText={setDescricaoDaVaga}
            style={styles.input}
            placeholder="Digite a descrição"
            placeholderTextColor="#A0A0A0"
            multiline
          />

          <Text style={styles.text}>Solicitante</Text>
          <View style={styles.pickerWrapper}>
            <Picker selectedValue={requester} onValueChange={setRequester}>
              <Picker.Item label="Selecione o solicitante" value="" />
              {requesters.map((item) => (
                <Picker.Item key={item.id} label={item.email} value={item.id} />
              ))}
            </Picker>
          </View>

          <Text style={styles.text}>Departamento</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={departamento}
              onValueChange={setDepartamento}
            >
              <Picker.Item label="Selecione o departamento" value="" />
              {departamentos.map((item) => (
                <Picker.Item key={item.id} label={item.name} value={item.id} />
              ))}
            </Picker>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Criar Vaga</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
