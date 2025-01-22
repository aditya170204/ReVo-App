import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text>Profile area</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.contentContainer}>
        <View style={styles.employeStatus}>
          <Text>employe Status</Text>
        </View>
        <View style={styles.employeScore}>
          <Text>employeScore</Text>
        </View>
        <View style={styles.workingDays}>
          <Text>workingDays</Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  profileContainer: {
    width: "90%",
    height: "15%",
    margin: "3%",
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#5D5D5D",
  },
  contentContainer: {
    height: "100%",
    width: "90%",
    marginTop: 10,
  },
  employeStatus: {
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#5D5D5D",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  employeScore: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#5D5D5D",
    borderWidth: 1,
    borderRadius: 10,
  },
  workingDays: {
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#5D5D5D",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
