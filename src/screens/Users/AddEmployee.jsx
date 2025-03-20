import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DetailsForm from "../../myComponents/DetailsForm";
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { object, string, number, date } from "yup";
import { myConsole } from "../../utils/myConsole";

const AddEmployee = () => {
  let userSchema = object({
    // basicInfo: object({
    name: string().required("please enter name"),
    lastName: string().required("please enter last name"),
    email: string().email().required("plaese enter valid email"),
    mobile: number().required("please enter mobile number"),
    role: string().required("please enter role"),
    department: string().required("please enter department"),
    dateOfJoining: date().required("please enter date of joining"),
    package: number().required("please enter package"),

    // offerLetter: string().required(),
    // }),
  });
  const fk = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      mobile: "",
      role: "",
      department: "",
      dateOfJoining: "",
      package: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      myConsole("", values);
      navigation.navigate("AddEmployeeAddressInfo");
    },
  });
  const navigation = useNavigation();
  const addEmployeePage = 1;

  return (
    <View style={{ padding: 20, marginTop: 25, paddingBottom: 50 }}>
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
            Add Employee
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"PERSONAL INFORMATION"} />
        <DetailsForm
          title={"First Name"}
          onChangeText={fk.handleChange("name")}
          onBlur={fk.handleBlur("name")}
          value={fk.values.name}
        />
        {fk.errors.name && fk.touched.name && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.name}
          </Text>
        )}
        <DetailsForm
          title={"Last Name"}
          onChangeText={fk.handleChange("lastName")}
          onBlur={fk.handleBlur("lastName")}
          value={fk.values.lastName}
        />
        {fk.errors.lastName && fk.touched.lastName && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.lastName}
          </Text>
        )}

        <DetailsForm
          title={"Email Address"}
          onChangeText={fk.handleChange("email")}
          onBlur={fk.handleBlur("email")}
          value={fk.values.email}
        />
        {fk.errors.email && fk.touched.email && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.email}
          </Text>
        )}
        <DetailsForm
          title={"Phone Number"}
          onChangeText={fk.handleChange("mobile")}
          onBlur={fk.handleBlur("mobile")}
          value={fk.values.mobile}
        />
        {fk.errors.mobile && fk.touched.mobile && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {"invalid input , only digits allowed"}
          </Text>
        )}
        <DetailsForm
          title={"Role"}
          onChangeText={fk.handleChange("role")}
          onBlur={fk.handleBlur("role")}
          value={fk.values.role}
        />
        {fk.errors.role && fk.touched.role && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.role}
          </Text>
        )}

        <DetailsForm
          title={"Department"}
          onChangeText={fk.handleChange("department")}
          onBlur={fk.handleBlur("department")}
          value={fk.values.department}
        />
        {fk.errors.department && fk.touched.department && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.department}
          </Text>
        )}
        <DetailsForm
          title={"Joining Date"}
          onChangeText={fk.handleChange("dateOfJoining")}
          onBlur={fk.handleBlur("dateOfJoining")}
          value={fk.values.dateOfJoining}
        />
        {fk.errors.dateOfJoining && fk.touched.dateOfJoining && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {"invalid input , only digits allowed "}
          </Text>
        )}

        <DetailsForm
          title={"Package"}
          onChangeText={fk.handleChange("package")}
          onBlur={fk.handleBlur("package")}
          value={fk.values.package}
        />
        {fk.errors.package && fk.touched.package && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {"invalid input , only digits allowed"}
          </Text>
        )}
        {/* {errors.package && (
                <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
                  {"invalid input , only digits allowed"}
                </Text>
              )} */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#9A4D49",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Abort</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate("CreateOfferLetter");
            // }}
            style={{
              backgroundColor: "#9A4D49",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>
              Save and Next
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={fk.handleSubmit}
            style={{
              backgroundColor: "#9A4D49",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({});
