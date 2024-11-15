import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Jobs from "../Jobs";

export default function Vacancies({ navigation }) {
    const [vacancies, setVacancies] = useState([]);
    const [selectedVacancy, setSelectedVacancy] = useState(null);

    const getVacancies = async () => {
        try {
            const response = await apiHandler.get("/vacancies");
            setVacancies(response.data);
        } catch (error) {
            console.log("Erro ao buscar vagas: ", error);
            Alert.alert("Erro", "Não foi possível buscar as vagas. Tente novamente mais tarde.");
        }
    };

    const deleteVacancy = async (id) => {
        try {
            await apiHandler.delete(`/vacancies/delete/${id}`);
            setVacancies(vacancies.filter((vaga) => vaga.id !== id));
            Alert.alert("Sucesso", "Vaga deletada com sucesso.");
        } catch (error) {
            console.log("Erro ao deletar vaga: ", error);
            Alert.alert("Erro", "Não foi possível deletar a vaga.");
        }
    };

    useEffect(() => {
        getVacancies();
    }, []);

    const showDetails = (vaga) => {
        setSelectedVacancy(selectedVacancy?.id === vaga.id ? null : vaga);
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.projectBox}>
                <Text style={styles.projectTitle}>Vagas</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Jobs")}>
                    <AntDesign name="pluscircle" size={24} color="#052e16" />
                    <Text style={styles.addButtonText}>Adicionar vaga</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollContainer}>
                {vacancies.map((vaga) => (
                    <View
                        style={[styles.projectItem, selectedVacancy?.id === vaga.id ? styles.projectItemSelected : null]}
                        key={vaga.id}
                    >
                        <TouchableOpacity onPress={() => showDetails(vaga)}>
                            <Text style={styles.projectText}>{vaga.titulo}</Text>
                        </TouchableOpacity>

                        {selectedVacancy && selectedVacancy.id === vaga.id && (
                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailsText}>Título: {selectedVacancy.titulo}</Text>
                                <Text style={styles.detailsText}>Descrição: {selectedVacancy.descricao}</Text>
                                <Text style={styles.detailsText}>Departamento: {selectedVacancy.nome_departamento}</Text>
                                <Text style={styles.detailsText}>Solicitante: {selectedVacancy.nome_solicitante}</Text>
                            </View>
                        )}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.buttonDelete}
                                onPress={() => deleteVacancy(vaga.id)}
                            >
                                <AntDesign name="delete" size={24} color="red" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonUpdate}
                                onPress={() => navigation.navigate("JobsEditar", { data: vaga })}
                            >
                                <FontAwesome name="pencil-square-o" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
