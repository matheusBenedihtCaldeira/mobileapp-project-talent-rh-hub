import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";

export default function Projects({ navigation }) { 
    const [departamentos, setDepartamentos] = useState([]);

    // Toda vez que o componente (página) carregar ou atualizar, o useEffect é executado
    useEffect(() => {
        getDepartamentos();
    }, []);

    const getDepartamentos = async () => {
        try {
            const response = await apiHandler.get('/department');
            console.log('rodando a função de puxar departamento');
            if (response.status === 200) {
                setDepartamentos(response.data);
            }
        } catch (err) {
            console.log("ERRO NA REQUISICAO: ", err);
        }
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.projectBox}>
                <Text style={styles.projectTitle}>Departamentos</Text>
            </View>
            
            <ScrollView style={styles.scrollContainer}>
                {departamentos.map((departamento) => (
                    <View style={styles.projectItem} key={departamento.id}> 
                        <TouchableOpacity onPress={() => navigation.navigate("Colaboradores", { id: departamento.id })}>
                            <Text style={styles.projectText}>{departamento.name}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}