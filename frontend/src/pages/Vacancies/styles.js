import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9",
    },

    projectBox: {
        width: "100%",
        height: 70,  
        color: "#2C3E50",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },

    projectTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2C3E50",
        textAlign: "center",
    },

    scrollContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },

    projectItem: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },

    projectText: {
        fontSize: 18,
        color: "#0c4a6e",
    }
});
