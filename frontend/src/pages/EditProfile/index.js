import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";

export default function EditProfile({ navigation, route }) {
  const [firstName, setFirstName] = useState(route.params.profile.first_name);
  const [lastName, setLastName] = useState(route.params.profile.last_name);
  const [location, setLocation] = useState(route.params.profile.location);
  const [phoneNumber, setPhoneNumber] = useState(route.params.profile.phone_number);
  const [skills, setSkills] = useState(route.params.profile.skills);
  const [education, setEducation] = useState(route.params.profile.education);

  const handleUpdateProfile = async () => {
    try {
      const body = {
        first_name: firstName,
        last_name: lastName,
        location: location,
        phone_number: phoneNumber,
        skills: Array.isArray(skills) ? skills : skills.split(",").map((skill) => skill.trim()),
        education: Array.isArray(education) ? education : education.split(",").map((edu) => edu.trim()),
      };
      const response = await apiHandler.patch(`/profile/update/${route.params.profile.id}`, body);
      if (response.status === 200) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil.: ", error);
      Alert.alert(
        "Erro",
        "Não foi possível atualizar o perfil. Tente novamente mais tarde."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.text}>Nome:</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Sobrenome:</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            placeholder="Digite seu sobrenome"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Localidade:</Text>
          <TextInput
            value={location}
            onChangeText={setLocation}
            style={styles.input}
            placeholder="Digite sua localidade"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Celular:</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.input}
            placeholder="Digite seu celular"
            placeholderTextColor="#A0A0A0"
            keyboardType="phone-pad"
          />

          <Text style={styles.text}>Habilidades:</Text>
          <TextInput
            value={skills}
            onChangeText={setSkills}
            style={styles.input}
            placeholder="Digite habilidades separadas por vírgula"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Formação:</Text>
          <TextInput
            value={education}
            onChangeText={setEducation}
            style={styles.input}
            placeholder="Digite formações separadas por vírgula"
            placeholderTextColor="#A0A0A0"
          />

          <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
