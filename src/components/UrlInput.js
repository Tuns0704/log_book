import React, { useState } from "react";
import { insertImage } from "../services/db-service";
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { useDbContext } from "../context/DbContext";

const UrlInput = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const db = useDbContext();

  function handleUrlChange(text) {
    setUrl(text);
  }
  async function addUrl() {
    if (url === "") {
      setError("Please enter a URL");
      return;
    }
    try {
      await insertImage(db, url);
      Alert.alert('Success', 'Add url successfully', [{ text: 'OK' }]);
    } catch (e) {
      setError(`An error occurred while adding the URL: ${e.message}`);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputField}>
        <TextInput
          selectionColor={"#888"}
          placeholder={"Input URL here"}
          onChangeText={handleUrlChange}
          value={url}
        />
      </View>
      <View
        style={styles.button}
      >
        <Button
          title="Add URL" onPress={addUrl} />
        {error && <Text>{error}</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignSelf: 'center',
  },
  inputField: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    width: "100%",
  }
});

export default UrlInput;
