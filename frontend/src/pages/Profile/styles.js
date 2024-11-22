import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F1",
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
    fontSize: 26, // Fonte maior para o nome
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
    backgroundColor: "#FFFFFF", // Fundo branco para detalhes
    padding: 18,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#BDC3C7",
    elevation: 3, // Sombra leve para profundidade
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495E", // Cor de texto mais suave
  },
  detailText: {
    fontSize: 16,
    color: "#7F8C8D", // Cor mais neutra para o texto
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
});
