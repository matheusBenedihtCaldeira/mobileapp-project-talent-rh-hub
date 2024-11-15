import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
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
    elevation: 4,
    alignItems: "stretch",
  },
  text: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "bold",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  input: {
    height: 45,
    borderColor: "#BDC3C7",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#2C3E50",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  naoText: {
    marginTop: 20,
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
