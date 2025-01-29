import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import DetailsForm from "../../myComponents/DetailsForm";
import { SelectList } from "react-native-dropdown-select-list";

const CreateOfferLetter = () => {
  const navigation = useNavigation();
  const data = [
    { key: "Frontend Developer", value: "Frontend Developer" },
    { key: "Backend Developer", value: "Backend Developer" },
    { key: "FullStack Developer", value: "FullStack Developer" },
    { key: "Application Developer", value: "Application Developer" },
    { key: "Automation/Testing", value: "Automation/Testing" },
    { key: "UI/UX/Advertising", value: "UI/UX/Advertising" },
  ];
  const [selected, setSelected] = useState("");

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
            Create Offer Letter
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"OFFER DETAILS"} />
        <DetailsForm title={"Candidate Name"} />
        <DetailsForm title={"Email Address"} />
        <DetailsForm title={"Joining Date"} />
        {/* <DetailsForm title={"Role"} /> */}
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 9 }}>
            Role
          </Text>
          <SelectList
            style={{
              marginTop: 9,
            }}
            placeholder="Select "
            setSelected={setSelected}
            data={data}
          />
        </View>

        <DetailsForm title={"Department"} />
        <DetailsForm title={"Offer Package"} />
        <DetailsForm title={"Offer Package"} />
        <DetailsForm title={"Offer Package"} />
        <DetailsForm title={"Offer Package"} />

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
            Create DocUsign
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateOfferLetter;

const styles = StyleSheet.create({});
