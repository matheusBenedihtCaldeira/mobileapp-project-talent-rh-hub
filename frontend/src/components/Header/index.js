import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import { styles } from './style.js';
export default function Header() {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext); // Para chamar a função de logout

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true); 
  };

  const handleCloseModal = () => {
    setModalVisible(false); 
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.buttonMenu}
        onPress={() => navigation.navigate("Home")}
        activeOpacity={0.7}
      >
        <FontAwesome5 name="bars" size={27} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>TalentSpot</Text>
      </View>

      <TouchableOpacity 
        style={styles.buttonProfile}
        onPress={handleOpenModal} // Abre o menu de opções ao clicar no ícone de perfil
        activeOpacity={0.3}
      >
        <FontAwesome5 name="user-circle" size={27} color="#FFF" />
      </TouchableOpacity>

      {/* Modal com opções */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                navigation.navigate("Profile"); // Vai para o perfil
                handleCloseModal();
              }}
            >
              <Text style={styles.menuText}>Ir para o Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                signOut(); // Realiza o logout
                handleCloseModal();
              }}
            >
              <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={handleCloseModal} // Fecha o modal
            >
              <Text style={styles.menuText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}