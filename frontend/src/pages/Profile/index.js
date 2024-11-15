import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";
import { styles } from "./styles";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.profileContainer}>
        <FontAwesome name="user-circle" size={120} color="#2C3E50" style={styles.icon} />
      </View>

      <Text style={styles.userName}>Marcos Gabriel Iurak</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailBox}>
          <Text style={styles.detailText}>Detalhe 1</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.detailText}>Detalhe 2</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.detailText}>Detalhe 3</Text>
        </View>
      </View>
    </View>
  );
}
