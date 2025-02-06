import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PostUserName } from "../api/PostApi";
import { useQuery } from "react-query";

const EmployeeDetailCard = ({ title, value }) => {
  // "6762be500e895b4806b12d6d"
  const {
    data: userList,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => {
      return PostUserName();
    },
    queryKey: ["getUserList"],
  });

  return (
    <View style={{ flexDirection: "row", padding: 5, paddingLeft: 10 }}>
      <View style={{ width: "48%" }}>
        <Text style={{ fontWeight: "600", fontSize: 15 }}>{title}</Text>
      </View>
      <Text style={{ width: "4%", fontSize: 15 }}>:</Text>
      <View style={{ width: "48%" }}>
        <Text style={{ fontSize: 15 }}>{value ? value : "N/A"}</Text>
      </View>
    </View>
  );
};

export default EmployeeDetailCard;

const styles = StyleSheet.create({});
