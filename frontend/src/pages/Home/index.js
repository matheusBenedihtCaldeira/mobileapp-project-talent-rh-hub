import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"; // Added Image here
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";
import Header from "../../components/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header/>

      
      
      <View style={styles.Caixa} />
      
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("MeuTime")}
        >
          <View style={styles.areaButton}>
            <FontAwesome name="users" size={24} color="#525252" />
          </View>
          <Text style={styles.menuText}>Meu time</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Projects")}
        >
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

        <TouchableOpacity style={styles.actionButton}
        onPress={() => navigation.navigate("Vacancies")}
        >
          <View style={styles.areaButton}>
            <FontAwesome name="clipboard" size={24} color="#525252" />
          </View>
          <Text style={styles.menuText}>Vagas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linxota} />
      <View style={styles.Caixota} />
    </View>
  );
}
