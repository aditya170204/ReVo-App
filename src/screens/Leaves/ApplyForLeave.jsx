import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DetailsForm from "../../myComponents/DetailsForm";
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import { useNavigation } from "@react-navigation/native";

const ApplyForLeave = () => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 20, marginTop: 25, marginBottom: 50 }}>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TouchableOpacity
          style={{
            //   backgroundColor: "yellow",
            width: "10%",
            padding: 3,

            marginTop: 18,
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name={"chevron-left"} size={30} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 19,

              // backgroundColor: "red",
            }}
          >
            Apply For Leave
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"PERSONAL INFORMATION"} />
        <DetailsForm title={"Name"} />
        <DetailsForm title={"Role"} />
        <DetailsForm title={"Phone Number"} />
        <ProfileDetailSection sectionTitle={"LEAVE INFORMATION"} />
        <DetailsForm title={"Reason For Leave"} />
        <DetailsForm title={"Select Total Days Of Leave"} />
        <DetailsForm title={"Select Leave Type"} />
        <DetailsForm title={"Start Date"} />
        <DetailsForm title={"End Date"} />
        <DetailsForm title={"Supported Document"} />

        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#9A4D49",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ApplyForLeave;

const styles = StyleSheet.create({});
