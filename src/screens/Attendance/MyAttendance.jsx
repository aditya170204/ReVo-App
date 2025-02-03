import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import AttendanceCard from "../../myComponents/AttendanceCard";
import SwipeButton from "rn-swipe-button";
import SwipeJavBtn from "../../myComponents/SwipeJavBtn";

const MyAttendance = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const data = [
    { key: "Issues Raised", value: "Issues Raised" },
    { key: "Present", value: "Present" },
    { key: "Absent", value: "Absent" },
    { key: "On Leave", value: "On Leave" },
    { key: "Half Day", value: "Half Day" },
  ];
  const SVGComponent = (props) => (
    <Svg
      width={11}
      height={15}
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.8999 4.70996V12.36C2.8999 13.58 3.8999 14.57 5.1099 14.57H8.4499C9.6699 14.57 10.6599 13.57 10.6599 12.36V4.70996H2.8999ZM5.3899 12.29C5.3899 12.58 5.1499 12.82 4.8599 12.82C4.5699 12.82 4.3299 12.58 4.3299 12.29V6.97996C4.3299 6.68996 4.5699 6.44996 4.8599 6.44996C5.1499 6.44996 5.3899 6.68996 5.3899 6.97996V12.29ZM7.3199 12.29C7.3199 12.58 7.0799 12.82 6.7899 12.82C6.4999 12.82 6.2599 12.58 6.2599 12.29V6.97996C6.2599 6.68996 6.4999 6.44996 6.7899 6.44996C7.0799 6.44996 7.3199 6.68996 7.3199 6.97996V12.29ZM9.2399 12.29C9.2399 12.58 8.9999 12.82 8.7099 12.82C8.4199 12.82 8.1799 12.58 8.1799 12.29V6.97996C8.1799 6.68996 8.4199 6.44996 8.7099 6.44996C8.9999 6.44996 9.2399 6.68996 9.2399 6.97996V12.29Z"
        fill="#7C7C7C"
      />
      <Path
        d="M6.12008 0.729932C5.72008 0.329932 5.05008 0.329932 4.65008 0.729932L4.15008 1.22993C3.71008 0.799932 3.04008 0.739932 2.61008 1.12993L1.09008 2.53993C0.660078 2.93993 0.660078 3.64993 1.09008 4.10993L1.17008 4.19993L0.630078 4.74993C0.230078 5.14993 0.230078 5.81993 0.630078 6.21993L1.52008 7.10993L7.01008 1.61993L6.12008 0.729932ZM1.68008 2.57993L2.60008 1.72993C2.92008 1.42993 3.40008 1.38993 3.80008 1.57993L1.51008 3.86993C1.28008 3.42993 1.33008 2.89993 1.68008 2.57993Z"
        fill="#7C7C7C"
      />
      <Path
        d="M6.37012 3.83002H10.6701V2.91002C10.6701 2.91002 10.5401 2.14002 9.64012 2.39002C8.74012 2.64002 6.76012 3.24002 6.76012 3.24002C6.76012 3.24002 6.41012 3.35002 6.37012 3.83002Z"
        fill="#7C7C7C"
      />
    </Svg>
  );

  //switching

  const [swipeDirection, setSwipeDirection] = useState("");
  const [titleName, setTitleName] = useState("");

  const handleSwipeSuccess = () => {
    Alert.alert("Punched-Insfully");
    setTitleName("Keshav");
  };

  const handleSwipeLeft = () => {
    Alert.alert("Swipe Left");
    setTitleName("Keshav");
  };
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <View style={{ flexDirection: "row", gap: 5, marginBottom: 25 }}>
        <TouchableOpacity
          style={{
            // backgroundColor: "yellow",
            width: "10%",
            padding: 5,

            marginTop: 18,
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name={"chevron-left"} size={30} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              marginTop: 19,

              //   backgroundColor: "red",
            }}
          >
            My Attendance
          </Text>
        </View>
      </View>
      {/* <SwipeButton
        title={titleName}
        titleColor="white"
        titleStyles={{ fontWeight: "600" }}
        titleFontSize={15}
        railBackgroundColor="#D0837F"
        railBorderColor="white"
        railStyles={{
          backgroundColor: "#A6AEBF",
          borderColor: "#A6AEBF",
          height: 50,
        }}
        thumbIconBackgroundColor="#FFFFFF"
        thumbIconBorderColor="white"
        containerStyles={{ height: 50 }}
        swipeSuccessThreshold={50}
        onSwipeSuccess={(v) => console.log("swipeToRight", v)}
        onSwipeLeft={(v) => console.log("swipeToLeft", v)}
        onSwipeStart={(v) => {
          console.log("v", v);
        }}
      /> */}
      <SwipeJavBtn
        adjustWidth={150}
        slideWidth={370}
        onSwipe={(v) => {
          console.log("sdbgfjash", v);
        }}
      />
      {/* {swipeDirection ? (
        <Text style={{ marginTop: 20, fontSize: 16 }}>{swipeDirection}</Text>
      ) : null} */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="Search"
          style={{
            width: "80%",
            borderWidth: 0.5,
            borderRadius: 40,
            borderColor: "#7C7C7C",
            paddingHorizontal: 15,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddEmployee");
          }}
          style={{
            backgroundColor: "#D0837F",
            justifyContent: "center",
            alignItems: "center",
            width: "15%",
            borderRadius: 10,
          }}
        >
          {/* <MaterialIcons color={"white"} name={"person-add"} size={25} /> */}
          <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // {...props}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3949 4.07581H13.6506C14.0392 4.07581 14.3543 3.76068 14.3543 3.37208V1.26322V0.703656C14.3543 0.315132 14.0392 0 13.6506 0H13.3949C13.0062 0 12.6911 0.315132 12.6911 0.703656V1.26322V3.37205C12.6912 3.76068 13.0062 4.07581 13.3949 4.07581ZM4.36806 4.09322H4.62381C5.01248 4.09322 5.32754 3.77806 5.32754 3.3895V1.4475V0.721103C5.32754 0.332543 5.01248 0.0174106 4.62381 0.0174106H4.36806C3.97943 0.0174106 3.66437 0.332543 3.66437 0.721103V1.44754V3.3895C3.66437 3.77806 3.97943 4.09322 4.36806 4.09322ZM14.9261 1.44756H16.7322C17.363 1.44756 17.8763 1.96083 17.8762 2.59165V16.4159C17.8762 17.0468 17.363 17.56 16.7322 17.56H1.14404C0.513228 17.56 0 17.0468 0 16.4159V2.59165C0 1.96079 0.513228 1.44756 1.14404 1.44756H3.09264V3.38952C3.09264 4.09299 3.66492 4.66531 4.36835 4.66531H4.6241C5.32757 4.66531 5.89985 4.09299 5.89985 3.38952V1.44756H12.1189V3.37208C12.1189 4.07556 12.6912 4.64787 13.3947 4.64787H13.6504C14.3538 4.64787 14.9261 4.25987 14.9261 3.55639V1.44756ZM1.14408 16.4159H16.7322L16.733 16.4159L16.7324 5.97619H1.14404L1.14408 16.4159ZM9.52919 9.47794H11.5834C11.6648 9.47794 11.7308 9.41192 11.7308 9.33049V7.55172C11.7308 7.47029 11.6648 7.40427 11.5834 7.40427H9.52919C9.44777 7.40427 9.38175 7.47029 9.38175 7.55172V9.33049C9.38175 9.41192 9.44777 9.47794 9.52919 9.47794ZM14.9355 9.47794H12.8813C12.7998 9.47794 12.7338 9.41192 12.7338 9.33049V7.55172C12.7338 7.47029 12.7998 7.40427 12.8813 7.40427H14.9355C15.0169 7.40427 15.0829 7.47029 15.0829 7.55172V9.33049C15.0829 9.41192 15.0169 9.47794 14.9355 9.47794ZM2.82435 12.39H4.87852C4.95994 12.39 5.02596 12.324 5.02596 12.2426V10.4638C5.02596 10.3823 4.95994 10.3163 4.87852 10.3163H2.82435C2.74292 10.3163 2.6769 10.3823 2.6769 10.4638V12.2426C2.6769 12.324 2.74292 12.39 2.82435 12.39ZM8.23105 12.39H6.17689C6.09546 12.39 6.02944 12.324 6.02944 12.2426V10.4638C6.02944 10.3823 6.09546 10.3163 6.17689 10.3163H8.23105C8.31248 10.3163 8.3785 10.3823 8.3785 10.4638V12.2426C8.3785 12.324 8.31248 12.39 8.23105 12.39ZM9.5292 12.39H11.5834C11.6648 12.39 11.7308 12.324 11.7308 12.2426V10.4638C11.7308 10.3823 11.6648 10.3163 11.5834 10.3163H9.5292C9.44777 10.3163 9.38175 10.3823 9.38175 10.4638V12.2426C9.38175 12.324 9.44777 12.39 9.5292 12.39ZM14.9355 12.39H12.8813C12.7998 12.39 12.7338 12.324 12.7338 12.2426V10.4638C12.7338 10.3823 12.7998 10.3163 12.8813 10.3163H14.9355C15.0169 10.3163 15.0829 10.3823 15.0829 10.4638V12.2426C15.0829 12.324 15.0169 12.39 14.9355 12.39ZM4.87848 13.2284H2.82435C2.74292 13.2284 2.6769 13.2944 2.6769 13.3759V15.1547C2.6769 15.2361 2.74292 15.3021 2.82435 15.3021H4.87851C4.95994 15.3021 5.02596 15.2361 5.02596 15.1547V13.3759C5.02593 13.2944 4.95991 13.2284 4.87848 13.2284ZM6.17689 13.2284H8.23105C8.31248 13.2284 8.3785 13.2944 8.3785 13.3759V15.1547C8.3785 15.2361 8.31248 15.3021 8.23105 15.3021H6.17689C6.09546 15.3021 6.02944 15.2361 6.02944 15.1547V13.3759C6.02944 13.2944 6.09546 13.2284 6.17689 13.2284ZM11.5834 13.2284H9.5292C9.44777 13.2284 9.38175 13.2944 9.38175 13.3759V15.1547C9.38175 15.2361 9.44777 15.3021 9.5292 15.3021H11.5834C11.6648 15.3021 11.7308 15.2361 11.7308 15.1547V13.3759C11.7308 13.2944 11.6648 13.2284 11.5834 13.2284ZM12.8813 13.2284H14.9355C15.0169 13.2284 15.0829 13.2944 15.0829 13.3759V15.1547C15.0829 15.2361 15.0169 15.3021 14.9355 15.3021H12.8813C12.7998 15.3021 12.7338 15.2361 12.7338 15.1547V13.3759C12.7338 13.2944 12.7998 13.2284 12.8813 13.2284Z"
              fill="white"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <SelectList
          boxStyles={{ borderWidth: 0.5 }}
          dropdownStyles={{
            borderWidth: 0.5,
          }}
          setSelected={setSelected}
          data={data}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 190 }}
      >
        <AttendanceCard
          EmployeeName={"Aditya Raj"}
          Email={"aditya@gmail.com"}
          Role={"React-Native Intern"}
          mobileNo={"979298..876 776 98 865 987 69 876 5678 ;)"}
        />
        <AttendanceCard
          EmployeeName={"Aditya Raj"}
          Email={"aditya@gmail.com"}
          Role={
            "React-Native Intern  tygih iygbh yhuj ouj gybhuj nygi hhu j iojklmfy tgubyhinjl"
          }
          mobileNo={"979298..;)"}
        />
        <AttendanceCard
          EmployeeName={"Aditya Raj"}
          Email={
            "aditya@gmail.com gyibh ujnol ojikml rfutbgihnjm poikljf tugibhnjp ikljnk"
          }
          Role={"React-Native Intern"}
          mobileNo={"979298..;)"}
        />
        <AttendanceCard
          EmployeeName={"Aditya Raj g iyhujnmoi jmk ibhnjoji kmljiok m"}
          Email={"aditya@gmail.com"}
          Role={"React-Native Intern"}
          mobileNo={"979298..;)"}
        />
        <AttendanceCard
          EmployeeName={"Aditya Raj"}
          Email={"aditya@gmail.com"}
          Role={"React-Native Intern"}
          mobileNo={"979298..;)"}
        />
        <AttendanceCard
          EmployeeName={"Aditya Raj"}
          Email={"aditya@gmail.com"}
          Role={"React-Native Intern"}
          mobileNo={"979298..;)"}
        />
        <AttendanceCard
          EmployeeName={"Aditya Raj"}
          Email={"aditya@gmail.com"}
          Role={"React-Native Intern"}
          mobileNo={"979298..;)"}
        />
      </ScrollView>
    </View>
  );
};

export default MyAttendance;

const styles = StyleSheet.create({});
