import React, { useEffect, useState } from "react"; 
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native"; 
import { styles } from "./styles"; 
import Header from "../../components/Header"; 
import { apiHandler } from "../../services/axiosApi";
import AntDesign from '@expo/vector-icons/AntDesign'; 
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import Jobs from "../Jobs"; 

export default function Vacancies({ navigation }) {
    // Estados locais para armazenar as vagas e a vaga selecionada
    const [vacancies, setVacancies] = useState([]);
    const [selectedVacancy, setSelectedVacancy] = useState(null);

    const getVacancies = async () => {
        try {
            const response = await apiHandler.get("/vacancies"); 
            setVacancies(response.data); // armazena os dados das vagas no estado
        } catch (error) {
            console.log("Erro ao buscar vagas: ", error); 
            Alert.alert("Erro", "Não foi possível buscar as vagas. Tente novamente mais tarde."); 
        }
    };

    const deleteVacancy = async (id) => {
        try {
            await apiHandler.delete(`/vacancies/delete/${id}`); // chama delete na rota com o ID da vaga
            setVacancies(vacancies.filter((vaga) => vaga.id !== id)); // atualiza o estado removendo a vaga deletada
            Alert.alert("Sucesso", "Vaga deletada com sucesso."); 
        } catch (error) {
            console.log("Erro ao deletar vaga: ", error); 
            Alert.alert("Erro", "Não foi possível deletar a vaga.");
        }
    };

    const confirmDeleteVacancy = (id) => {
        Alert.alert(
            "Confirmação",
            "Tem certeza que deseja deletar esta vaga?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Deletar",
                    style: "destructive", 
                    onPress: () => deleteVacancy(id), 
                },
            ],
            { cancelable: true } // Permite cancelar clicando fora do alerta
        );
    };

    // useEffect é usado para chamar a função toda vez que carregar a página
    useEffect(() => {
        getVacancies();
    }, []);

    // exibe e esconde os detalhes
    const showDetails = (vaga) => {
        // Se a vaga já estiver selecionada, desmarca; caso contrário, seleciona
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

            {/* Lista de vagas */}
            <ScrollView style={styles.scrollContainer}>
                {vacancies.map((vaga) => (
                    <View
                        style={[styles.projectItem, selectedVacancy?.id === vaga.id ? styles.projectItemSelected : null]}
                        key={vaga.id} // cada item da lista tem uma key única
                    >
                        <TouchableOpacity onPress={() => showDetails(vaga)}>
                            <Text style={styles.projectText}>{vaga.titulo}</Text>
                        </TouchableOpacity>

                        {/* mostra os detalhes da vaga se ela estiver selecionada */}
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
                                onPress={() => confirmDeleteVacancy(vaga.id)}
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
