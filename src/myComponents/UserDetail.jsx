import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserDetail = ({ title, value }) => {
  return (
    <View style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 10 }}>
      <View style={{ width: "40%", marginLeft: 10 }}>
        <Text style={{ fontWeight: "600", fontSize: 13 }}>{title}</Text>
      </View>
      <View style={{ width: "7%" }}>
        <Text>:</Text>
      </View>
      <View style={{ width: "40%" }}>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({});
