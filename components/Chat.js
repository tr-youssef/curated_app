import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    // { type: "ai", text: "test test test" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = { type: "me", text: inputText };
    setMessages([...messages, newMessage]);
    setInputText("");
  };
  console.log("messages.length", messages.length);
  return (
    <View style={styles.container}>
      {messages.length !== 0 ? (
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={
                item.type === "me"
                  ? styles.meLineMessage
                  : styles.otherLineMessage
              }
            >
              {item.type === "ai" && (
                <Image source={require("../assets/ai.png")} />
              )}
              <View
                style={
                  item.type === "me" ? styles.meMessage : styles.otherMessage
                }
              >
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyChat}>
          <Image source={require("../assets/logo.png")} />
          <Text style={styles.textEmptyChat}>
            Meet Botsie, your AI bot that will help provide all the information
            you need to build and customize your action plan.
          </Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tell me, what do you need?"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "flex-end",
    height: 341,
    shadowColor: "#EBECF7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
    backgroundColor: "white",
    padding: 16, // Add padding as needed
    borderRadius: 8, // Add borderRadius as needed
  },
  emptyChat: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textEmptyChat: {
    width: 222,
    marginTop: 29,
  },
  meLineMessage: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
  },
  otherLineMessage: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
  },
  meMessage: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    maxWidth: "70%",
    padding: 8,
    marginVertical: 4,
  },
  otherMessage: {
    backgroundColor: "#3F49A4",
    borderRadius: 8,
    maxWidth: "70%",
    padding: 8,
    marginVertical: 4,
    marginLeft: 8,
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#DEE0F3",
    borderRadius: 22.5,
    paddingHorizontal: 10,
    padding: 4,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    padding: 8,
  },
  button: {
    height: 39,
    width: 39,
    backgroundColor: "#3F49A4",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
