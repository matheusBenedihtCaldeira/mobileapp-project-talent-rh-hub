import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./style";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.buttonMenu}>
        <FontAwesome5 name="bars" size={27} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.titulo}>
      <Text style={styles.titulo}>TalentSpot</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.buttonProfile}>
        <FontAwesome5 name="user-circle" size={27} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}