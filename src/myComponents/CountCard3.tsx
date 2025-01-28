import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface TCountCard3 {
  item: {
    count: number;
    title: string;
  };
}

const CountCard3 = ({ item }: TCountCard3) => {
  // const {count,title}=item
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        height: 65,
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
        {item?.count}
      </Text>
      <Text style={{ fontSize: 15, fontWeight: "300" }}>{item?.title}</Text>
    </View>
  );
};

export default CountCard3;

const styles = StyleSheet.create({});
