import React from "react";
import { View, TextInput, Text} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";
import { styles } from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.Caixota}>
        <FontAwesome
          style={styles.icon}
          name="user-circle"
          size={100}
          color="#000"
        />
      </View>
      <View>
        <Text style={styles.text}>MArcos Gabriel Iurak</Text>
      </View>

      <View style={styles.estrelas}>
        
        
      </View>

      

      <View style={styles.inputContainer}>
       <Text style={styles.inputBox}></Text> 
       <Text style={styles.inputBox}></Text> 
       <Text style={styles.inputBox}></Text> 
        
        
      </View>
    </View>
  );
}