import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";


export default function MeuTime() {
  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.MeuTime}>
        <Text
          style={{
            color: "#FFF",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Meu time
        </Text>
        <TouchableOpacity>
          <FontAwesome
            name="caret-down"
            size={20}
            color="#FFF"
            style={{
              flexDirection: "column",
              marginStart: 20,
              top: -25,
              position: "absolute",
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.Time}>
        <Text
          style={{
            position: "absolute",
            left: "83%",
            top: "50%",
            fontSize: 10,
          }}
        >
          Dev.BackEnd
        </Text>

        <FontAwesome
          name="user-circle"
          size={35}
          color="#000"
          style={{
            position: "absolute",
            top: "25%",
            left: "3%",
          }}
        />

        <Text
          style={{
            color: "#000",
            fontSize: 20,
            flex: 3,
            left: "15%",
          }}
        >
          Matheus Benneh
        </Text>

        <Text
          style={{
            color: "#000",
            fontSize: 15,
            flex: 3,
            left: "15%",
          }}
        >
          Matheus.Benneh@empresa.com.br
        </Text>
      </View>

      <View style={styles.Time}>
        <View style={styles.Time}>
          <Text
            style={{
              position: "absolute",
              left: "83%",
              top: "50%",
              fontSize: 10,
            }}
          >
            Dev.BackEnd
          </Text>

          <FontAwesome
            name="user-circle"
            size={35}
            color="#000"
            style={{
              position: "absolute",
              top: "25%",
              left: "3%",
            }}
          />

          <Text
            style={{
              color: "#000",
              fontSize: 20,
              flex: 3,
              left: "15%",
            }}
          >
            Yasmin Martins
          </Text>

          <Text
            style={{
              color: "#000",
              fontSize: 15,
              flex: 3,
              left: "15%",
            }}
          >
            yasmin.martins@empresa.com.br
          </Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  MeuTime: {
    backgroundColor: "#2e2e2e",
    height: 60,
  },
  Time: {
    borderColor: "#2e2e2e",
    borderWidth: 1,
    height: 60,
  },
});
