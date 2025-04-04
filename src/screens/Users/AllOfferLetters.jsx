import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import OfferLetterCard from "../../myComponents/OfferLetterCard";
import { UserListing } from "../../api/fetchApi";
import { useQuery } from "react-query";

const AllOfferLetters = () => {
  const navigation = useNavigation();
  const { data: UserListing } = useQuery({
    queryFn: () => {
      return UserListing;
    },
    queryKey: ["UserListing"],
  });
  console.log("UserListing", UserListing);
  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
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
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 19,
              textAlign: "left",
              // backgroundColor: "red",
            }}
          >
            All Offer Letters
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateOfferLetter");
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
            <Text style={{ color: "white", fontWeight: "600" }}>
              Create Offer Letter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="Search"
        style={{
          width: "98%",
          borderWidth: 0.5,
          borderColor: "#7C7C7C",
          borderRadius: 20,
          marginTop: 20,
          paddingHorizontal: 15,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 110 }}
      >
        <OfferLetterCard
          name={"Aditya "}
          createdBy={"Jeshu Yadav"}
          dateOfCreation={"29 / 02 / 2025"}
          status={"Viewed Signed"}
        />
        <OfferLetterCard
          name={"Aditya"}
          createdBy={"Jeshu Yadav"}
          dateOfCreation={"29 / 02 / 2025"}
          status={"Viewed Signed"}
        />
        <OfferLetterCard
          name={"Aditya"}
          createdBy={"Jeshu Yadav"}
          dateOfCreation={"29 / 02 / 2025"}
          status={"Viewed Signed"}
        />
        <OfferLetterCard
          name={"Aditya"}
          createdBy={"Jeshu Yadav"}
          dateOfCreation={"29 / 02 / 2025"}
          status={"Viewed Signed"}
        />
        <OfferLetterCard
          name={"Aditya"}
          createdBy={"Jeshu Yadav"}
          dateOfCreation={"29 / 02 / 2025"}
          status={"Viewed Signed"}
        />
        <OfferLetterCard
          name={"Aditya"}
          createdBy={"Jeshu Yadav"}
          dateOfCreation={"29 / 02 / 2025"}
          status={"Viewed Signed"}
        />
        <OfferLetterCard
          name={"Aditya"}
          createdBy={"Jeshu Yadav"}
          dateOfCreation={"29 / 02 / 2025"}
          status={"Viewed Signed"}
        />
      </ScrollView>
    </View>
  );
};

export default AllOfferLetters;

const styles = StyleSheet.create({});
