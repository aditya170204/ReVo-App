import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SelectList } from "react-native-dropdown-select-list";
import EmployeeCard from "../myComponents/EmployeeCard";
import { useNavigation } from "@react-navigation/native";
import Dashboard from "./Dashboard";
import { getUserList, UserListingData } from "../api/fetchApi";
import { useQuery } from "react-query";

const Users = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const data = [
    { key: "New", value: "New" },
    { key: "Drafts", value: "Drafts" },
    { key: "Pending", value: "Pending" },
    { key: "Approved", value: "Approved" },
    { key: "Rejected", value: "Rejected" },
    { key: "Deactivate", value: "Deactivate" },
  ];

  const {
    data: getUserDetailsById,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => {
      return UserListingData({ getUserDetailsById });
    },
    queryKey: ["getUserDetailsById", "getUserDetailsById"],
  });
  console.log("getUserDetailsById", getUserDetailsById?.data);

  //

  //

  return (
    // <ScrollView>
    <View style={{ padding: 20, marginTop: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 12 }}>
          All Employees
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AllOfferLetters");
          }}
          style={{
            backgroundColor: "#9A4D49",
            justifyContent: "center",
            alignItems: "center",
            // width: 110,
            // height: 50,
            padding: 10,
            borderRadius: 12,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            Offer Letter
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="Search"
          style={{
            width: "80%",
            borderWidth: 0.5,
            borderRadius: 40,
            borderColor: "#7C7C7C",
            paddingHorizontal: 15,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddEmployee");
          }}
          style={{
            backgroundColor: "#D0837F",
            justifyContent: "center",
            alignItems: "center",
            width: "15%",
            borderRadius: 10,
          }}
        >
          <MaterialIcons color={"white"} name={"person-add"} size={25} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <SelectList
          boxStyles={{ borderWidth: 0.5 }}
          // dropdownShown={true}
          // arrowicon={true}
          // closeicon={true}
          // defaultOption={"pending"}
          // ref={}
          dropdownStyles={{
            borderWidth: 0.5,
          }}
          setSelected={setSelected}
          data={data}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 170 }}
        data={getUserDetailsById?.data}
        renderItem={({ item }) => {
          console.log("first");
          return (
            <EmployeeCard
              id={item?._id}
              email={item?.email}
              mobileNo={item?.mobile}
              name={item?.name}
              role={item?.role}
            />
          );
        }}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
