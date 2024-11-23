import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { apiHandler } from "../../services/axiosApi";

export default function Profile({ navigation }) {
  const { user, signOut } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  const fetchProfileData = async () => {
    try {
      const response = await apiHandler.get(`/profile/${user.id}`);
      const profile = response.data.data;
      setProfile(profile);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    navigation.navigate("EditProfile", { profile });
  };

  const handleDelete = async () => {
    const response = await apiHandler.delete(`/profile/delete/${profile.user_id}`)
    if(response.status === 204){
      signOut()
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileContainer}>
          <FontAwesome
            name="user-circle"
            size={120}
            color="#FFFFFF"
            style={styles.icon}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.userName}>
            {profile ? profile.first_name : "Carregando..."}{" "}
            {profile ? profile.last_name : "Carregando..."}
          </Text>
          <View style={styles.actionIcons}>
            {/* Ícone de editar */}
            <TouchableOpacity onPress={handleEdit} style={styles.iconButton}>
              <FontAwesome name="edit" size={24} color="rgb(28, 40, 51)" />
            </TouchableOpacity>
            {/* Ícone de excluir */}
            <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
              <FontAwesome name="trash" size={24} color="#b91c1c" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          {[ 
            {
              label: "Atribuição",
              value: profile ? profile.job_title : "Carregando...",
            },
            {
              label: "Localização",
              value: profile ? profile.location : "Carregando...",
            },
            {
              label: "E-mail",
              value: profile ? profile.email : "Carregando...",
            },
            {
              label: "Telefone",
              value: profile ? profile.phone_number : "Carregando...",
            },
            {
              label: "Departamento",
              value: profile ? profile.department : "Carregando...",
            },
            {
              label: "Habilidades",
              value: profile ? profile.skills.join(", ") : "Carregando...",
            },
            {
              label: "Educação",
              value: profile ? profile.education.join(", ") : "Carregando...",
            },
          ].map((detail, index) => (
            <View style={styles.detailBox} key={index}>
              <Text style={styles.detailLabel}>{detail.label}:</Text>
              <Text style={styles.detailText}>{detail.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
