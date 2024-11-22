import React, { createContext, useEffect, useState } from "react";
import { apiHandler } from "../services/axiosApi";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);

  // Verifica se ha dados do usuario armazenados no AsyncStorage
  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("@talentSpotUser");
      if (storageUser) {
        const parsedUser = JSON.parse(storageUser); // Deserializa o objeto
        setUser(parsedUser);
        setSigned(true); // Marca como logado se o usuario estiver no storage
      }
    }
    loadStorage();
  }, []);

  // Função de login
  async function signIn(email, password) {
    try {
      const body = { email, password };
      const response = await apiHandler.post("/token", body);
      if (response.status === 200) {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        const { token, user } = response.data;
        const data = { id: user.id, email: user.email, token };

        // Salva o usuario e token no AsyncStorage
        await AsyncStorage.setItem("@talentSpotUser", JSON.stringify(data));
        apiHandler.defaults.headers["Authorization"] = `Bearer ${token}`;
        setUser(data); // Atualiza o estado do usuario
        setSigned(true); // Marca como logado
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Erro", "Falha no login. Verifique suas credenciais.");
    }
  }

  async function signOut() {
    try {
      await AsyncStorage.removeItem("@talentSpotUser");
      setUser(null);
      setSigned(false);
      apiHandler.defaults.headers["Authorization"] = null;
      Alert.alert("Sucesso", "Logout realizado com sucesso!");
    } catch (err) {
      console.log("Erro ao realizar logout:", err);
      Alert.alert("Erro", "Não foi possível realizar o logout.");
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signed, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
