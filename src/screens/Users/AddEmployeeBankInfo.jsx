import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import DetailsForm from "../../myComponents/DetailsForm";

const AddEmployeeBankInfo = () => {
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
            Add Employee
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"BANK INFORMATION"} />
        <DetailsForm title={"Bank Name"} />
        <DetailsForm title={"Name Of Account Holder"} />
        <DetailsForm title={"Sort Code"} />
        <DetailsForm title={"Account Number"} />
        <DetailsForm title={"Bank Statement"} />

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#D0837F",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate("CreateOfferLetter");
            // }}
            style={{
              backgroundColor: "#9A4D49",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>
              Save and Next
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UploadOfferLetter");
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
            <Text style={{ color: "white", fontWeight: "600" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddEmployeeBankInfo;

const styles = StyleSheet.create({});
