import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CountCard from "./CountCard";

const CountCard2 = ({ arrData }) => {
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 0.5,
        borderRadius: 20,
        borderColor: "#7C7C7C",
        alignItems: "center",
        rowGap: 20,
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {arrData?.map((el, i) => (
          <CountCard key={i} count={el?.a} title={el?.b} />
        ))}
        {/* <CountCard count={20} title="asd fdf " />

        <CountCard count={30} title="asfdsf" />
        <CountCard count={40} title="sdfsfsd" />
        <CountCard count={50} title="dfg sdf sdf " /> */}
      </View>
    </View>
  );
};

export default CountCard2;

const styles = StyleSheet.create({});
