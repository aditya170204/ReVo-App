import {
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
import { object, string, number } from "yup";
import { Formik, useFormik } from "formik";
import { myConsole } from "../../utils/myConsole";

const AddEmployeeBankInfo = () => {
  const navigation = useNavigation();
  const addEmployeePage = 3;
  let userSchema = object({
    bankDetails: object({
      accountNumber: number().required("please enter account number"),
      bankName: string().required("please enter bank name"),
      bankStatement: string().required("please enter bank statement"),
      nameOnBank: string().required("please enter name on bank"),
      sortCode: number().required("please enter sort code"),
    }),
  });
  const fk = useFormik({
    initialValues: {
      bankDetails: {
        accountNumber: "",
        bankName: "",
        bankStatement: "",
        nameOnBank: "",
        sortCode: "",
      },
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      myConsole("", values);
      navigation.navigate("UploadOfferLetter");
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
        <ProfileDetailSection sectionTitle={"BANK INFORMATION"} />
        <DetailsForm
          title={"Name Of Account Holder"}
          onChangeText={fk.handleChange("bankDetails.nameOnBank")}
          onBlur={fk.handleBlur("bankDetails.nameOnBank")}
          value={fk.values?.bankDetails.nameOnBank}
        />
        {fk.errors.bankDetails?.nameOnBank &&
          fk.touched.bankDetails?.nameOnBank && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.bankDetails?.nameOnBank}
            </Text>
          )}

        <DetailsForm
          title={"Bank Name"}
          onChangeText={fk.handleChange("bankDetails.bankName")}
          onBlur={fk.handleBlur("bankDetails.bankName")}
          value={fk.values?.bankDetails.bankName}
        />
        {fk.errors.bankDetails?.bankName &&
          fk.touched.bankDetails?.bankName && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.bankDetails?.bankName}
            </Text>
          )}

        <DetailsForm
          title={"Sort Code"}
          onChangeText={fk.handleChange("bankDetails.sortCode")}
          onBlur={fk.handleBlur("bankDetails.sortCode")}
          value={fk.values?.bankDetails.sortCode}
        />
        {fk.errors.bankDetails?.sortCode &&
          fk.touched.bankDetails?.sortCode && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.bankDetails?.sortCode}
            </Text>
          )}

        <DetailsForm
          title={"Account Number"}
          onChangeText={fk.handleChange("bankDetails.accountNumber")}
          onBlur={fk.handleBlur("bankDetails.accountNumber")}
          value={fk.values?.bankDetails.accountNumber}
        />
        {fk.errors.bankDetails?.accountNumber &&
          fk.touched.bankDetails?.accountNumber && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.bankDetails?.accountNumber}
            </Text>
          )}

        <DetailsForm
          title={"Bank Statement"}
          onChangeText={fk.handleChange("bankDetails.bankStatement")}
          onBlur={fk.handleBlur("bankDetails.bankStatement")}
          value={fk.values?.bankDetails.bankStatement}
        />
        {fk.errors.bankDetails?.bankStatement &&
          fk.touched.bankDetails?.bankStatement && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.bankDetails?.bankStatement}
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

export default AddEmployeeBankInfo;

const styles = StyleSheet.create({});
