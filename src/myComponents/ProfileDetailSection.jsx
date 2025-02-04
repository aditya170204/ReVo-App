import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileDetailSection = ({ sectionTitle }) => {
  return (
    <View
      style={{
        borderBottomWidth: 0.6,
        borderColor: "#AD6F6C",
        marginBottom: 15,
      }}
    >
      <Text
        style={{
          marginTop: 20,
          marginBottom: 5,
          // padding: 5,
          fontWeight: "600",
          fontSize: 18,
        }}
      >
        {sectionTitle}
      </Text>
      {/* <View
        style={{
          borderWidth: 0.6,
          borderColor: "#AD6F6C",
          width: "97%",
          // marginLeft: ,
          marginBottom: 15,
        }}
      /> */}
    </View>
  );
};

export default ProfileDetailSection;

const styles = StyleSheet.create({});
