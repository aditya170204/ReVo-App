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
        // width: "100%",
        height: 250,
        borderWidth: border ? 0.5 : 0,
        borderRadius: 20,
        alignItems: "center",
        borderColor: "#7C7C7C",
      }}
    >
      <Text
        style={{
          paddingVertical: 5,
          fontSize: 25,
          color: "#2B2B2B",
          fontWeight: "bold",
          marginBottom: 10,
          borderBottomWidth: 1,
          borderColor: "#7C7C7C",
        }}
      >
        {sectionTitle}
      </Text>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            backgroundColor: "blue",
            height: graphSize == "normal" ? 125 : 145,
            width: graphSize == "normal" ? 125 : 145,
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
