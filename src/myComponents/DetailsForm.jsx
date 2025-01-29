import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const DetailsForm = ({ title, detail }) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <TextInput
        placeholder={"Enter " + title}
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#7C7C7C",
          marginVertical: 9,
          //   paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        {detail}
      </TextInput>
    </View>
  );
};

export default DetailsForm;

const styles = StyleSheet.create({});
