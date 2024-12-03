import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";
import Header from "../../components/Header";
import axios from "axios";

export default function Home({ navigation }) {
  const [dataScienceInfo, setDataScienceInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDataScience, setSelectedDataScience] = useState(null); // Estado para controlar a seleção

  // Função para buscar os dados na API FastAPI
  const fetchDataScienceInfo = async () => {
    try {
      const response = await axios.get("http://192.168.15.7:8998/api/skillgap"); // Ajuste o endpoint conforme necessário
      setDataScienceInfo(response.data); // Armazena os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar dados de Data Science:", error);
    } finally {
      setLoading(false);
    }
  };

  // Chama a função quando o componente é montado
  useEffect(() => {
    fetchDataScienceInfo();
  }, []);

  // Função para exibir ou esconder os detalhes de um item
  const toggleDetails = (item) => {
    setSelectedDataScience(prevState => prevState === item ? null : item);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.CaixaGrande}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
        <Text style={styles.descriptionText}>
          Navegue pelos seus projetos, equipe, vagas e avaliações de forma fácil e intuitiva.
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.menu}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("MeuTime")}
        >
          <View style={styles.areaButton}>
            <FontAwesome name="users" size={24} color="#2C3E50" />
          </View>
          <Text style={styles.menuText}>Meu Time</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Projects")}
        >
          <View style={styles.areaButton}>
            <FontAwesome name="folder" size={24} color="#2C3E50" />
          </View>
          <Text style={styles.menuText}>Departamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Assessment")}
        >
          <View style={styles.areaButton}>
            <FontAwesome name="star" size={24} color="#2C3E50" />
          </View>
          <Text style={styles.menuText}>Avaliações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Vacancies")}
        >
          <View style={styles.areaButton}>
            <FontAwesome name="clipboard" size={24} color="#2C3E50" />
          </View>
          <Text style={styles.menuText}>Vagas</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* ScrollView para os dados de Data Science */}
      <ScrollView style={styles.dataScienceContainer}>
        <Text style={styles.dataScienceTitle}>Déficit de Habilidades por Setor</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#2C3E50" />
        ) : dataScienceInfo && dataScienceInfo.data.length > 0 ? (
          dataScienceInfo.data.map((item, index) => (
            <View key={index} style={styles.dataScienceCard}>
              <TouchableOpacity onPress={() => toggleDetails(item)}>
                <Text style={styles.departmentTitle}>{item.department}</Text>
              </TouchableOpacity>
              {/* Exibe os detalhes se o item for o selecionado */}
              {selectedDataScience === item && (
                <View style={styles.detailsContainer}>
                  <Text style={styles.departmentText}>Habilidades Necessárias:</Text>
                  <View style={styles.skillsList}>
                    {item.skill_gap.map((skill, idx) => (
                      <Text key={idx} style={styles.skillItem}>{skill}</Text>
                    ))}
                  </View>
                </View>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.errorText}>Nenhuma informação disponível.</Text>
        )}
      </ScrollView>

      <View style={styles.separator} />
    </View>
  );
}
