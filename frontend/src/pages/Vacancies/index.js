import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";

export default function Vacancies({navigation}) {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.projectBox}>
                <Text style={styles.projectTitle}>Vagas</Text>
            </View>
            
            <ScrollView style={styles.scrollContainer}>
                
                <View style={styles.projectItem}>
                    <TouchableOpacity>
                        <Text style={styles.projectText}>Vaga 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.projectItem}>
                    <TouchableOpacity>
                        <Text style={styles.projectText}>Vaga 2</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </View>
    );
}
