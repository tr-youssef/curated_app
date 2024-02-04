import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import StepCard from "./StepCard.js";

const ActionPlan = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Action Plan</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <StepCard task={item} />}
      />
    </View>
  );
};

export default ActionPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3F49A4",
  },
});
