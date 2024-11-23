import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#34495E",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1C2833",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 60, 
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: "#ECF0F1", // Cor mais clara
    fontSize: 26,
    fontWeight: "bold",
  },
  buttonMenu: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#2C3E50",
  },
  buttonProfile: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#2C3E50",
  },

  // Estilos para o Modal
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: 200,
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  menuItemsContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 30, // Ajuste o espaçamento entre os ícones
  },
  menuItem: {
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});
