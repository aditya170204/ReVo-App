import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import InfoCard from "../../myComponents/InfoCard";
import { useNavigation } from "@react-navigation/native";

const ProfileDetails = () => {
  console.log("ProfileDetails screen rendered");
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{ marginTop: 30, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            justifyContent: "space-between",
            alignItems: "centers",
          }}
        >
          <TouchableOpacity
            style={{ padding: 15 }}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome name={"chevron-left"} size={30} />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 11 }}>
            Profile Details
          </Text>
        </View>
        <View style={{ width: "30%", margin: "5%" }}>
          <FontAwesome name={"user-circle-o"} size={95} />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              bottom: 30,
              start: 60,
              backgroundColor: "#D0837F",
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
          >
            <FontAwesome name={"camera"} size={24} color={"white"} />
          </View>
        </View>
        <View>
          <InfoCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({});
