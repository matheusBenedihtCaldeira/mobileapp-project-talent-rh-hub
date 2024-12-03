import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";
import DropDownPicker from "react-native-dropdown-picker";

export default function JobsEditar({ navigation, route }) {
  const [requesters, setRequesters] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  // Estados do formulário
  const [tituloDaVaga, setTituloDaVaga] = useState(route.params.data.titulo);
  const [descricaoDaVaga, setDescricaoDaVaga] = useState(route.params.data.descricao);

  // Estados específicos do DropDownPicker
  const [requester, setRequester] = useState(route.params.data.solicitante_id);
  const [requesterOpen, setRequesterOpen] = useState(false);
  const [requesterItems, setRequesterItems] = useState([]);

  const [departamento, setDepartamento] = useState(route.params.data.departamento_id);
  const [departamentoOpen, setDepartamentoOpen] = useState(false);
  const [departamentoItems, setDepartamentoItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestersData = await fetchRequesters();
        const departamentosData = await fetchDepartamentos();

        // Formata os dados para o DropDownPicker
        setRequesterItems(requestersData.map(item => ({ label: item.email, value: item.id })));
        setDepartamentoItems(departamentosData.map(item => ({ label: item.name, value: item.id })));
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
          {/* Campo Título */}
          <Text style={styles.text}>Título da vaga:</Text>
          <TextInput
            value={tituloDaVaga}
            onChangeText={setTituloDaVaga}
            style={styles.input}
            placeholder="Digite o título da vaga"
            placeholderTextColor="#A0A0A0"
          />

          {/* Campo Descrição */}
          <Text style={styles.text}>Descrição:</Text>
          <TextInput
            value={descricaoDaVaga}
            onChangeText={setDescricaoDaVaga}
            style={styles.input}
            placeholder="Digite a descrição da vaga"
            placeholderTextColor="#A0A0A0"
            multiline
          />

          {/* Campo Solicitante */}
          <Text style={styles.text}>Solicitante:</Text>
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
          <Text style={styles.text}>Departamento:</Text>
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

          {/* Botão de Atualização */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Atualizar Vaga</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
