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
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Meu Time</Text>
        <TouchableOpacity>
          <FontAwesome
            name="caret-down"
            size={20}
            color="#FFF"
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>
      {team.map((member) => (
        <Membro
          name={member.user_name}
          lastname={member.user_lastname}
          email={member.user_email}
          key={member.user_id}
        />
      ))}
    </View>
  );
}