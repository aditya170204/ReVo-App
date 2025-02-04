import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import SvgComponent from "./SvgComponent";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const OfferLetterCard = ({ name, dateOfCreation, createdBy, status }) => {
  const navigation = useNavigation();
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
  // export default SVGComponent;
  return (
    <View
      style={{
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#7C7C7C",
        marginTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          // backgroundColor: "yellow",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EmployeeDetails");
          }}
          //   key={"a"}
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#E9A80A",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>E</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EmployeeDetails");
          }}
          style={{
            flexDirection: "row",
            //   backgroundColor: "pink",
            justifyContent: "center",
            gap: 50,
            marginLeft: 10,
            margin: 15,
          }}
        >
          <View
            // key={"c"}
            style={{
              // flexDirection: "row",
              justifyContent: "space-around",
              gap: 20,

              // backgroundColor: "red",
            }}
          >
            <View>
              <Text style={{ fontWeight: "600" }}>Employee Name :</Text>
              <Text>{name}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600" }}>Created By :</Text>
              <Text>{createdBy}</Text>
            </View>
          </View>
          <View
            // key={"d"}
            style={{
              // flexDirection: "row",
              justifyContent: "space-around",
              gap: 20,

              // backgroundColor: "green",
            }}
          >
            <View>
              <Text style={{ fontWeight: "600" }}>Date Of Creation :</Text>
              <Text>{dateOfCreation}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600" }}>Status :</Text>
              <Text>{status}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          borderTopWidth: 0.5,
          borderColor: "#7C7C7C",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          paddingVertical: 10,
          //   marginVertical: 10,

          gap: 10,
        }}
      >
        {/* <FontAwesome name={"trash-o"} size={23} color={"#7C7C7C"} /> */}
        <Svg
          width={21}
          height={21}
          viewBox="0 0 11 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // {...props}
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

        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#9D9D9D" }}>
          DELETE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OfferLetterCard;

const styles = StyleSheet.create({});
