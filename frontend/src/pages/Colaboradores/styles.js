import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    backgroundColor: "#2C3E50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  dropdownIcon: {
    marginLeft: 10,
  },
  memberContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#BDC3C7",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  memberDetails: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row", // Ajusta para exibir o nome e sobrenome lado a lado
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginRight: 5, // Adiciona espaçamento entre o nome e sobrenome
  },
  memberEmail: {
    fontSize: 14,
    color: "#7F8C8D",
  },
  memberRole: {
    fontSize: 12,
    color: "#2C3E50",
    fontWeight: "500",
  },
  noMembersText: {
    fontSize: 18,
    color: "#2C3E50",
    textAlign: "center",
    marginTop: 20,
  }
});