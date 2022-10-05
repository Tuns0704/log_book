import {
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { ImageSwiper, Camera, UrlInput } from "./components";
import { initDatabase } from "./services/db-service";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/4383470/pexels-photo-4383470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/5579177/pexels-photo-5579177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/3752118/pexels-photo-3752118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1591053/pexels-photo-1591053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/3040260/pexels-photo-3040260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/4365414/pexels-photo-4365414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/1549666/pexels-photo-1549666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const App = () => {
  useEffect(function () {
    async function init() {
      await initDatabase();
    }
    init();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.HeaderTitle}>Logbook</Text>
      <ImageSwiper images={images} />
      <UrlInput />
      <Camera />
    </ScrollView>
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
