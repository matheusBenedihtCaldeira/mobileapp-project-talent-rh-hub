import React, { useState, useEffect } from "react"; // Importa React e hooks
import axios from "axios"; // Importa o axios para requisições HTTP
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

  const handleSubmit = async() => {

  }

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
          <Text style={styles.text}>Solicitante:</Text>
          <Picker
            selectedValue={requester}
            style={styles.picker}
            onValueChange={setRequester}
          >
            <Picker.Item label="Selecione o solicitante" value="" />
            {requesters.map((item) => (
              <Picker.Item key={item.id} label={item.email} value={item.id} />
            ))}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Cadastrar Avaliação</Text>
          </TouchableOpacity>
        </View>
        {/* Exibe a lista de avaliações cadastradas */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Avaliações Cadastradas</Text>
          {avaliacoes.map((avaliacao) => (
            <View key={avaliacao.id} style={styles.formContainer}>
              <Text style={styles.text}>Feedback: {avaliacao.feedback}</Text>
              <Text style={styles.text}>Pontuação: {avaliacao.pontuacao}</Text>
              <Text style={styles.text}>
                Solicitante: {avaliacao.idAvaliador}
              </Text>
              <Text style={styles.text}>
              </Text>
              {/* Botão para editar a avaliação */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleUpdate(avaliacao.id)}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              {/* Botão para excluir a avaliação */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleDelete(avaliacao.id)}
              >
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}