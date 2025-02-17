import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LeaveCard = ({
  EmployeeName,
  leaveFor,
  startDate,
  endDate,
  reasonForLeave,
  onPress,
}) => {
  const navigation = useNavigation();

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
            onPress={() => navigation.navigate("EmployeeDetails", { id })}
            key={"a"}
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
          </View>
          <View style={{ flexDirection: "row" }}>
            <View key={"3"} style={{ width: "33%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Leave For :
              </Text>
              <Text style={{ fontSize: 15 }}>{leaveFor}</Text>
            </View>
            <View key={"f"} style={{ width: "33%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Start Date :
              </Text>
              <Text style={{ fontSize: 15 }}>{startDate}</Text>
            </View>
            <View key={"g"} style={{ width: "33%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                End Date :
              </Text>
              <Text style={{ fontSize: 15 }}>{endDate}</Text>
            </View>
          </View>
          <View
            key={"h"}
            style={
              {
                // backgroundColor: "orange",
                //   flexDirection: "row",
                //   justifyContent: "space-between",
              }
            }
          >
            <View key={"i"} style={{ width: "90%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Reason For Leave :
              </Text>
              <Text style={{ fontSize: 15 }}>{reasonForLeave}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeaveCard;

const styles = StyleSheet.create({});
