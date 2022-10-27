import {
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
// import React, { useEffect } from "react";
import React from "react";
import { ImageSwiper, Camera, UrlInput } from "./components";
// import { initDatabase } from "./services/db-service";
import { DbContextProvider } from "./context/DbContext";


const App = () => {
  // useEffect(function () {
  //   async function init() {
  //     await initDatabase();
  //   }
  //   init();
  // }, []);
  return (
    <DbContextProvider>
      <ScrollView style={styles.container}>
        <Text style={styles.HeaderTitle}>Logbook</Text>
        <ImageSwiper />
        <UrlInput />
        <Camera />
      </ScrollView>
    </DbContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 25, backgroundColor: '#fff', height: '100%' },
  HeaderTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
