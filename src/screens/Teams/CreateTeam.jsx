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
import DetailsForm from "../../myComponents/DetailsForm";
import { SelectList } from "react-native-dropdown-select-list";

const CreateTeam = () => {
  const navigation = useNavigation();
  const manager = [
    { key: "Frontend Developer", value: "Frontend Developer" },
    { key: "Backend Developer", value: "Backend Developer" },
    { key: "FullStack Developer", value: "FullStack Developer" },
    { key: "Application Developer", value: "Application Developer" },
    { key: "Automation/Testing", value: "Automation/Testing" },
    { key: "UI/UX/Advertising", value: "UI/UX/Advertising" },
  ];
  const leads = [
    { key: "Frontend Developer", value: "Frontend Developer" },
    { key: "Backend Developer", value: "Backend Developer" },
    { key: "FullStack Developer", value: "FullStack Developer" },
    { key: "Application Developer", value: "Application Developer" },
    { key: "Automation/Testing", value: "Automation/Testing" },
    { key: "UI/UX/Advertising", value: "UI/UX/Advertising" },
  ];
  const members = [
    { key: "Frontend Developer", value: "Frontend Developer" },
    { key: "Backend Developer", value: "Backend Developer" },
    { key: "FullStack Developer", value: "FullStack Developer" },
    { key: "Application Developer", value: "Application Developer" },
    { key: "Automation/Testing", value: "Automation/Testing" },
    { key: "UI/UX/Advertising", value: "UI/UX/Advertising" },
  ];
  const [isManager, setIsManager] = useState("");

  const [isLeads, setIsLeads] = useState("");

  const [isMembers, setIsMembers] = useState("");

  return (
    <View style={{ padding: 20, marginTop: 25, marginBottom: 50 }}>
      <View style={{ flexDirection: "row", gap: 5, marginBottom: 25 }}>
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
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 19,

              // backgroundColor: "red",
            }}
          >
            Create Team
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailsForm title={"Team Name"} />

        <View style={{ rowGap: 10 }}>
          <View>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                marginVertical: 10,
                //   backgroundColor: "red",
              }}
            >
              Select Manager
            </Text>
            <SelectList
              boxStyles={{ borderWidth: 0.5, borderColor: "#7C7C7C" }}
              placeholder="Select "
              setIsManager={setIsManager}
              data={manager}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                marginVertical: 10,
                // backgroundColor: "red",
              }}
            >
              Select Team Lead
            </Text>
            <SelectList
              boxStyles={{ borderWidth: 0.5, borderColor: "#7C7C7C" }}
              placeholder="Select "
              setIsLeads={setIsLeads}
              data={leads}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                marginVertical: 10,
                //   backgroundColor: "red",
              }}
            >
              Select Members
            </Text>
            <SelectList
              boxStyles={{ borderWidth: 0.5, borderColor: "#7C7C7C" }}
              placeholder="Select "
              setIsMembers={setIsMembers}
              data={members}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: "#9A4D49",
            justifyContent: "center",
            alignItems: "center",

            borderRadius: 12,
            marginTop: 40,
            padding: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Create Team</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({});
