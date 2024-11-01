import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D9D9D9",
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
      color: "#2C3E50",
    },
  
  
    input: {
      height: 40,
      borderColor: "#2C3E50",
      borderWidth: 1,
      width: "100%",
      paddingHorizontal: 10,
      borderRadius: 5,
      marginBottom: 15,
      backgroundColor: "white",
  
    },
  
  
    button: {
      backgroundColor: "#2C3E50",
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
    },
    naoText: {
      marginTop: 20,
      marginBottom: 10,
      color: "#2C3E50",
      fontSize: 18,
      fontWeight: "bold",
    },


  });