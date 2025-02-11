import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import EmployeeDetailCard from "../../myComponents/EmployeeDetailCard";
import { getTeamDetails, getTeamList } from "../../api/fetchApi";
import { useQuery } from "react-query";
import { FlatList } from "react-native-gesture-handler";
import { myConsole } from "../../utils/myConsole";
const TeamDetails = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  myConsole("params111", params?.item?.teamName);
  // console.log(params?.id,params.teamName);
  const {
    data: getTeamDetailsById,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => {
      return getTeamDetails({ _id: params?.id });
    },
    queryKey: ["getTeamDetailsById", params?.id],
    enabled: !!params?.id,
  });
  console.log("getTeamDetailsById", getTeamDetailsById?.data);

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
        <EmployeeDetailCard
          title={"Team Name"}
          value={params?.item?.teamName}
        />
        <EmployeeDetailCard
          title={"Creation Date"}
          value={params?.item?.createdAt}
        />
        <EmployeeDetailCard
          title={"Total Members"}
          value={params?.item?.size}
        />
        <EmployeeDetailCard
          title={"Last Updated"}
          value={params?.item?.updatedAt}
        />

        <ProfileDetailSection sectionTitle={"MANAGER & TEAM LEAD LIST"} />
        <EmployeeDetailCard
          title={"Managers"}
          value={
            <View>
              {params?.item?.manager?.map((el) => {
                return <Text>{el?.name || "N/A"} </Text>;
              })}
            </View>
          }
        />
        <EmployeeDetailCard
          title={"Team Leads"}
          // value={getTeamDetailsById?.data?.teamLead?.name}
          value={
            <View>
              {params?.item?.teamLead?.map((el) => {
                return <Text>{el?.name}</Text>;
              })}
            </View>
          }
        />

        <ProfileDetailSection sectionTitle={"AGENTS LIST"} />
        <EmployeeDetailCard
          title={"Agents"}
          value={params?.item?.agent?.name}
        />

        <ProfileDetailSection sectionTitle={"UPDATES"} />
        <EmployeeDetailCard
          title={"New Added Members"}
          value={params?.item?.newAddMembers}
        />
        <EmployeeDetailCard
          title={"Removed Members"}
          value={params?.item?.removeMembers}
        />
      </ScrollView>
      <FlatList />
    </View>
  );
};

export default TeamDetails;

const styles = StyleSheet.create({});
