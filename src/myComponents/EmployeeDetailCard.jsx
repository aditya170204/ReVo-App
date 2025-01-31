import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmployeeDetailCard = ({ title, value }) => {
  return (
    <View style={{ flexDirection: "row", padding: 5, paddingLeft: 10 }}>
      <View style={{ width: "48%" }}>
        <Text style={{ fontWeight: "600", fontSize: 15 }}>{title}</Text>
      </View>
      <Text style={{ width: "4%", fontSize: 15 }}>:</Text>
      <View style={{ width: "48%" }}>
        <Text style={{ fontSize: 15 }}>{value}</Text>
      </View>
    </View>
  );
};

export default EmployeeDetailCard;

const styles = StyleSheet.create({});
