import { View, Text } from "react-native";
import React from "react";

const GraphTitle = ({ color, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View
        style={{
          backgroundColor: color,
          height: 10,
          width: 10,
          borderRadius: 200,
          alignItems: "flex-start",
          marginLeft: 5,
        }}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default GraphTitle;
