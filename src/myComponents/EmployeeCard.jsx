import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmployeeCard = () => {
  return (
    <View style={{ borderWidth: 1, borderRadius: 10 }}>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          // backgroundColor: "yellow",
        }}
      >
        <View
          key={"a"}
          style={{
            width: "10%",
            height: "40%",
            backgroundColor: "#E9A80A",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>E</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            //   backgroundColor: "pink",
            justifyContent: "center",
            gap: 50,
            marginLeft: 10,
            margin: 15,
          }}
        >
          <View
            key={"c"}
            style={{
              // flexDirection: "row",
              justifyContent: "space-around",
              gap: 20,

              // backgroundColor: "red",
            }}
          >
            <View>
              <Text>Employee Name :</Text>
              <Text>aditya</Text>
            </View>
            <View>
              <Text>Employee Id :</Text>
              <Text>aditya</Text>
            </View>
          </View>
          <View
            key={"d"}
            style={{
              // flexDirection: "row",
              justifyContent: "space-around",
              gap: 20,

              // backgroundColor: "green",
            }}
          >
            <View>
              <Text>Email Address :</Text>
              <Text>aditya</Text>
            </View>
            <View>
              <Text>Mobile Number :</Text>
              <Text>aditya</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            borderRightWidth: 1,
            width: "33.5%",
            textAlign: "center",
          }}
        >
          <Text>aadi</Text>
        </View>
        <View
          style={{
            borderRightWidth: 1,
            width: "33.3%",
            textAlign: "center",
          }}
        >
          <Text>aadi</Text>
        </View>
        <View
          style={{
            width: "33.4%",
            textAlign: "center",
          }}
        >
          <Text>aadi</Text>
        </View>
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({});
