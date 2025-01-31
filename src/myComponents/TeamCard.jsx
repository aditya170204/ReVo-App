import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
// import React from "react";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#7C7C7C"
      d="M7.5.91C3.55.91.35 4.11.35 8.06s3.2 7.15 7.15 7.15 7.15-3.2 7.15-7.15S11.45.91 7.5.91Zm2.36 11.71L7.5 9.17l-2.36 3.46H3.49l3.19-4.67L3.63 3.5h1.65L7.5 6.76 9.73 3.5h1.65L8.33 7.96l3.18 4.66H9.86Z"
    />
  </Svg>
);

const TeamCard = ({ teamName, ManagerName, teamLead, totalMembers }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#7C7C7C",
        // backgroundColor: "red",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          // backgroundColor: "yellow",
          gap: 10,
        }}
      >
        <View style={{ width: "13%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("TeamDetails")}
            // key={"a"}
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
        </View>
        <View
          key={"b"}
          style={{
            // backgroundColor: "green",
            width: "84.5%",
            rowGap: 15,
            padding: 10,
          }}
        >
          <View
            key={"c"}
            style={{
              // backgroundColor: "pink",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View key={"d"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Team Name :
              </Text>
              <Text style={{ fontSize: 15 }}>{teamName}</Text>
            </View>
            <View key={"e"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Manager Name :
              </Text>
              <Text style={{ fontSize: 15 }}>{ManagerName}</Text>
            </View>
          </View>
          <View
            key={"f"}
            style={{
              // backgroundColor: "orange",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View key={"g"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Team Lead :
              </Text>
              <Text style={{ fontSize: 15 }}>{teamLead}</Text>
            </View>
            <View key={"h"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Total Members :
              </Text>
              <Text style={{ fontSize: 15 }}>{totalMembers}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderTopWidth: 0.5,
          borderColor: "#7C7C7C",

          //   backgroundColor: "orange",
        }}
      >
        <TouchableOpacity
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
            padding: 10,
            borderRightWidth: 0.5,
            borderColor: "#7C7C7C",
          }}
          onPress={() => navigation.navigate("UpdateTeam")}
        >
          {/* <FontAwesome
                name={"exclamation-circle"}
                size={23}
                color={"#898989"}
              /> */}

          <Svg
            width={23}
            height={23}
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // {...props}
          >
            <Path
              d="M6.84004 7.39003V8.35003H6.31004L7.40004 10.24L8.48004 8.32003L7.82004 8.30003L7.84004 6.36003H7.38004L8.34004 4.62003L9.28004 6.36003H8.78004V7.43003C8.78004 7.43003 13.46 7.43003 13.48 7.43003C14.69 7.43003 15.53 6.28003 15.02 5.16003C14.58 4.20003 13.61 3.88003 12.61 4.02003C12.61 4.02003 12.88 1.59003 10.41 0.900034C10.41 0.900034 8.25004 0.0300339 6.89004 2.48003C6.89004 2.48003 4.82004 0.560034 3.37004 3.33003C3.36004 3.35003 2.97004 3.35003 2.93004 3.36003C2.61004 3.41003 2.28004 3.49003 1.97004 3.63003C1.00004 4.09003 0.520038 5.22003 1.03004 6.19003C1.47004 7.04003 2.38004 7.41003 3.30004 7.43003L6.84004 7.39003Z"
              fill="#7C7C7C"
            />
          </Svg>
          <Text style={{ fontSize: 15, fontWeight: "600", color: "#9D9D9D" }}>
            UPDATE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
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
          <Text style={{ fontSize: 15, fontWeight: "600", color: "#9D9D9D" }}>
            DELETE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamCard;

const styles = StyleSheet.create({});
