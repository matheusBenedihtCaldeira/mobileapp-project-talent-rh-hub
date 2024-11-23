import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F1",
  },
  profileContainer: {
    backgroundColor: "#9ca3af",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  icon: {
    marginBottom: 10,
  },
  userName: {
    fontSize: 26, 
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 25,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  detailBox: {
    backgroundColor: "#FFFFFF", 
    padding: 18,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#BDC3C7",
    elevation: 3, 
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495E", 
  },
  detailText: {
    fontSize: 16,
    color: "#7F8C8D", 
    marginTop: 5,
  },
  loader: {
    marginTop: 50,
  },
  errorText: {
    fontSize: 18,
    color: "#E74C3C",
    textAlign: "center",
    marginTop: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  actionIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#9ca3af", 
    borderRadius: 8,
  },
  editIcon: {
    color: "#3498DB", 
    fontSize: 24,
  },
  deleteIcon: {
    color: "#991b1b", 
    fontSize: 24,
  },
});
