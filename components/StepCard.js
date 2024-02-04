import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";

const StepCard = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.containerIcon}>
          <Icon name={task.icon} color={"#3F49A4"} size={24} type="ionicon" />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            STEP {task.number}: {task.title}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {task.subtitle}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <Icon
                name={"keyboard-arrow-up"}
                type="materialicons"
                color="#ffffff"
              />
            ) : (
              <Icon
                name={"keyboard-arrow-down"}
                type="materialicons"
                color="#ffffff"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {isOpen && (
        <View style={styles.actions}>
          {task.actions.map((action, index) => {
            return <Text key={index}>{action}</Text>;
          })}
        </View>
      )}
    </View>
  );
};

export default StepCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#EBECF7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 8, // Add borderRadius as needed
    marginTop: 8,
    flexDirection: "column",
  },
  containerIcon: {
    backgroundColor: "#F7F8FC",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTitle: {
    flexDirection: "column",
    width: 220,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#3F49A4",
  },
  button: {
    backgroundColor: "#FFCC4B",
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    marginTop: 16,
  },
});
