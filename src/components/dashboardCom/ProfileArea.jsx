import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ProfileArea = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",

        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            width: "15%",
          }}
          onPress={() => {
            navigation.navigate("ProfileDetails");
          }}
        >
          <FontAwesome name={"user-circle-o"} size={35} />
        </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Notification");
            }}
          >
            <MaterialCommunityIcons name={"bell"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <AntDesign name={"setting"} size={25} />
          </TouchableOpacity>
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
