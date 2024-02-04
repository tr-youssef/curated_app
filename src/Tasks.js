import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Chat from "../components/Chat.js";
import ActionPlan from "../components/ActionPlan.js";

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      number: 1,
      title: "STEP 1: Permits and Paperwork",
      icon: "document-text-outline",
      subtitle:
        "Important documents and permits.",
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
      title: "STEP 2: Housing",
      icon: "home-outline",
      subtitle: "Start researching housing options online.",
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
      title: "STEP 3: Transportation",
      icon: "car-outline",
      subtitle: "Drivers license, insurance and public tran...",
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
      title: "STEP 4: Employment",
      icon: "person-outline",
      subtitle: "Find that perfect job in your profession.",
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
      title: "STEP 5: Banking & Finance",
      icon: "card-outline",
      subtitle: "Get a bank account, credit card or loan.",
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
      <Chat />
      <ActionPlan tasks={tasks} />
    </SafeAreaView>
  );
}

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});
