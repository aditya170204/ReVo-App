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

const Users = () => {
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
    <ScrollView>
      <View style={{ padding: 20, marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 12 }}>
            All Employees
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#9A4D49",
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
              height: "55%",
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
          }}
        >
          <TextInput
            placeholder="Search"
            style={{ width: "80%", borderWidth: 1, borderRadius: 40 }}
          />
          <TouchableOpacity
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
          <SelectList setSelected={setSelected} data={data} />
        </View>
        <View style={{ marginTop: 20 }}>
          <EmployeeCard />
        </View>
        <View style={{ marginTop: 20 }}>
          <EmployeeCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({});
