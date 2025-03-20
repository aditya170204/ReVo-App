import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { buttonIconSvg } from "../assets/svg/svg";
import CardButtons from "./CardButtons";

const EmployeeCard = ({ id, name, role, email, mobileNo, status }) => {
  const navigation = useNavigation();
  console.log("asdasd", id);
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
            onPress={() => navigation.navigate("EmployeeDetails", { id })}
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EmployeeDetails", { id });
          }}
          // key={"b"}
          style={{
            // backgroundColor: "green",
            width: "84.5%",
            rowGap: 15,
            padding: 10,
          }}
        >
          <View
            // key={"c"}
            style={{
              // backgroundColor: "pink",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View key={"d"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Employe Name :
              </Text>
              <Text style={{ fontSize: 15 }}>{name}</Text>
            </View>
            <View
              // key={"e"}
              style={{ width: "47%" }}
            >
              <Text style={{ fontWeight: "600", fontSize: 15 }}>Role :</Text>
              <Text style={{ fontSize: 15 }}>{role}</Text>
            </View>
          </View>
          <View
            // key={"f"}
            style={{
              // backgroundColor: "orange",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              //  key={"g"}
              style={{ width: "47%" }}
            >
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Email Address :
              </Text>
              <Text style={{ fontSize: 15 }}>{email}</Text>
            </View>
            <View
              // key={"h"}
              style={{ width: "47%" }}
            >
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Mobile Number :
              </Text>
              <Text style={{ fontSize: 15 }}>{mobileNo}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-evenly",
          borderTopWidth: status === "rejected" ? null : 0.5,
          borderColor: "#7C7C7C",

          // borderRightWidth:
          //   buttonTitle === "PENDING"
          //     ? 0.5
          //     : buttonTitle === "APPROVED"
          //     ? 0.5
          //     : null,

          // backgroundColor: "orange",
        }}
      >
        {status === "new" ? (
          <>
            <CardButtons
              buttonIcon={buttonIconSvg.pendingIcon}
              buttonTitle={"PENDING"}
              status={status}
              onPress={() => console.log("pending")}
            />
            <CardButtons
              buttonIcon={buttonIconSvg.approvedIcon}
              buttonTitle={"APPROVED"}
              status={status}
            />
            <CardButtons
              buttonIcon={buttonIconSvg.rejectIcon}
              buttonTitle={"REJECTED"}
              status={status}
            />
          </>
        ) : status === "draft" ? (
          <CardButtons
            buttonIcon={buttonIconSvg.rejectIcon}
            buttonTitle={"Edit"}
            status={status}
          />
        ) : status === "pending" ? (
          <>
            <CardButtons
              buttonIcon={buttonIconSvg.approvedIcon}
              buttonTitle={"APPROVED"}
              status={status}
            />
            <CardButtons
              buttonIcon={buttonIconSvg.rejectIcon}
              buttonTitle={"REJECTED"}
              status={status}
            />
          </>
        ) : status === "approved" ? (
          <>
            <CardButtons
              buttonIcon={buttonIconSvg.editIcon}
              buttonTitle={"EDIT"}
              status={status}
            />
            <CardButtons
              buttonIcon={buttonIconSvg.deActivate}
              buttonTitle={"DEACTIVATE"}
              status={status}
            />
          </>
        ) : status === "deactive" ? (
          <CardButtons
            buttonIcon={buttonIconSvg.activate}
            buttonTitle={"ACTIVATE"}
            status={status}
          />
        ) : null}
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({});
