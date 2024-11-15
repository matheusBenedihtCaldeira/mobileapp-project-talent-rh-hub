import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from './style.js';
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.buttonMenu}
        onPress={() => navigation.navigate("Home")}
        activeOpacity={0.7} // Efeito de toque
      >
        <FontAwesome5 name="bars" size={27} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>TalentSpot</Text>
      </View>

      <TouchableOpacity 
        style={styles.buttonProfile}
        onPress={() => navigation.navigate("Profile")}
        activeOpacity={0.7} // Efeito de toque
      >
        <FontAwesome5 name="user-circle" size={27} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
