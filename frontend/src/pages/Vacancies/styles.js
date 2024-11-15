import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA", // Cor de fundo suave para um visual mais moderno
    },

    projectBox: {
        width: "100%",
        height: 80,
        backgroundColor: "#E5E8EB",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#D1D5DB",
    },

    projectTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2C3E50",
        textAlign: "center",
    },

    addButton: {
        flexDirection: "row",
        alignItems: "center",
    },

    addButtonText: {
        fontSize: 16,
        color: "#052e16",
        marginLeft: 5,
        fontWeight: "bold",
    },

    scrollContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },

    projectItem: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },

    projectItemSelected: {
        borderColor: "#0c4a6e",
        borderWidth: 1.5,
    },

    projectText: {
        fontSize: 18,
        color: "#0c4a6e",
        fontWeight: "600",
    },

    detailsContainer: {
        marginTop: 15,
        padding: 10,
        backgroundColor: "#F0F4F8",
        borderRadius: 8,
    },

    detailsText: {
        fontSize: 16,
        color: "#374151",
        marginBottom: 5,
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 10,
    },

    buttonDelete: {
        backgroundColor: "#FEE2E2",
        borderRadius: 5,
        padding: 8,
        marginLeft: 5,
    },

    buttonUpdate: {
        backgroundColor: "#E0F2FE",
        borderRadius: 5,
        padding: 8,
        marginLeft: 5,
    },
});
