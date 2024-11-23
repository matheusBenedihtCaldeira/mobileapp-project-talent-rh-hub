import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { FontAwesome5, Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import { styles } from "./style.js";

export default function Header() {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext); // Para chamar a função de logout
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  // Obter o estado da navegação para verificar a tela atual
  const currentRoute = navigation.getState()?.routes[navigation.getState().index]?.name;

  // Condicional para não exibir as opções na tela de Login ou Registro
  const isLoginOrRegister = currentRoute === "SignIn" || currentRoute === "SignUp"

  return (
    <View style={styles.header}>
      {!isLoginOrRegister && (
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.7}
        >
          <Entypo name="home" size={27} color="#FFF" />
        </TouchableOpacity>
      )}

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>TalentSpot</Text>
      </View>

      {!isLoginOrRegister && (
        <TouchableOpacity
          style={styles.buttonProfile}
          onPress={handleOpenModal} // Abre o menu de opções ao clicar no ícone de perfil
          activeOpacity={0.3}
        >
          <FontAwesome5 name="user-circle" size={27} color="#FFF" />
        </TouchableOpacity>
      )}

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
              style={styles.closeButton}
              onPress={handleCloseModal}
            >
              <AntDesign name="closecircleo" size={27} color="black" />
            </TouchableOpacity>
            <View style={styles.menuItemsContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate("Profile"); // Vai para o perfil
                  handleCloseModal();
                }}
              >
                <FontAwesome5 name="user-circle" size={27} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  signOut(); // Realiza o logout
                  handleCloseModal();
                }}
              >
                <Feather name="log-out" size={27} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
