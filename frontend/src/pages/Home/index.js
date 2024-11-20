import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";
import Header from "../../components/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.CaixaGrande}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
        <Text style={styles.descriptionText}>
          Navegue pelos seus projetos, equipe, vagas e avaliações de forma fácil
          e intuitiva.
        </Text>
      </View>

      <View style={styles.menu}>
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
          <Text style={styles.menuText}>Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("CadastroAvaliacao")}
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
      </View>

      <View style={styles.separator} />
    </View>
  );
}
