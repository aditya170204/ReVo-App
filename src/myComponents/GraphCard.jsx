import { View, Text } from "react-native";
import React from "react";
import GraphTitle from "./GraphTitle";

const GraphCard = ({
  sectionTitle,
  graphName,
  arrtitles,
  border,
  graphSize,
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: 300,
        borderWidth: border ? 1 : 0,
        borderRadius: 20,
        alignItems: "center",
        borderColor: "#7C7C7C",
      }}
    >
      <Text
        style={{
          marginTop: 10,
          fontSize: 25,
          color: "#2B2B2B",
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {sectionTitle}
      </Text>
      <View style={{ width: "60%", borderWidth: 1, borderColor: "#5D5D5D" }} />
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10000,
            backgroundColor: "blue",
            height: graphSize == "normal" ? "94%" : "102%",
            width: graphSize == "normal" ? "44%" : "50%",
          }}
        >
          <Text style={{ color: "white" }}>{graphName}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            height: "75%",
            width: "45%",
            alignItems: "flex-start",
          }}
        >
          {arrtitles?.map((el, i) => (
            <GraphTitle key={i} color={el?.color} title={el?.title} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default GraphCard;
