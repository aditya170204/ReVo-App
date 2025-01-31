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
const EmployeeDetails = () => {
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
            Employee Details
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"EMPLOYEE INFORMATION"} />
        <EmployeeDetailCard title={"Employee Name"} value={"Aditya"} />
        <EmployeeDetailCard
          title={"Employee Name"}
          value={"Aditiedmkl rfed  edya"}
        />
        <EmployeeDetailCard title={"Employee Name"} value={"Aditya"} />
        <EmployeeDetailCard title={"Employeeklmde Name"} value={"Aditya"} />
        <EmployeeDetailCard title={"Employee Name"} value={"Aditya"} />
        <ProfileDetailSection sectionTitle={"BANK INFORMATION"} />
        <EmployeeDetailCard title={"Employee Name"} value={"Aditya"} />
        <EmployeeDetailCard
          title={"Employee Name"}
          value={"Adt ref grefitya"}
        />
        <EmployeeDetailCard title={"Employee Name"} value={"Aditya"} />
        <ProfileDetailSection sectionTitle={"SOCIAL MEDIA LINKS"} />
        <EmployeeDetailCard
          title={"Emplo rf er  rg rrg yrjndmkmee Name"}
          value={"Ad reg gfitya"}
        />
        <EmployeeDetailCard title={"Emplo ref rf yee Name"} value={"Aditya"} />
        <EmployeeDetailCard
          title={"Employrerfv refd ree Name"}
          value={"Adi ref fertya"}
        />
        <ProfileDetailSection sectionTitle={"MESSAGING CHANNEL"} />
        <EmployeeDetailCard
          title={"Employ erf rfv fee Name"}
          value={"Adire f refd rf d rftya"}
        />
        <EmployeeDetailCard
          title={"Empljrenkdr efd d d rfdoyee Name"}
          value={"Ad r fd  dfsitya"}
        />
        <ProfileDetailSection sectionTitle={"ATTACHMENTS"} />
        <EmployeeDetailCard
          title={"Employee  r d dd f dName"}
          value={"Adi rff rtya"}
        />
        <EmployeeDetailCard
          title={"Employee Nartevnicjdev hncdme"}
          value={"Adi ref r efv rvfr tya"}
        />
        <EmployeeDetailCard
          title={"Employtgerfdr rev re f refee Name"}
          value={
            "Adnfdmklnreojdfklscr dc rudo ruod uhfwosd ods uojdcj oidc jidc jd oisdxi jdc x kitya"
          }
        />
        <EmployeeDetailCard
          title={
            "Empljredo ec d ec  ced e cde ds wefcd s eds  edw sewd syee Name"
          }
          value={
            "Adijmkjnmk njmknj mkn,,,,,,,,,,,ryhybgdvf etbvfcbtevfcsdgbjhncdsxvgbhfdcsxbhjfj mk njkm jkm mkmk km klmmlffffffffffffjjjjjjjjjtya"
          }
        />
      </ScrollView>
    </View>
  );
};

export default EmployeeDetails;

const styles = StyleSheet.create({});
