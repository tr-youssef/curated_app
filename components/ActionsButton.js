import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const ActionsButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.backgroundContainer}>
          <Icon
            // color={focused ? "#3F49A4" : "rgba(63, 73, 164, 0.4)"}
            color="#FFFFFF"
            name="checkbox-outline"
            type="ionicon"
          />
        </View>
      </View>
    </View>
  );
};

export default ActionsButton;

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: 72,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    marginBottom: 50,
  },
  innerContainer: {
    height: 62,
    width: 62,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3F49A4",
    elevation: 20,
  },
  backgroundContainer: {},
});
