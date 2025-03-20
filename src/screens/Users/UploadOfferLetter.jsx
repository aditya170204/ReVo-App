import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import DetailsForm from "../../myComponents/DetailsForm";
import { object, string } from "yup";
import { Formik, useFormik } from "formik";
import { myConsole } from "../../utils/myConsole";
// import { upload } from "@testing-library/user-event/dist/upload";

const UploadOfferLetter = () => {
  const navigation = useNavigation();
  const addEmployeePage = 4;
  let userSchema = object({
    upload: object({
      offerLetter: string().required("please upload offer letter"),
    }),
  });
  const fk = useFormik({
    initialValues: {
      upload: {
        offerLetter: "",
      },
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      Alert.alert("confirmation", "Are You Sure You Want To Add This User");
      myConsole("", values);
      navigation.navigate("EmployeeDetails");
    },
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
        <ProfileDetailSection sectionTitle={"UPLOAD YOUR OFFER LETTER"} />
        <DetailsForm
          title={"Upload Offer Letter"}
          onChangeText={fk.handleChange("upload.offerLetter")}
          onBlur={fk.handleBlur("upload.offerLetter")}
          value={fk.values?.upload.offerLetter}
        />
        {fk.errors.upload?.offerLetter && fk.touched.upload?.offerLetter && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.upload?.offerLetter}
          </Text>
        )}

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: "#D0837F",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: 12,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Previous</Text>
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
            <Text style={{ color: "white", fontWeight: "600" }}>
              Save and Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UploadOfferLetter;

const styles = StyleSheet.create({});
