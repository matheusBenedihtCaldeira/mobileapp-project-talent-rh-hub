import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";
import { AuthContext } from "../../contexts/auth";

const TeamMember = ({ name, lastname, email, role }) => (
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
    <Text style={styles.memberRole}>{role}</Text>
  </View>
);

export default function MeuTime() {
  const { user } = useContext(AuthContext);
  const [time, setTime] = useState([]);

  const getTime = async () => {
    try {
      const response = await apiHandler.get(`/department/profiles/${user.id}`);
      console.log(response)
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const time = await getTime();
      setTime(time);
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

      {/* Lista de membros do time */}
      {time.map(time => (
        <TeamMember
        name={time.user_name}
        lastname={time.user_lastname}
        email={time.user_email}
        key={time.user_id}
      />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    backgroundColor: "#2C3E50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  dropdownIcon: {
    marginLeft: 10,
  },
  memberContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#BDC3C7",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  memberDetails: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row", // Ajusta para exibir o nome e sobrenome lado a lado
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginRight: 5, // Adiciona espaçamento entre o nome e sobrenome
  },
  memberEmail: {
    fontSize: 14,
    color: "#7F8C8D",
  },
  memberRole: {
    fontSize: 12,
    color: "#2C3E50",
    fontWeight: "500",
  },
});