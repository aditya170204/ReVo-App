import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NotiCard = () => {
  function formatDate() {
    const now = new Date(); // Get the current date and time

    // Get individual components of the date
    const day = now.getDate().toString().padStart(2, "0"); // Get day and pad with leading zero if needed
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Get month (0-based, so add 1) and pad with leading zero if needed
    const year = now.getFullYear(); // Get full year
    const hours = now.getHours(); // Get hours (24-hour format)
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Get minutes and pad with leading zero if needed

    // Determine AM/PM and convert hours to 12-hour format
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12; // Convert to 12-hour format, handle midnight case

    // Format the date as "DD/MM/YYYY | h:mm AM/PM"
    const formattedDate = `${day}/${month}/${year} | ${hours12}:${minutes} ${period}`;
    return formattedDate;
  }
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 25,
        flexDirection: "row",
        padding: 10,
      }}
    >
      <View style={{ width: "10%" }}>
        <View
          style={{
            borderWidth: 1,
            height: 15,
            width: 15,
            margin: 10,
            borderRadius: 4,
          }}
        />
      </View>
      <View style={{ width: "53%" }}>
        <Text style={{ fontWeight: "600" }}>New User Added</Text>
        <Text>A new User was Added by HR_01.</Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text>{formatDate()}</Text>
      </View>
    </View>
  );
};

export default NotiCard;

const styles = StyleSheet.create({});
