import { View, Text } from "react-native";
import React from "react";

interface TCountCard {
  count: number;
  title: string;
}
const CountCard = ({ count = 0, title = "N/A" }: TCountCard) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#7C7C7C",
        height: 85,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "45%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
        }}
      >
        {count}
      </Text>
      <Text
        style={{
          textAlign: "center",
          // height: 45,
          fontSize: 15,
          fontWeight: "300",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CountCard;
