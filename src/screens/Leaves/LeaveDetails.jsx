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
import { myConsole } from "../../utils/myConsole";
import { useQuery } from "react-query";

const LeaveDetails = () => {
  const { params } = useRoute();
  myConsole("params ok boss", params?.item?.name);
  const navigation = useNavigation();
  const {
    data: getLeaveDetailsById,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => {
      return getTeamDetails({ _id: params?.id });
    },
    queryKey: ["getLeaveDetailsById", params?.id],
    enabled: !!params?.id,
  });
  console.log("getLeaveDetailsById", getLeaveDetailsById?.data);

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
          value={params?.item?.name}
        />
        <EmployeeDetailCard title={"Role"} value={params?.item?.role} />
        <EmployeeDetailCard
          title={"Mobile Number"}
          value={params?.item?.mobile}
        />

        <ProfileDetailSection sectionTitle={"LEAVE INFORMATION"} />
        <EmployeeDetailCard
          title={"Reason For Leave"}
          value={params?.item?.reason}
        />
        <EmployeeDetailCard
          title={"Total Days Of Leave"}
          value={params?.item?.days}
        />
        <EmployeeDetailCard
          title={"Leave Type"}
          value={params?.item?.payType}
        />
        <EmployeeDetailCard
          title={"Start Date"}
          value={params?.item?.startDate}
        />
        <EmployeeDetailCard title={"End Date"} value={params?.item?.endDate} />
        <EmployeeDetailCard
          title={"Special Remark"}
          value={params?.item?.remark}
        />

        <ProfileDetailSection sectionTitle={"ATTACHMENTS"} />
        <EmployeeDetailCard
          title={"Supported Document"}
          value={params?.item?.doc}
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
