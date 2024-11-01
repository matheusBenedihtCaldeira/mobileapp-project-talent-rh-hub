import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    
   
    Caixota: {
      flexDirection:'row',
      backgroundColor: "#CCCCCC",
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    inputBox: {
      backgroundColor: "#A3A3A3",
      height: 100,
      marginBottom: 10, 
      paddingHorizontal: 10,
      borderRadius: 5,
      borderColor: "#CCCCCC",
      borderWidth: 1,
    },

    icon: {
        height: 60
    },

    text: {
        fontWeight: "bold",
        color: "#2C3E50",
        textAlign: "center",
        marginTop:20,
    }
    
  });