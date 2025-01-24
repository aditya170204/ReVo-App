import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileArea = () => {
  return (
    <View
      style={{
        width: "100%",

        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center",
            width: "15%",
          }}
        >
          <FontAwesome name={"user-circle-o"} size={35} />
        </View>
        <View style={{ width: "65%" }}>
          <Text style={{ fontWeight: "semibold", fontSize: 20 }}>Hi</Text>
          <Text style={{ fontWeight: "semibold", fontSize: 20 }}>
            JESHU YADAV
          </Text>
          <Text style={{ fontWeight: "semibold", fontSize: 10 }}>
            SuperAdmin
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <MaterialCommunityIcons name={"bell"} size={25} />
          <AntDesign name={"setting"} size={25} />
        </View>
      </View>
      <View>
        <Text>DASHBOARD</Text>
      </View>
      <View style={{ borderWidth: 1, borderColor: "#D0837F", width: "90%" }} />
    </View>
  );
};

export default ProfileArea;

const styles = StyleSheet.create({});
