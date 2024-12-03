import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";
import { styles } from "./styles";
import { apiHandler } from "../../services/axiosApi";

const Membro = ({ name, lastname, email }) => (
  <View style={styles.memberContainer}>
    <FontAwesome
      name="user-circle"
      size={35}
      color="#2C3E50"
      style={styles.icon}
    />
    <View style={styles.memberDetails}>
      <View style={styles.nameContainer}>
        <Text style={styles.memberName}>{name}</Text>
        <Text style={styles.memberName}>{lastname}</Text>
      </View>
      <Text style={styles.memberEmail}>{email}</Text>
    </View>
  </View>
);

export default function Colaboradores({ navigation, route }) {
  const [team, setTeam] = useState([]);

  const getTeamMembers = async () => {
    try {
      const response = await apiHandler.get(
        `/department/profiles/department/${route.params.id}`
      );
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];  // Retorna um array vazio em caso de erro
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamMembers();
      setTeam(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {/* Verifica se há membros no time */}
      {team.length > 0 ? (
        team.map((member) => (
          <Membro
            name={member.user_name}
            lastname={member.user_lastname}
            email={member.user_email}
            key={member.user_id}
          />
        ))
      ) : (
        <Text style={styles.noMembersText}>Nenhum membro encontrado.</Text> // Mensagem quando não há membros
      )}
    </View>
  );
}
