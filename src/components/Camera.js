import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Camera = () => {
  const [image, setImage] = useState();
  const handleLaunchCamera = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };
  const handleLaunchImageLibrary = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button title='Open camera'
          onPress={() => { handleLaunchCamera(); }}
        />
      </View>
      <View style={styles.button}>
        <Button title='Open Library'
          onPress={() => { handleLaunchImageLibrary(); }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 100,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 170,
    paddingTop: 10,
  }
});

export default Camera