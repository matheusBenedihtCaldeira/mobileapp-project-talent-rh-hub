import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";
import Header from "../../components/Header";

export default function Home() {

  return (

    <View style={styles.container}>
      <Header />
      <View style={styles.CaixaGrande} />
      <View style={styles.Caixa} />
      <View style={styles.menu}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FontAwesome name="users" size={24} color="#525252" />
          </View>
          <Text style={styles.menuText}>Meu time</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FontAwesome name="folder" size={24} color="#525252" />
          </View>
          <Text style={styles.menuText}>Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FontAwesome name="star" size={24} color="#525252" />
          </View>
          <Text style={styles.menuText}>Avaliações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FontAwesome name="clipboard" size={24} color="#525252" />
          </View>
          <Text style={styles.menuText}>Candidatura</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linxota} />

      <View style={styles.Caixota} />
    </View>
  );
}

