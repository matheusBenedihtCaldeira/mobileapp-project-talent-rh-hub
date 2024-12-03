import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Header from "../../components/Header"; // Componente Header
import { Picker } from "@react-native-picker/picker"; // Importa Picker para seleção de opções
import { apiHandler } from "../../services/axiosApi";
import { styles } from "./style";
export default function CadastroAvaliacao({ navigation }) {
  // Estados que armazenam os valores do formulário
  const [idFuncionario, setIdFuncionario] = useState(""); // ID do funcionário
  const [idAvaliador, setIdAvaliador] = useState(""); // ID do avaliador
  const [feedback, setFeedback] = useState(""); // Feedback dado pelo avaliador
  const [pontuacao, setPontuacao] = useState(""); // Pontuação atribuída
  const [requesters, setRequesters] = useState([]); // Lista de solicitantes (avaliadores)
  const [avaliacoes, setAvaliacoes] = useState([]); // Lista de avaliações cadastradas
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento
  const [requester, setRequester] = useState('')




  useEffect(() => {
    // Função para buscar e atualizar os dados
    const fetchData = async () => {
      const requestersData = await fetchRequesters();
      setRequesters(requestersData);
      console.log(requestersData);
    };

    fetchData(); // Chame a função de busca quando o componente montar
  }, []);

  const handleSubmit = async () => {
    try {
      const body = {
        id_funcionario: idFuncionario,
        id_avaliador: idAvaliador,
        feedback: feedback,
        pontuacao: pontuacao,
      };

      const response = await apiHandler.post('/assessment/register', body)
      console.log(response);
      navigation.navigate('Assessment')


    } catch (err) {
      Alert.alert("Erro", "Não foi possível cadastrar a avaliação.");
      console.error("Erro ao cadastrar avaliação:", err);
      setLoading(false)
    }
  }


  //Função para listar avaliaçoes
  const fetchAvaliacoes = async () => {
    setLoading(true); // Inicia o estado de carregamento
    try {
      const response = await apiHandler("/assessment");
console.log(response)
      if (!response || !response.data || response.data.length === 0) { 
        console.warn("Nenhuma avaliação encontrada.");
        Alert.alert("Atenção", "Nenhuma avaliação disponível no momento.");
        setAvaliacoes([]);
        return;
      }

      setAvaliacoes(response.data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar as avaliações. Tente novamente mais tarde.");
      console.error("Erro ao buscar avaliações:", error);
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  // Função para buscar os dados do funcionário
  const fetchFuncionarioData = async () => {
    try {
      const response = await apiHandler(`/users/${idFuncionario}`);
      setRequester(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do funcionário:", error);
    }
  };

  // Atualiza o estado do funcionário assim que o ID é alterado
  useEffect(() => {
    fetchAvaliacoes()
  }, []);

  // Função para buscar as avaliações

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


  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Cadastro de Avaliação</Text>
        <View style={styles.formContainer}>
          <Text style={styles.text}>Feedback:</Text>
          <TextInput
            style={styles.input}
            value={feedback}
            onChangeText={setFeedback}
            placeholder="Descreva o feedback"
            multiline
          />
          <Text style={styles.text}>Pontuação:</Text>
          <TextInput
            style={styles.input}
            value={pontuacao}
            onChangeText={setPontuacao}
            placeholder="Digite a pontuação"
            keyboardType="numeric"
          />
          <Text style={styles.text}>Funcionario:</Text>
          <Picker
            selectedValue={idFuncionario}
            style={styles.picker}
            onValueChange={setIdFuncionario}
          >
            <Picker.Item label="Selecione o funcionario" value="" color="#2C3E50" />
            {requesters.map((item) => (
              <Picker.Item key={item.id} label={item.email} value={item.id} color="#2C3E50" />
            ))}
          </Picker>
          <Text style={styles.text}>Solicitante:</Text>
          <Picker
            selectedValue={idAvaliador}
            style={styles.picker}
            onValueChange={setIdAvaliador}
          >
            <Picker.Item label="Selecione o solicitante" value="" color="#2C3E50" />
            {requesters.map((item) => (
              <Picker.Item key={item.id} label={item.email} value={item.id} color="#2C3E50" />
            ))}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Cadastrar Avaliação</Text>
          </TouchableOpacity>
        </View>
        
      
      </ScrollView>
    </View>
  );
}