import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";

const TeamMember = ({ name, email, role }) => (
  <View style={styles.memberContainer}>
    <FontAwesome name="user-circle" size={35} color="#2C3E50" style={styles.icon} />
    <View style={styles.memberDetails}>
      <Text style={styles.memberName}>{name}</Text>
      <Text style={styles.memberEmail}>{email}</Text>
    </View>
    <Text style={styles.memberRole}>{role}</Text>
  </View>
);

export default function MeuTime() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Meu Time</Text>
        <TouchableOpacity>
          <FontAwesome name="caret-down" size={20} color="#FFF" style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>

      {/* Lista de membros do time */}
      <TeamMember name="Matheus Benneh" email="matheus.benneh@empresa.com.br" role="Dev. BackEnd" />
      <TeamMember name="Yasmin Martins" email="yasmin.martins@empresa.com.br" role="Dev. BackEnd" />
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
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
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
