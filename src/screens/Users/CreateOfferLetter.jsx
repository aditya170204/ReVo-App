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
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import DetailsForm from "../../myComponents/DetailsForm";
import { SelectList } from "react-native-dropdown-select-list";
import { object, string, number, date } from "yup";
import { useFormik } from "formik";
import { myConsole } from "../../utils/myConsole";

const CreateOfferLetter = () => {
  const navigation = useNavigation();
  const data = [
    { key: "Frontend Developer", value: "Frontend Developer" },
    { key: "Backend Developer", value: "Backend Developer" },
    { key: "FullStack Developer", value: "FullStack Developer" },
    { key: "Application Developer", value: "Application Developer" },
    { key: "Automation/Testing", value: "Automation/Testing" },
    { key: "UI/UX/Advertising", value: "UI/UX/Advertising" },
  ];
  const [selected, setSelected] = useState("");
  const offerLetterSchema = object({
    dateOfJoining: date().required("Please Enter a Valid Date "),
    department: string().required("Please Enter a Valid department "),
    email: string().email().required("Please Enter a Valid email "),
    name: string().required("Please Enter a Valid name "),
    offerPackage: number().required("Please Enter a Valid Package "),
    role: string().required("Please Enter a Valid role "),
  });
  const fk = useFormik({
    initialValues: {
      dateOfJoining: "",
      department: "",
      email: "",
      name: "",
      offerPackage: "",
      role: "",
    },
    validationSchema: offerLetterSchema,
    onSubmit: (values) => {
      myConsole("", values);
      navigation.goBack();
    },
    // navigation.navigate("CreateOfferLetter");
  });

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
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 19,

              // backgroundColor: "red",
            }}
          >
            Create Offer Letter
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailSection sectionTitle={"OFFER DETAILS"} />
        <DetailsForm
          title={"Candidate Name"}
          onChangeText={fk.handleChange("name")}
          onBlur={fk.handleBlur("name")}
          value={fk.values.name}
        />
        {fk.errors.name && fk.touched.name && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {"Please Enter a Valid Name"}
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
            {"invalid input , Enter a Valid Email"}
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
            {"invalid input , only digits allowed"}
          </Text>
        )}

        {/* <DetailsForm title={"Role"} /> */}
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: "600", fontSize: 16, marginBottom: 9 }}>
            Role
          </Text>
          <SelectList
            style={{
              marginTop: 9,
            }}
            placeholder="Select "
            setSelected={(value) => {
              setSelected(value);
              fk.setFieldValue("role", value);
            }}
            data={data}
          />
        </View>
        {fk.errors.role && fk.touched.role && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {"Please select a Role"}
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
            {"Please Enter the Department"}
          </Text>
        )}

        <DetailsForm
          title={"Offer Package"}
          onChangeText={fk.handleChange("offerPackage")}
          onBlur={fk.handleBlur("offerPackage")}
          value={fk.values.offerPackage}
        />
        {fk.errors.offerPackage && fk.touched.offerPackage && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {"invalid input , only digits allowed"}
          </Text>
        )}

        <TouchableOpacity
          onPress={fk.handleSubmit}
          style={{
            backgroundColor: "#9A4D49",
            justifyContent: "center",
            alignItems: "center",

            borderRadius: 12,
            marginTop: 30,
            padding: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            Create DocUsign
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateOfferLetter;

const styles = StyleSheet.create({});
