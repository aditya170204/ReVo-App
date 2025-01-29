import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const EmployeeCard = ({ name, id, email, mobileNo }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#7C7C7C",
        marginTop: 20,
      }}
    >
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
              <Text style={{ fontWeight: "600" }}>Employee Name :</Text>
              <Text>{name}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600" }}>Email Address :</Text>
              <Text>{email}</Text>
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
              <Text style={{ fontWeight: "600" }}>Employee Id :</Text>
              <Text>{id}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600" }}>Mobile Number :</Text>
              <Text>{mobileNo}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderTopWidth: 1,
          borderColor: "#7C7C7C",
          // paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{
            // borderRightWidth: 1,
            width: "33.5%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
            marginVertical: 10,
          }}
        >
          <FontAwesome
            name={"exclamation-circle"}
            size={23}
            color={"#7C7C7C"}
          />
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#7C7C7C" }}>
            PENDING
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderColor: "#7C7C7C",
            width: "33.3%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <FontAwesome name={"check-circle"} size={23} color={"#7C7C7C"} />

          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#7C7C7C" }}>
            APPROVED
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "33.4%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <FontAwesome name={"times-circle-o"} size={23} color={"#7C7C7C"} />

          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#7C7C7C" }}>
            REJECTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({});
