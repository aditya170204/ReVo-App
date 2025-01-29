import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const OfferLetterCard = ({ name, dateOfCreation, createdBy, status }) => {
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
          //   key={"a"}
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
            // key={"c"}
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
              <Text style={{ fontWeight: "600" }}>Created By :</Text>
              <Text>{createdBy}</Text>
            </View>
          </View>
          <View
            // key={"d"}
            style={{
              // flexDirection: "row",
              justifyContent: "space-around",
              gap: 20,

              // backgroundColor: "green",
            }}
          >
            <View>
              <Text style={{ fontWeight: "600" }}>Date Of Creation :</Text>
              <Text>{dateOfCreation}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600" }}>Status :</Text>
              <Text>{status}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderTopWidth: 1,
          borderColor: "#7C7C7C",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          paddingVertical: 10,
          //   marginVertical: 10,

          gap: 10,
        }}
      >
        <FontAwesome name={"trash-o"} size={23} color={"#7C7C7C"} />

        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#7C7C7C" }}>
          DELETE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OfferLetterCard;

const styles = StyleSheet.create({});
