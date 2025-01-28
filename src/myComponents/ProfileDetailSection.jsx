import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileDetailSection = ({ sectionTitle }) => {
  return (
    <View>
      <Text
        style={{
          margin: 10,
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {sectionTitle}
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#D0837F",
          width: "94%",
          marginLeft: 10,
          marginBottom: 15,
        }}
      />
    </View>
  );
};

export default ProfileDetailSection;

const styles = StyleSheet.create({});
