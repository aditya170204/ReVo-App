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
const TeamDetails = () => {
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
            Team Details
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"TEAM DETAILS"} />
        <EmployeeDetailCard title={"Team Name"} value={"Aditya"} />
        <EmployeeDetailCard
          title={"Creation Date"}
          value={"Aditiedmkl rfed  edya"}
        />
        <EmployeeDetailCard title={"Total Members"} value={"Aditya"} />
        <EmployeeDetailCard title={"Last Updated"} value={"Aditya"} />

        <ProfileDetailSection sectionTitle={"MANAGER & TEAM LEAD LIST"} />
        <EmployeeDetailCard title={"Managers"} value={"Aditya"} />
        <EmployeeDetailCard title={"Team Leads"} value={"Adt ref grefitya"} />

        <ProfileDetailSection sectionTitle={"AGENTS LIST"} />
        <EmployeeDetailCard
          title={"Agents"}
          value={"Adire f refd rf d rftya"}
        />

        <ProfileDetailSection sectionTitle={"UPDATES"} />
        <EmployeeDetailCard
          title={"New Added Members"}
          value={"Ad reg gfitya"}
        />
        <EmployeeDetailCard title={"Removed Members"} value={"Aditya"} />
      </ScrollView>
    </View>
  );
};

export default TeamDetails;

const styles = StyleSheet.create({});
