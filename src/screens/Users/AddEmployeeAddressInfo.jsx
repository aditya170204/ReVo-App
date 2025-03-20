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
import DetailsForm from "../../myComponents/DetailsForm";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { myConsole } from "../../utils/myConsole";

const AddEmployeeAddressInfo = () => {
  const navigation = useNavigation();
  const addEmployeePage = 2;
  let userSchema = object({
    addressProof: string().required("please provide address proof"),
    currentAddress: object({
      currentAdd: string().required(
        "please enter House.no./Flat.no./Building Name"
      ),
      currentAdd2: string().required("please enter address line 2"),
      currentCountry: string().required("please enter country name"),
      currentCity: string().required("please enter city name"),
      currentState: string().required("please enter state name"),
      currentPostCode: number().required("please enter post code"),
    }),
  });
  const fk = useFormik({
    initialValues: {
      addressProof: "",
      currentAddress: {
        currentAdd: "",
        currentAdd2: "",
        currentCountry: "",
        currentCity: "",
        currentState: "",
        currentPostCode: "",
      },
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      myConsole("", values);
      navigation.navigate("AddEmployeeBankInfo");
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
        <ProfileDetailSection sectionTitle={"ADDRESS INFORMATION"} />

        <DetailsForm
          title={"House.no./Flat.no./Building Name"}
          onChangeText={fk.handleChange("currentAddress.currentAdd")}
          onBlur={fk.handleBlur("currentAddress.currentAdd")}
          value={fk.values?.currentAddress.currentAdd}
        />
        {fk.errors.currentAddress?.currentAdd &&
          fk.touched.currentAddress?.currentAdd && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.currentAddress?.currentAdd}
            </Text>
          )}

        <DetailsForm
          title={"Address Line 2"}
          onChangeText={fk.handleChange("currentAddress.currentAdd2")}
          onBlur={fk.handleBlur("currentAddress.currentAdd2")}
          value={fk.values?.currentAddress.currentAdd2}
        />
        {fk.errors.currentAddress?.currentAdd2 &&
          fk.touched.currentAddress?.currentAdd2 && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.currentAddress?.currentAdd2}
            </Text>
          )}

        <DetailsForm
          title={"City"}
          onChangeText={fk.handleChange("currentAddress.currentCity")}
          onBlur={fk.handleBlur("currentAddress.currentCity")}
          value={fk.values?.currentAddress.currentCity}
        />
        {fk.errors.currentAddress?.currentCity &&
          fk.touched.currentAddress?.currentCity && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.currentAddress?.currentCity}
            </Text>
          )}

        <DetailsForm
          title={"State"}
          onChangeText={fk.handleChange("currentAddress.currentState")}
          onBlur={fk.handleBlur("currentAddress.currentState")}
          value={fk.values?.currentAddress.currentState}
        />
        {fk.errors.currentAddress?.currentState &&
          fk.touched.currentAddress?.currentState && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.currentAddress?.currentState}
            </Text>
          )}

        <DetailsForm
          title={"Country"}
          onChangeText={fk.handleChange("currentAddress.currentCountry")}
          onBlur={fk.handleBlur("currentAddress.currentCountry")}
          value={fk.values?.currentAddress.currentCountry}
        />
        {fk.errors.currentAddress?.currentCity &&
          fk.touched.currentAddress?.currentCity && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.currentAddress?.currentCity}
            </Text>
          )}

        <DetailsForm
          title={"Postal Code"}
          onChangeText={fk.handleChange("currentAddress.currentPostCode")}
          onBlur={fk.handleBlur("currentAddress.currentPostCode")}
          value={fk.values?.currentAddress.currentPostCode}
        />
        {fk.errors.currentAddress?.currentPostCode &&
          fk.touched.currentAddress?.currentPostCode && (
            <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
              {fk.errors.currentAddress?.currentPostCode}
            </Text>
          )}

        <DetailsForm
          title={"Address Proof"}
          onChangeText={fk.handleChange("addressProof")}
          onBlur={fk.handleBlur("addressProof")}
          value={fk.values?.addressProof}
        />
        {fk.errors.addressProof && fk.touched.addressProof && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.addressProof}
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

export default AddEmployeeAddressInfo;

const styles = StyleSheet.create({});
