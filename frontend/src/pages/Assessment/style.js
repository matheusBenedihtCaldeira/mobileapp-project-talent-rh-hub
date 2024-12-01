import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  projectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  title:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#34495E",
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "300",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#2C3E50",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    alignSelf: "center",

  },

  projectTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#34495E",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 14,
    color: "#052e16",
    fontWeight: "600",
    marginLeft: 5,
  },
  scrollContainer: {
    padding: 20,
  },
  projectItem: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  projectItemSelected: {
    borderColor: "#B0C4DE",
    borderWidth: 2,
  },
  projectText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495E",
  },
  detailsContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F0F4F8",
    borderRadius: 5,
  },
  detailsText: {
    fontSize: 14,
    color: "#34495E",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonDelete: {
    backgroundColor: "#FFE5E5",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonUpdate: {
    backgroundColor: "#E5E5FF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",

  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
    fontWeight: "bold",


  },
  buttonSave: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
    fontWeight: "bold",

  },

  formContainer:{
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    
   
  },

  button:{
    backgroundColor: "#E8F5E9",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#052e16",
    fontSize: 18,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    
  },

  text:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#052e16",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
  }
});