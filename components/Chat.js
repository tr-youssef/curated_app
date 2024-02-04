import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Animated,
  Easing,
} from "react-native";

import React, { useState } from "react";

const Chat = ({ isFullHeight, toggleWidth }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [rotation] = useState(new Animated.Value(0));

  const startRotationAnimation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };

  const stopRotationAnimation = () => {
    Animated.timing(rotation).stop();
    rotation.setValue(0);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    setLoading(true);

    toggleWidth();
    console.log("isFullHeight", isFullHeight);
    const newMessage = { type: "me", text: inputText };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");

    startRotationAnimation();

    try {
      const answer = await fetch(
        "https://81a4-199-185-133-7.ngrok-free.app/chatbot",
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ question: inputText }),
        }
      );
      const finalanswer = await answer.json();
      const newOtherMessage = { type: "other", text: finalanswer.answer };
      setMessages((prevMessages) => [...prevMessages, newOtherMessage]);
    } catch (error) {
      // Handle fetch error if needed
      console.error("Error fetching data:", error);
    } finally {
      stopRotationAnimation();
      setLoading(false);
    }
  };

  return (
    <View style={isFullHeight ? styles.fullScreenContainer : styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity style={styles.buttonClose} onPress={toggleWidth}>
          <Text style={{ color: "white" }}>X</Text>
        </TouchableOpacity>
      </View>
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleSendMessage}
          disabled={loading}
        >
          <Animated.Text
            style={[
              styles.buttonText,
              {
                transform: [
                  {
                    rotate: rotation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
              },
            ]}
          >
            GO
          </Animated.Text>
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
  fullScreenContainer: {
    padding: 16,
    justifyContent: "flex-end",
    height: "100%",
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
    padding: 8,
    marginVertical: 4,
  },
  otherMessage: {
    backgroundColor: "#3F49A4",
    borderRadius: 8,
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
  buttonClose: {
    height: 24,
    width: 24,
    backgroundColor: "#FFCC4B",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
