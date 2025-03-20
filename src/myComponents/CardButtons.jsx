import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { buttonIconSvg } from "../assets/svg/svg";

const CardButtons = ({
  buttonIcon: ButtonIcon,
  buttonTitle,
  onPress,
  status,
}) => {
  return (
    <View
      style={{
        // flex: 1,
        width:
          status === "new"
            ? "33.33%"
            : status === "draft"
            ? "100%"
            : status === "pending"
            ? "50%"
            : status === "approved"
            ? "50%"
            : status === "deactive"
            ? "100%"
            : null,
        flexDirection: "row",
        justifyContent: "center",
        // borderTopWidth: 0.5,
        borderColor: "#7C7C7C",

        // backgroundColor: "orange",
      }}
    >
      <TouchableOpacity
        onPress={() => console.log({ buttonTitle })}
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 7,
          padding: 8,
          borderRightColor: "#9D9D9D",
          borderRightWidth:
            buttonTitle === "PENDING"
              ? 0.5
              : buttonTitle === "APPROVED"
              ? 0.5
              : null,
          borderLeftColor: "#9D9D9D",
          borderLeftWidth: buttonTitle === "DEACTIVATE" ? 0.5 : null,
          // backgroundColor: "yellow",
        }}
      >
        {ButtonIcon && <ButtonIcon />}
        <Text style={{ fontSize: 15, fontWeight: "600", color: "#9D9D9D" }}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardButtons;
