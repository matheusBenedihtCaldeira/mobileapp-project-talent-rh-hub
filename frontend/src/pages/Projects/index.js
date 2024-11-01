import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";

export default function Projects() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.projectBox}>
                <Text style={styles.projectTitle}>Meus Projetos</Text>
            </View>
            
            <ScrollView style={styles.scrollContainer}>
                
                <View style={styles.projectItem}>
                    <Text style={styles.projectText}>Projeto 1</Text>
                </View>
                <View style={styles.projectItem}>
                    <Text style={styles.projectText}>Projeto 2</Text>
                </View>
                
            </ScrollView>
        </View>
    );
}
