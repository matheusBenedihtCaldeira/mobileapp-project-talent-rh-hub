import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";

export default function SignUp({ navigation }) {
  const [roles, setRoles] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [roleId, setRoleId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [managerId, setManagerId] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [managers, setManagers] = useState([]);

  // Função para buscar roles
  const getRoles = async () => {
    try {
      const response = await apiHandler.get("/roles");
      setRoles(response.data);
    } catch (error) {
      console.error("Erro ao buscar papéis: ", error);
      Alert.alert(
        "Erro",
        "Não foi possível buscar os papéis. Tente novamente mais tarde."
      );
    }
  };

  const getDepartments = async () => {
    try {
      const response = await apiHandler.get("/department");
      setDepartamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar departamentos: ", error);
      Alert.alert(
        "Erro",
        "Não foi possível buscar os departamentos. Tente novamente mais tarde."
      );
    }
  };

  const getManagers = async () => {
    try {
      const response = await apiHandler.get("/users");
      setManagers(response.data);
    } catch (error) {
      console.error("Erro ao buscar departamentos: ", error);
      Alert.alert(
        "Erro",
        "Não foi possível buscar os departamentos. Tente novamente mais tarde."
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getRoles();
      await getDepartments();
      await getManagers();
    };
    fetchData();
  }, []);

  const handleSignUp = async () => {
    try {
      if (
        !email ||
        !password ||
        !confirmPassword ||
        !firstName ||
        !lastName ||
        !location ||
        !phoneNumber ||
        !jobTitle ||
        !roleId ||
        !departmentId ||
        !managerId ||
        !skills ||
        !education
      ) {
        console.log("Erro", "Por favor, preencha todos os campos.")
        Alert.alert("Erro", "Por favor, preencha todos os campos.");
        return;
      }

      if (password != confirmPassword) {
        console.log("Erro", "As senhas não conferem.")
        Alert.alert("Erro", "As senhas não conferem.");
        return;
      }

      const body = {
        email: email,
        password: password,
        role_id: roleId,
        first_name: firstName,
        last_name: lastName,
        manager_id: managerId,
        location: location,
        phone_number: phoneNumber,
        job_title: jobTitle,
        department_id: departmentId,
        skills: skills.split(",").map((skill) => skill.trim()),
        education: education.split(",").map((edu) => edu.trim()),
      };
      console.log(body);
      const response = await apiHandler.post("/profile/register", body);
      if (response.status === 201) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("SignIn");
      } else {
        Alert.alert(
          "Erro",
          "Erro ao realizar o cadastro. Tente novamente mais tarde."
        );
      }
    } catch (error) {
      console.error("Erro ao cadastrar o novo usuário: ", error);
      Alert.alert(
        "Erro",
        "Não foi possível realizar o cadastro. Tente novamente mais tarde."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.text}>Email:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#A0A0A0"
            keyboardType="email-address"
          />

          <Text style={styles.text}>Senha:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
          />

          <Text style={styles.text}>Confirmar Senha:</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            placeholder="Confirme sua senha"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
          />

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

          <Text style={styles.text}>Cargo:</Text>
          <TextInput
            value={jobTitle}
            onChangeText={setJobTitle}
            style={styles.input}
            placeholder="Digite seu cargo"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.text}>Atribuição:</Text>
          <Picker
            selectedValue={roleId}
            style={styles.picker}
            onValueChange={setRoleId}
          >
            <Picker.Item label="Selecione uma atribuição" value="default" color="#2C3E50" />
            {roles.map((role) => (
              <Picker.Item key={role.id} label={role.role} value={role.id} color="#2C3E50"/>
            ))}
          </Picker>

          <Text style={styles.text}>Departamento:</Text>
          <Picker
            selectedValue={departmentId}
            style={styles.picker}
            onValueChange={setDepartmentId}
          >
            <Picker.Item label="Selecione um departamento" value="default" color="#2C3E50"  /> 
            {departamentos.map((dep) => (
              <Picker.Item key={dep.id} label={dep.name} value={dep.id} color="#2C3E50"  />
            ))}
          </Picker>

          <Text style={styles.text}>Gestor:</Text>
          <Picker
            selectedValue={managerId}
            style={styles.picker}
            onValueChange={setManagerId}
          >
            <Picker.Item label="Selecione um gestor" value="default" color="#2C3E50" />
            {managers.map((manager) => (
              <Picker.Item
                key={manager.id}
                label={manager.email}
                value={manager.id}
                color="#2C3E50" 
              />
            ))}
          </Picker>

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

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
