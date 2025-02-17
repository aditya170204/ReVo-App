import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AttendanceCard = ({ EmployeeName, Email, mobileNo, Role, onPress }) => {
  const navigation = useNavigation();
  console.log("yoyo yoyo");

  return (
    <View
      style={{
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#7C7C7C",
        // backgroundColor: "red",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          // backgroundColor: "yellow",
          gap: 10,
        }}
      >
        <View style={{ width: "13%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EmployeeDetails")}
            // key={"a"}
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#E9A80A",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>E</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onPress}
          key={"b"}
          style={{
            // backgroundColor: "green",
            width: "84.5%",
            rowGap: 15,
            padding: 10,
          }}
        >
          <View
            key={"c"}
            style={{
              // backgroundColor: "pink",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View key={"d"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Employe Name :
              </Text>
              <Text style={{ fontSize: 15 }}>{EmployeeName}</Text>
            </View>
            <View key={"e"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Email Address :
              </Text>
              <Text style={{ fontSize: 15 }}>{Email}</Text>
            </View>
          </View>
          <View
            key={"f"}
            style={{
              // backgroundColor: "orange",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View key={"g"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Mobile Number :
              </Text>
              <Text style={{ fontSize: 15 }}>{mobileNo}</Text>
            </View>
            <View key={"h"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>Role :</Text>
              <Text style={{ fontSize: 15 }}>{Role}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AttendanceCard;

const styles = StyleSheet.create({});
