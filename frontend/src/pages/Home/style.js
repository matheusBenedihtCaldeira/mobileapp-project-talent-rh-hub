import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  CaixaGrande: {
    backgroundColor: "#E5E8EB",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#525252",
    textAlign: "center",
    lineHeight: 22,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  actionButton: {
    alignItems: "center",
  },
  areaButton: {
    backgroundColor: "#D1D5DB",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  menuText: {
    fontSize: 14,
    color: "#2C3E50",
    fontWeight: "500",
  },
  separator: {
    height: 2,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  dataScienceContainer: {
    padding: 20,
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dataScienceTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 15,
  },
  dataScienceCard: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  departmentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  departmentText: {
    fontSize: 16,
    color: "#555555",
    marginTop: 5,
  },
  skillsList: {
    marginTop: 10,
  },
  skillItem: {
    fontSize: 14,
    color: "#2C3E50",
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    color: "#E74C3C",
    textAlign: "center",
  },
});
