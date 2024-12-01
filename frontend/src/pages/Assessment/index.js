import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import Header from "../../components/Header";
import { apiHandler } from "../../services/axiosApi";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Assessment({ navigation }) {
    const [assessment, setAssessment] = useState([]);
    const [selectedAssessment, setSelectedAssessment] = useState(null);

    const getAssessment = async () => {
        try {
            const response = await apiHandler.get("/assessment");
            console.log(response);
            setAssessment(response.data);
        } catch (error) {
            console.log("Erro ao buscar avaliações: ", error);
            Alert.alert("Erro", "Não foi possível buscar as avaliações. Tente novamente mais tarde.");
        }
    };

    const deleteAssessment = async (id) => {
        try {
            await apiHandler.delete(`/assessment/delete/${id}`);
            setAssessment(assessment.filter((avaliacao) => avaliacao.assessment_id !== id));
            Alert.alert("Sucesso", "Avaliação deletada com sucesso.");
        } catch (error) {
            console.log("Erro ao deletar avaliação: ", error);
            Alert.alert("Erro", "Não foi possível deletar a avaliação.");
        }
    };

    useEffect(() => {
        getAssessment();
    }, []);

    const showDetails = (avaliacao) => {
        setSelectedAssessment(selectedAssessment?.assessment_id === avaliacao.assessment_id ? null : avaliacao);
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.projectBox}>
                <Text style={styles.projectTitle}>Avaliações</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("CadastrarAvaliacao")}>
                    <AntDesign name="pluscircle" size={24} color="#052e16" />
                    <Text style={styles.addButtonText}>Adicionar avaliação</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollContainer}>
                {assessment.map((avaliacao) => (
                    <View
                        style={[styles.projectItem, selectedAssessment?.assessment_id === avaliacao.assessment_id ? styles.projectItemSelected : null]}
                        key={avaliacao.assessment_id}
                    >
                        <TouchableOpacity onPress={() => showDetails(avaliacao)}>
                            <Text style={styles.projectText}>{avaliacao.funcionario_email}</Text>
                        </TouchableOpacity>

                        {selectedAssessment && selectedAssessment.assessment_id === avaliacao.assessment_id && (
                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailsText}>Feedback: {avaliacao.feedback}</Text>
                                <Text style={styles.detailsText}>Pontuação: {avaliacao.pontuacao}</Text>
                                <Text style={styles.detailsText}>Avaliador: {avaliacao.avaliador_email}</Text>
                            </View>
                        )}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.buttonDelete}
                                onPress={() => deleteAssessment(avaliacao.assessment_id)}
                            >
                                <AntDesign name="delete" size={24} color="red" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonUpdate}
                                onPress={() => navigation.navigate("EditarAvaliacao", { data: avaliacao })}
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