import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Chat from "../components/Chat.js";
import ActionPlan from "../components/ActionPlan.js";

function Tasks() {
  const [isFullHeight, setIsFullHeightetIsFullHeight] = useState(false);
  const toggleWidth = () => {
    setIsFullHeightetIsFullHeight((prev) => !prev);
  };
  const [tasks, setTasks] = useState([
    {
      number: 1,
      title: "Permits and Paperwork",
      icon: "card",
      subtitle:
        "Permits are an important part of gaining Permanent Residence Status. Ensure you look over each document to meet ",
      actions: [
        "Permanent Resident Card (PR Card)",
        "Record of Landing (IMM 1000) or Confirmation of Permanent",
        "Residence (IMM 5292 or IMM 5688)",
        "Travel History and Supporting Documents",
        "Employment Records and Pay Stubs",
        "Canadian Tax Returns and Notices of Assessment",
        "Driver’s License",
        "Proof of Social Integration",
        "Language Proficiency Test Results",
      ],
    },
    {
      number: 2,
      title: "Housing",
      icon: "home",
      subtitle: "Start researching housing options online",
      actions: [
        "Permanent Resident Card (PR Card)",
        "Record of Landing (IMM 1000) or Confirmation of Permanent",
        "Residence (IMM 5292 or IMM 5688)",
        "Travel History and Supporting Documents",
        "Employment Records and Pay Stubs",
        "Canadian Tax Returns and Notices of Assessment",
        "Driver’s License",
        "Proof of Social Integration",
        "Language Proficiency Test Results",
      ],
    },
    {
      number: 3,
      title: "Housing",
      icon: "home",
      subtitle: "Start researching housing options online",
      actions: [
        "Permanent Resident Card (PR Card)",
        "Record of Landing (IMM 1000) or Confirmation of Permanent",
        "Residence (IMM 5292 or IMM 5688)",
        "Travel History and Supporting Documents",
        "Employment Records and Pay Stubs",
        "Canadian Tax Returns and Notices of Assessment",
        "Driver’s License",
        "Proof of Social Integration",
        "Language Proficiency Test Results",
      ],
    },
    {
      number: 4,
      title: "Housing",
      icon: "home",
      subtitle: "Start researching housing options online",
      actions: [
        "Permanent Resident Card (PR Card)",
        "Record of Landing (IMM 1000) or Confirmation of Permanent",
        "Residence (IMM 5292 or IMM 5688)",
        "Travel History and Supporting Documents",
        "Employment Records and Pay Stubs",
        "Canadian Tax Returns and Notices of Assessment",
        "Driver’s License",
        "Proof of Social Integration",
        "Language Proficiency Test Results",
      ],
    },
    {
      number: 5,
      title: "Housing",
      icon: "home",
      subtitle: "Start researching housing options online",
      actions: [
        "Permanent Resident Card (PR Card)",
        "Record of Landing (IMM 1000) or Confirmation of Permanent",
        "Residence (IMM 5292 or IMM 5688)",
        "Travel History and Supporting Documents",
        "Employment Records and Pay Stubs",
        "Canadian Tax Returns and Notices of Assessment",
        "Driver’s License",
        "Proof of Social Integration",
        "Language Proficiency Test Results",
      ],
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Chat isFullHeight={isFullHeight} toggleWidth={toggleWidth} />
        <ActionPlan tasks={tasks} />
      </View>
    </SafeAreaView>
  );
}

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },

  wrapper: {
    flex: 1,
  },
});
