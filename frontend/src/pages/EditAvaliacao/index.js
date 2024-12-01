import { useState, useEffect } from "react";
import { apiHandler } from "../../services/axiosApi";
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./style";
import Header from "../../components/Header";
import { Picker } from "@react-native-picker/picker";

export default function EditarAvaliacao({ navigation, route }) {
  const [funcionarios, setFuncionarios] = useState([]);
  const [avaliadores, setAvaliadors] = useState([]);
  const [feedback, setFeedback] = useState(route.params.data.feedback);
  const [pontuacao, setPontuacao] = useState(route.params.data.pontuacao);
  const [idFuncionario, setIdFuncionario] = useState(route.params.data.id_funcionario);
  const [idAvaliador, setIdAvaliador] = useState(route.params.data.id_avaliador);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const funcionariosData = await fetchFuncionarios();
        const avaliadoresData = await fetchAvaliadors();
        setFuncionarios(funcionariosData);
        setAvaliadors(avaliadoresData);
      } catch (error) {
        Alert.alert("Erro", "Falha ao carregar os dados.");
      }
    };
    fetchData();
  }, []);

  const fetchFuncionarios = async () => {
    try {
      const response = await apiHandler("/users");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
      return [];
    }
  };

  const fetchAvaliadors = async () => {
    try {
      const response = await apiHandler("/users");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar avaliadores:", error);
      return [];
    }
  };

  const handleSubmit = async () => {
    if (!idFuncionario || !idAvaliador) {
      Alert.alert("Erro", "Por favor, selecione o funcionário e o avaliador.");
      return;
    }

    try {
      const body = {
        id_funcionario: idFuncionario,
        id_avaliador: idAvaliador,
        feedback: feedback,
        pontuacao: pontuacao,
      };

      await apiHandler.patch(`/assessments/update/${route.params.data.id}`, body);
      Alert.alert("Sucesso", "Avaliação atualizada com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao atualizar avaliação:", error);
      Alert.alert("Erro", "Não foi possível atualizar a avaliação.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Atualizar Avaliação</Text>

        <View style={styles.formContainer}>
          <Text style={styles.text}>Feedback:</Text>
          <TextInput
            value={feedback}
            onChangeText={setFeedback}
            style={styles.input}
            placeholder="Digite o feedback"
            placeholderTextColor="#A0A0A0"
            multiline
          />

          <Text style={styles.text}>Pontuação:</Text>
          <TextInput
            value={pontuacao}
            onChangeText={setPontuacao}
            style={styles.input}
            placeholder="Digite a pontuação"
            placeholderTextColor="#A0A0A0"
            keyboardType="numeric"
          />

          <Text style={styles.text}>Funcionário:</Text>
          <Picker
            selectedValue={idFuncionario}
            style={styles.picker}
            onValueChange={setIdFuncionario}
          >
            <Picker.Item label="Selecione o funcionário" value="" />
            {funcionarios.map((item) => (
              <Picker.Item key={item.id} label={item.email} value={item.id} />
            ))}
          </Picker>

          <Text style={styles.text}>Avaliador:</Text>
          <Picker
            selectedValue={idAvaliador}
            style={styles.picker}
            onValueChange={setIdAvaliador}
          >
            <Picker.Item label="Selecione o avaliador" value="" />
            {avaliadores.map((item) => (
              <Picker.Item key={item.id} label={item.email} value={item.id} />
            ))}
          </Picker>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Atualizar Avaliação</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}