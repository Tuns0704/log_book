import React, { useCallback, useState, useFocusEffect } from "react";
import { getDbConnection, getImages } from "../db-service";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Swiper from 'react-native-swiper';

const ImageSwiper = (props) => {
  const [images, setImage] = useState([]);
  const [error, setError] = useState(null);
  const focusEffect = useCallback(function () {
    async function fetchDb() {
      try {
        const db = await getDbConnection();
        const imagesFromDb = await getImages(db);
        setImage(imagesFromDb);
        db.close();
      } catch (e) {
        setError(`An error occurred while fetching images: ${e.message}`);
      }
    }
    fetchDb();
  }, []);
  useFocusEffect(focusEffect)

  if (error) {
    return <Text>{error.message}</Text>
  }
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        showsButtons={true}
        loop
        dot={<View style={styles.dot}></View>}
        activeDot={<View style={styles.activeDot}></View>}
        buttonWrapperStyle={styles.buttonWrapper}
        nextButton={<Text style={styles.navigateButton}> &#8250; </Text>}
        prevButton={<Text style={styles.navigateButton}> &#8249; </Text>}
        paginationStyle={{
          bottom: 50,
        }}
      >
        {images.map((item, index) => {
          return (
            <View key={item.id}>
              <Image source={{ uri: item.url }} style={styles.image} />
            </View>
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 400,
    height: 300,
    alignContent: 'center',
    alignSelf: 'center',
  },
  image: {
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
    width: 350,
    height: 280,
  },
  dot: {
    backgroundColor: "#888",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: -20, left: 0, flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navigateButton: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'
  },
});

export default ImageSwiper;