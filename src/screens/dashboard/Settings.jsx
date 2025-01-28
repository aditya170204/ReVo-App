import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <View style={{ width: "50%", flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            // backgroundColor: "red",
            width: "23%",
            padding: 10,
            margin: 5,
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name={"chevron-left"} size={30} />
        </TouchableOpacity>

        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 12 }}>
          Settings
        </Text>
      </View>
      <Text>ok let set your trip</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
