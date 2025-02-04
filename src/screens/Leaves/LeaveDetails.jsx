import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import EmployeeDetailCard from "../../myComponents/EmployeeDetailCard";

const LeaveDetails = () => {
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
            Leave Details
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"EMPLOYEE INFORMATION"} />
        <EmployeeDetailCard
          title={"Employee Name"}
          value={"Aditya  eihrj hrui hnrffu njo fimo iomsm"}
        />
        <EmployeeDetailCard
          title={"Role"}
          value={"Aditya u ernfueri9t53834eru3048 rji43 09u 0ri fjir j rioj fi"}
        />
        <EmployeeDetailCard
          title={"Mobile Number"}
          value={"Aditya  hurf fn oisllsemk."}
        />

        <ProfileDetailSection sectionTitle={"LEAVE INFORMATION"} />
        <EmployeeDetailCard
          title={"Reason For Leave"}
          value={"Aditya jiofrjioefsjies i"}
        />
        <EmployeeDetailCard
          title={"Total Days Of Leave"}
          value={"Aditya  jriok  isrlfkd"}
        />
        <EmployeeDetailCard title={"Leave Type"} value={"Aditya  joiroji f"} />
        <EmployeeDetailCard
          title={"Start Date"}
          value={"Aditya  ori jioljp fedpji f"}
        />
        <EmployeeDetailCard
          title={"End Date"}
          value={"Aditya ijr jiij j ppj "}
        />
        <EmployeeDetailCard
          title={"Special Remark"}
          value={"Adt ref gref gjioej io ijji iitya"}
        />

        <ProfileDetailSection sectionTitle={"ATTACHMENTS"} />
        <EmployeeDetailCard
          title={"Supported Document"}
          value={"Adire f refd  gurg oi ikmlrk. jgrmi jp iorf d rftya"}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#4ABC04",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#0095FF",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>On Hold</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#FF8A00",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Revise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#FF0000",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Rejected</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LeaveDetails;

const styles = StyleSheet.create({});
