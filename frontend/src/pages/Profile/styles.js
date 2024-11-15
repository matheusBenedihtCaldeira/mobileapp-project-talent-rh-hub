import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F1",
    paddingTop: 20,
  },
  profileContainer: {
    backgroundColor: "#D0D3D4",
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  detailBox: {
    backgroundColor: "#F0F3F4",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BDC3C7",
  },
  detailText: {
    fontSize: 16,
    color: "#34495E",
    textAlign: "center",
  },
});
