import {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 170 }}
      >
        <EmployeeCard
          name={
            "adityaRajadity aRajadityaRa jadit yaRaj  adaRa jadit kkkkkkkkkkkkkkkkk kkkkkk k k k k k k kk k k  k k k k k  k k k k sk k kks skks ks ksks  yaRajdityaRajadityaRajadityaRaj adityaRajadityaRajadityaRajad  itya Raj adityaRajadityaRaj"
          }
          email={"aditya@gmail000000000000000000"}
          id={"adi17/2009999 999999 999994"}
          mobileNo={"929799999999999999999"}
        />
        <EmployeeCard
          name={"Aditya0000000000000000"}
          email={
            "aditya@gmail0 00000000 00000 pppppppp pppppp pppppppppppppp pppppp0000"
          }
          id={"adi17/2004"}
          mobileNo={"929799...."}
        />
        <EmployeeCard
          name={"Aditya00000000000000000000000"}
          email={"aditya@gmail0000000ooo00000000000"}
          id={
            "adi17/2004......... gggg yuhjjjfrytugyh frytgu yrft fty ft  ftgut fgubh gyuhb"
          }
          mobileNo={"929799...."}
        />
        <EmployeeCard
          name={"Aditya00000000000000000000000"}
          email={"aditya@gmail000000000000000000"}
          id={"adi17/2004"}
          mobileNo={"929799...t ugybh ygibhj yihnj gyihbnj gyibh."}
        />
        <EmployeeCard
          name={"Aditya00000000000000000000000"}
          email={"aditya@gmail000000000000000000"}
          id={"adi17/20ooooooooooooooooooooo04"}
          mobileNo={"929799...."}
        />
        <EmployeeCard
          name={"Aditya00000000000000000000000"}
          email={"aditya@gmail 00 0000000000000"}
          id={"adi17/2004"}
          mobileNo={"929ooooooooooooooooooo799...."}
        />
        <EmployeeCard
          name={"Aditya00000000000000000000000"}
          email={"aditya@gmail000000000000000000"}
          id={"adi17/2004"}
          mobileNo={"929799...."}
        />
      </ScrollView>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
