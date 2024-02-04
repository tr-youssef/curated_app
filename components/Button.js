import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const Button = ({ name, icon, backgroundColor, borderColor }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          backgroundColor: backgroundColor,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          borderColor: borderColor,
        }}
      >
        <Icon name={icon} color="white" />
      </View>
      <Text style={{ fontSize: 10 }}>{name}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
