import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";
import DropDownPicker from "react-native-dropdown-picker";

export default function Jobs({ navigation }) {
  // Estados para gerenciar os dados do formulário e os carregados da API
  const [requesters, setRequesters] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [tituloDaVaga, setTituloDaVaga] = useState("");
  const [descricaoDaVaga, setDescricaoDaVaga] = useState("");
  
  // Estados específicos para o DropDownPicker
  const [requester, setRequester] = useState(null);
  const [requesterOpen, setRequesterOpen] = useState(false);
  const [requesterItems, setRequesterItems] = useState([]);

  const [departamento, setDepartamento] = useState(null);
  const [departamentoOpen, setDepartamentoOpen] = useState(false);
  const [departamentoItems, setDepartamentoItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestersData = await fetchRequesters();
        const departamentosData = await fetchDepartamentos();

        // Preenche os estados do DropDownPicker
        setRequesterItems(requestersData.map(item => ({ label: item.email, value: item.id })));
        setDepartamentoItems(departamentosData.map(item => ({ label: item.name, value: item.id })));
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Detalhes da vaga</Text>

        <View style={styles.formContainer}>
          {/* Campo Título */}
          <Text style={styles.text}>Título da vaga</Text>
          <TextInput
            value={tituloDaVaga}
            onChangeText={setTituloDaVaga}
            style={styles.input}
            placeholder="Digite o título"
            placeholderTextColor="#A0A0A0"
          />

          {/* Campo Descrição */}
          <Text style={styles.text}>Descrição</Text>
          <TextInput
            value={descricaoDaVaga}
            onChangeText={setDescricaoDaVaga}
            style={styles.input}
            placeholder="Digite a descrição"
            placeholderTextColor="#A0A0A0"
            multiline
          />

          {/* Campo Solicitante */}
          <Text style={styles.text}>Solicitante</Text>
          <DropDownPicker
            open={requesterOpen}
            value={requester}
            items={requesterItems}
            setOpen={setRequesterOpen}
            setValue={setRequester}
            setItems={setRequesterItems}
            placeholder="Selecione o solicitante"
            style={styles.picker}
            dropDownContainerStyle={styles.dropDownContainer}
          />

          {/* Campo Departamento */}
          <Text style={styles.text}>Departamento</Text>
          <DropDownPicker
            open={departamentoOpen}
            value={departamento}
            items={departamentoItems}
            setOpen={setDepartamentoOpen}
            setValue={setDepartamento}
            setItems={setDepartamentoItems}
            placeholder="Selecione o departamento"
            style={styles.picker}
            dropDownContainerStyle={styles.dropDownContainer}
          />

          {/* Botão de Envio */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Criar Vaga</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
