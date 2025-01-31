import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TeamCard from "../myComponents/TeamCard";

const Teams = () => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 20, marginTop: 20, gap: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 12 }}>
          All Teams
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateTeam");
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
            Create Teams
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Search"
        style={{
          borderWidth: 0.5,
          borderRadius: 20,
          paddingHorizontal: 20,
          borderColor: "#7C7C7C",
        }}
      />
      <ScrollView
        style={{ marginBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <TeamCard
          ManagerName={"Lalit & friends"}
          teamLead={`COMPOUNDER & LALIT`}
          teamName={"mango"}
          totalMembers={"KING of mango,PRINCE of mango,LIONS of mango"}
        />
        <TeamCard
          ManagerName={"Lalit & friends"}
          teamLead={`COMPOUNDER & LALIT`}
          teamName={"mango"}
          totalMembers={"KING of mango,PRINCE of mango,LIONS of mango"}
        />
        <TeamCard
          ManagerName={"Lalit & friends"}
          teamLead={`COMPOUNDER & LALIT`}
          teamName={"mango"}
          totalMembers={"KING of mango,PRINCE of mango,LIONS of mango"}
        />
        <TeamCard
          ManagerName={"Lalit & friends"}
          teamLead={`COMPOUNDER & LALIT`}
          teamName={"mango"}
          totalMembers={"KING of mango,PRINCE of mango,LIONS of mango"}
        />
      </ScrollView>
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({});
