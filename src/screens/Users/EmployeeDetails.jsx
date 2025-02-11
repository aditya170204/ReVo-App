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
import { PostUserName } from "../../api/PostApi";
import { useQuery } from "react-query";
const EmployeeDetails = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  console.log("paramsOOO", params?.id);
  //

  // "6762be500e895b4806b12d6d"
  const {
    data: getUserDetailsById,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => {
      return PostUserName({ _id: params?.id });
    },
    queryKey: ["getUserDetailsById", params?.id],
    enabled: !!params?.id,
  });
  console.log("getUserDetailsById", getUserDetailsById?.data);

  //

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
            Employee Details
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"EMPLOYEE INFORMATION"} />
        <EmployeeDetailCard
          title={"Bio"}
          value={getUserDetailsById?.data.bio}
        />
        <ProfileDetailSection sectionTitle={"EMPLOYEE INFORMATION"} />
        <EmployeeDetailCard
          title={"Employee Name"}
          value={getUserDetailsById?.data?.name}
        />
        <EmployeeDetailCard
          title={"Employee Email"}
          value={getUserDetailsById?.data?.email}
        />
        <EmployeeDetailCard
          title={"Mobile Number"}
          value={getUserDetailsById?.data?.mobile}
        />
        <EmployeeDetailCard
          title={"Role"}
          value={getUserDetailsById?.data?.role}
        />
        <EmployeeDetailCard
          title={"Employee Code"}
          value={getUserDetailsById?.data?.empCode}
        />
        <EmployeeDetailCard
          title={"Department"}
          value={getUserDetailsById?.data?.department}
        />
        <ProfileDetailSection sectionTitle={"ADDRESS INFORMATION"} />
        <EmployeeDetailCard
          title={"House/Flat Address"}
          value={getUserDetailsById?.data?.currentAddress?.currentAdd}
        />
        <EmployeeDetailCard
          title={"Address Line 2"}
          value={getUserDetailsById?.data?.currentAddress?.currentAdd2}
        />
        <EmployeeDetailCard
          title={"City"}
          value={getUserDetailsById?.data?.currentAddress?.currentCity}
        />
        <EmployeeDetailCard
          title={"State"}
          value={getUserDetailsById?.data?.currentAddress?.currentState}
        />
        <EmployeeDetailCard
          title={"Country"}
          value={getUserDetailsById?.data?.currentAddress?.currentCountry}
        />
        <EmployeeDetailCard
          title={"Post Code"}
          value={getUserDetailsById?.data?.currentAddress?.currentPostCode}
        />
        <ProfileDetailSection sectionTitle={"BANK INFORMATION"} />
        <EmployeeDetailCard
          title={"Name Of Bank"}
          value={getUserDetailsById?.data?.bankDetails?.bankName}
        />
        <EmployeeDetailCard
          title={"Name on Bank Ac."}
          value={getUserDetailsById?.data?.nameOnBank}
        />
        <EmployeeDetailCard
          title={"Account No."}
          value={getUserDetailsById?.data.bankDetails?.accountNumber}
        />
        <EmployeeDetailCard
          title={"Sort Code"}
          value={getUserDetailsById?.data?.sortCode}
        />
        <ProfileDetailSection sectionTitle={"SOCIAL MEDIA LINKS"} />
        <EmployeeDetailCard
          title={"Facebook"}
          value={getUserDetailsById?.data?.facebook}
        />
        <EmployeeDetailCard
          title={"Instagram"}
          value={getUserDetailsById?.data?.instagram}
        />
        <EmployeeDetailCard
          title={"YouTube"}
          value={getUserDetailsById?.data?.youtube}
        />
        <EmployeeDetailCard
          title={"TikTok"}
          value={getUserDetailsById?.data.tiktok}
        />
        <EmployeeDetailCard
          title={"Twitter"}
          value={getUserDetailsById?.data.twitter}
        />
      </ScrollView>
    </View>
  );
};

export default EmployeeDetails;

const styles = StyleSheet.create({});
