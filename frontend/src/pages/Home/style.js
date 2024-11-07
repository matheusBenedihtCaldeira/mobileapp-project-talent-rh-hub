import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    actionButton: {
      alignItems: "center",
      marginRight: 32,
    },
    areaButton: {
      backgroundColor: "#cccccc",
      height: 50,
      width: 50,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
    },
    menu: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 20,
      marginStart:30,
    },
    menuItem: {
      alignItems: "center",
    },
    menuText: {
      marginTop: 8,
      fontSize: 12,
      color: "#333",
      flexDirection: "col",
    },
    Caixota: {
      backgroundColor: "#CCCCCC",
      height: 100,
    },
    CaixaGrande: {
      backgroundColor: "#CCCCCC",
      height: 200,
      
      
    },
  
    linxota: {
      backgroundColor: "#CCCCCC",
      height: 15,
      marginHorizontal: 20,
      marginVertical: 10,
    },

    imagem: {
      width: "80%",            // Occupies 80% of the screen width
      height: 20,     // Height will adjust automatically based on aspect ratio
      aspectRatio: 1.5,        // Adjust this value to match your image's original aspect ratio
      resizeMode: "contain",   // Ensures the entire image is visible without cropping
      alignSelf: "center",     // Centers the image horizontally
      marginVertical: 20,      // Adds vertical spacing above and below the image
      borderRadius: 10,        // Rounds the corners slightly for a softer look
      
    }
    
  });
  