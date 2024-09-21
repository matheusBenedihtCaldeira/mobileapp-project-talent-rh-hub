import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f9ff",
    },

    formContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      padding: 30,
    },
  
    text: {
      fontSize: 18,
      marginBottom: 5,
      fontWeight: "300",
      alignSelf: "flex-start",
      fontWeight: "bold",
      color: "#082f49",
    },
  
  
    input: {
      height: 40,
      borderColor: "#082f49",
      borderWidth: 1,
      width: "100%",
      paddingHorizontal: 10,
      borderRadius: 5,
      marginBottom: 15,
      backgroundColor: "white",
  
    },
  
  
    button: {
      backgroundColor: "#1e3a8a",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      width: "50%",
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    }
  });