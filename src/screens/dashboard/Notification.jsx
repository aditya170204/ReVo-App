import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NotiCard from "../../myComponents/NotiCard";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const toggled = false;
  //   const toggleSwitch = () => setToggled((previousState) => !previousState);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ padding: 20, marginTop: 25 }}>
        <View
          style={{
            width: "60%",
            // backgroundColor: "pink",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              //   backgroundColor: "red",
              width: "23%",
              padding: 10,
              margin: 5,
            }}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome name={"chevron-left"} size={30} />
          </TouchableOpacity>

          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 12 }}>
            Notification
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            width: "100%",
            backgroundColor: "#898989",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: 30,
          }}
        >
          <TouchableOpacity
            //   onPress={() => {
            //     toggled = true;
            //   }}
            style={{
              // backgroundColor: toggled ? "pink" : "grey",
              backgroundColor: "#D0837F",

              padding: 10,
              width: "50%",
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity
            //   onPress={() => {
            //     toggled = true;
            //   }}
            style={{
              backgroundColor: toggled ? "#D0837F" : "#898989",
              padding: 10,
              width: "50%",
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>New</Text>
          </TouchableOpacity>
        </View>
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
      </View>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
