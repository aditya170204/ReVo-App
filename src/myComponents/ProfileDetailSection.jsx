import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileDetailSection = ({ sectionTitle }) => {
  return (
    <View>
      <Text
        style={{
          margin: 10,
          marginTop: 20,
          // padding: 8,
          fontWeight: "600",
          fontSize: 18,
        }}
      >
        {sectionTitle}
      </Text>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#AD6F6C",
          width: "97%",
          marginLeft: 10,
          marginBottom: 15,
        }}
      />
    </View>
  );
};

export default ProfileDetailSection;

const styles = StyleSheet.create({});
