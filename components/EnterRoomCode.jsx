import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";

import { useState } from "react";

import { Button } from "./elements";
import config from "../config";

const verifyRoomId = (roomId) =>
  !(
    roomId === "" ||
    roomId.length !== 6 ||
    roomId.match("^[a-fA-F0-9]+$").length === 0
  );

export default function EnterRoomCode({
  getName,
  setRoomId,
  setShowQrCodeReader,
}) {

  const colors = config.colors;
  const [Id, setId] = useState("");
  const dismissKeyboard = () => Platform.OS === "web" ? null : Keyboard.dismiss()

  const handleSubmit = () => {
    if (!verifyRoomId(Id)) {
      alert("Room name invalid.", "Please enter a valid room name.");
      return;
    }

    dismissKeyboard()
    setRoomId(Id.toUpperCase());
    getName();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.text}>Enter room code:</Text>
        <View style={styles.searchSection}>
          <TextInput
            placeholder="A1B2C3"
            style={styles.textInputStyle}
            onChangeText={setId}
          />
          <View style={styles.inputIcon}>
            <TouchableOpacity
              onPress={() => {
                setShowQrCodeReader(true);
              }}
            >
              <Image
                style={styles.qrcodeIcon}
                source={require("../assets/icons/007-qr-code-read.png")}
                name="ios-search"
                size={10}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Button
          label="Ok"
          action={handleSubmit}
          backgroundColor={colors.blue}
          textColor={colors.dark}
        />
        <View style={styles.space} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 20,
    width: "100%",
  },
  searchSection: {
    marginVertical: 15,
    paddingVertical: 20,
    flex: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    flex: 1,
    height: 40,
    alignItems: "flex-end",
    borderBottomWidth: 2,
  },
  qrcodeIcon: {
    height: 25,
    marginTop: 8,
    width: 25,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
  },
  space: {
    marginVertical: 15,
    height: 40,
  },
  textInputStyle: {
    flex: 9,
    height: 40,
    borderStyle: "solid",
    borderBottomWidth: 2,
    paddingHorizontal: 10
  },
  button: {},
});
