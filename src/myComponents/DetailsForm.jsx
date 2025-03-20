import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
// import { Formik } from "formik";

const DetailsForm = ({ title, onChangeText, onBlur, value }) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={`Enter ${title}`}
        style={{
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: "#7C7C7C",
          marginVertical: 9,
          //   paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      ></TextInput>
    </View>
  );
};

export default DetailsForm;

const styles = StyleSheet.create({});
