import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
},

projectTitle: {
  fontSize: 24,
  fontWeight: "bold",
  color: "#2C3E50",
  textAlign: "center",
},

addButtonText: {
  fontSize: 16,
  color: "#052e16",
  marginLeft: 5,
  fontWeight: "bold",
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

  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#34495E",
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#34495E",
    fontWeight: "600",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  input: {
    height: 40,
    borderColor: "#B0C4DE",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  picker: {
    borderColor: "#B0C4DE",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#FFF"
  },
  button: {
    backgroundColor: "#34495E",
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});