import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
} from "react-native";

import config from "../config";

export default function GetName({closePrompt, enter, setUsername }) {
  const [localUser, setLocalUser] = useState("")
  const submit = () => {
    if (localUser === "") {
      Alert.alert("Name not valid", "Please insert a valid name.");
      return;
    }
    enter();
    setUsername(localUser)
    closePrompt();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.window}>
        <Text style={styles.title}>Enter a name:</Text>
        <Text style={styles.message}>
          This name will appear to the other people in the room.
        </Text>
        <TextInput
          placeholder="Name"
          onChangeText={setLocalUser}
          style={styles.input}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              onPress={closePrompt}
              title="Cancel"
              color={config.colors.orange}
            />
          </View>
          <View style={styles.button}>
            <Button onPress={submit} title="Ok" color={config.colors.blue} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
  },
  window: {
    width: "80%",
    marginHorizontal: "auto",
    paddingHorizontal: 10,
    paddingVertical: 20,
    minHeight: 200,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 30,
    shadowColor: "black",
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.3
  },
  title: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 30,
  },
  message: {
    paddingHorizontal: 20,
  },
  input: {
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    height: 40,
    borderStyle: "solid",
    borderBottomWidth: 2,
  },
  buttons: {
    width: "100%",
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: "50%",
    marginVertical: 15,
  },
});
