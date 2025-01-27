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
            <FontAwesome name={"chevron-left"} size={25} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 11 }}>
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
              backgroundColor: "white",
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
          >
            <FontAwesome name={"camera"} size={27} color={"#9A4D49"} />
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
