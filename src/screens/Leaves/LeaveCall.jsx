import React, { useEffect } from "react";
// import { object } from "yup";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ProfileDetailSection from "../../myComponents/ProfileDetailSection";
import DetailsForm from "../../myComponents/DetailsForm";
import { useFormik } from "formik";
import { object, string, date, number } from "yup";
import { myConsole } from "../../utils/myConsole";

const LeaveCall = () => {
  const navigation = useNavigation();

  const leaveSchema = object({
    name: string().required("please enter name"),
    date: string().required("please enter leave type"),
    reason: string().required("please enter start date"),
    age: number()
      .typeError("Age should be a number") // Ensures it's a number
      .test(
        "len",
        "Age should be 5 digits",
        (val) => val && val.toString().length === 5
      )
      .required("Please enter age"),
    // endDate: date().required("please enter end date"),
    // reason: string().required("please enter reason"),
  });
  const fk = useFormik({
    initialValues: {
      name: "",
      date: "",
      reason: "",
      age: "",
    },
    validationSchema: leaveSchema,
    onSubmit: (values) => {
      myConsole("qwqwq", values);
    },
  });

  useEffect(() => {
    fk.setValues({
      name: "ali",
      date: "12-12-2021",
      reason: "sick",
      age: "25",
    });
  }, []);

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
      <ProfileDetailSection sectionTitle={"Leave Application"} />
      <>
        <Text>name</Text>
        <TextInput
          style={{ borderWidth: 1, marginBottom: 10 }}
          onChangeText={fk.handleChange("name")}
          onBlur={fk.handleBlur("name")}
          value={fk.values.name}
        />
        {fk?.errors.name && fk?.touched.name && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.name}
          </Text>
        )}
      </>
      <>
        <Text>date</Text>
        <TextInput
          style={{ borderWidth: 1, marginBottom: 10 }}
          onChangeText={fk.handleChange("date")}
          onBlur={fk.handleBlur("date")}
          value={fk.values.date}
        />
        {fk.errors.date && fk.touched.date && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.date}
          </Text>
        )}
      </>
      <>
        <Text>reason</Text>
        <TextInput
          style={{ borderWidth: 1, marginBottom: 10 }}
          onChangeText={fk.handleChange("reason")}
          onBlur={fk.handleBlur("reason")}
          value={fk.values.reason}
        />
        {fk.errors.reason && fk.touched.reason && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.reason}
          </Text>
        )}
      </>

      <>
        <Text>Age</Text>
        <TextInput
          style={{ borderWidth: 1, marginBottom: 10 }}
          onChangeText={fk.handleChange("age")}
          onBlur={fk.handleBlur("age")}
          keyboardType="numeric"
          value={fk.values.age}
        />
        {fk.errors.age && fk.touched.age && (
          <Text style={{ color: "red", fontSize: 12, marginLeft: 5 }}>
            {fk.errors.age}
          </Text>
        )}
      </>

      <TouchableOpacity
        onPress={fk.handleSubmit}
        style={{
          backgroundColor: "#9A4D49",
          padding: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeaveCall;
