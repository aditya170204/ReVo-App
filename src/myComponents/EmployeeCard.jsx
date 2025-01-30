import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
// import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
// export default SvgComponent;
const EmployeeCard = ({ name, id, email, mobileNo }) => {
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
          <View
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
          </View>
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
                Employe Name :
              </Text>
              <Text style={{ fontSize: 15 }}>{name}</Text>
            </View>
            <View key={"e"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Employe ID :
              </Text>
              <Text style={{ fontSize: 15 }}>{id}</Text>
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
                Email Address :
              </Text>
              <Text style={{ fontSize: 15 }}>{email}</Text>
            </View>
            <View key={"h"} style={{ width: "47%" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Mobile Number :
              </Text>
              <Text style={{ fontSize: 15 }}>{mobileNo}</Text>
            </View>
          </View>
          {/* <View
            // key={"c"}
            style={{
              flexDirection: "row",
              // justifyContent: "center",
              // gap: "15%",
              width: "45%",

              // backgroundColor: "orange",
            }}
          >
            <View>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Employee Name :
              </Text>
              <Text style={{ fontSize: 15 }}>{name}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Employee ID :
              </Text>
              <Text style={{ fontSize: 15 }}>{id}</Text>
            </View>
          </View>
          <View
            // key={"c"}
            style={{
              flexDirection: "row",
              // justifyContent: "center",
              // gap: "15%",
              width: "45%",
              // paddingLeft: "10%",

              // backgroundColor: "orange",
            }}
          >
            <View>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Email Address :
              </Text>
              <Text style={{ fontSize: 15 }}>{email}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Mobile Number :
              </Text>
              <Text style={{ fontSize: 15 }}>{mobileNo}</Text>
            </View>
          </View> */}
          {/* <View
            // key={"c"}
            style={{
              // flexDirection: "row",
              justifyContent: "flex-end",

              gap: 20,
              width: "44%",

              // backgroundColor: "orange",
            }}
          >
            <View>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Employee ID :
              </Text>
              <Text style={{ fontSize: 15 }}>{id}</Text>
            </View>
            <View style={{ backgroundColor: "pink" }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                Mobile Number :
              </Text>
              <Text style={{ fontSize: 15 }}>{mobileNo}</Text>
            </View>
          </View> */}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderTopWidth: 0.5,
          borderColor: "#7C7C7C",
          // paddingVertical: 10,
          // marginBottom: 30,
          // backgroundColor: "orange",
        }}
      >
        <TouchableOpacity
          style={{
            width: "33.5%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,

            padding: 10,
          }}
        >
          {/* <FontAwesome
            name={"exclamation-circle"}
            size={23}
            color={"#898989"}
          /> */}
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={15}
            fill="none"
            // {...props}
          >
            <Path
              fill="#7C7C7C"
              d="M8 .11C4.08.11.9 3.29.9 7.21c0 3.92 3.18 7.1 7.1 7.1 3.92 0 7.1-3.18 7.1-7.1 0-3.92-3.18-7.1-7.1-7.1ZM6.86 2.39h2.28v6.5H6.86v-6.5Zm2.15 9.3c-.26.23-.59.35-1.01.35-.42 0-.75-.11-1.01-.33-.26-.22-.38-.5-.38-.85 0-.36.13-.66.38-.89.26-.24.59-.35 1.01-.35.42 0 .75.12 1.01.35.26.23.38.52.38.86 0 .34-.13.63-.38.86Z"
            />
          </Svg>
          <Text style={{ fontSize: 15, fontWeight: "600", color: "#9D9D9D" }}>
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRightWidth: 0.5,
            borderLeftWidth: 0.5,
            borderColor: "#7C7C7C",
            width: "33.3%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          {/* <FontAwesome name={"check-circle"} size={23} color={"#898989"} /> */}
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={16}
            fill="none"
            // {...props}
          >
            <Path
              fill="#7C7C7C"
              d="M7.5.88A7.18 7.18 0 0 0 .32 8.06c0 3.96 3.22 7.18 7.18 7.18 3.96 0 7.18-3.22 7.18-7.18A7.18 7.18 0 0 0 7.5.88Zm4.97 3.97h-.03c-.94.1-1.87.56-2.73 1.2-.87.66-1.67 1.49-2.35 2.32-.68.83-1.25 1.66-1.65 2.3-.41.64-.65 1.09-.7 1.17l-.88-.7-1.6-2.77 1.82.92c.01-.02.03-.04.04-.06.01-.01.03-.03.04-.05.01-.02.03-.04.04-.06.02-.02.04-.04.05-.06.07-.09.14-.18.2-.27.06-.07.11-.14.16-.21.02-.01.02-.02.03-.03.01-.01.01-.02.02-.02.07-.08.13-.17.2-.25.07-.08.13-.16.2-.24.03-.04.07-.08.1-.12.01-.01.01-.02.02-.02.01-.02.02-.04.04-.05.05-.07.1-.13.16-.19.05-.07.1-.13.16-.19.05-.05.09-.1.14-.15l.01-.01.01-.01c.05-.05.09-.1.14-.15.05-.05.09-.1.13-.14.04-.04.08-.1.13-.15l.07-.07.01-.01s.01 0 .01-.01l.04-.04.12-.12c.04-.04.08-.08.12-.11.03-.04.07-.07.11-.11.02-.02.04-.04.07-.06l.01-.01c.01-.01.03-.02.04-.04.03-.03.07-.06.1-.09s.07-.06.1-.09.07-.06.1-.09.07-.06.1-.09l.01-.01c.03-.02.06-.05.08-.07.03-.03.06-.05.09-.08.02-.02.05-.04.08-.06.03-.02.06-.05.09-.07a.27.27 0 0 1 .08-.07c.03-.02.05-.04.08-.06.03-.02.05-.04.08-.06.03-.02.05-.04.08-.06.02-.02.05-.04.07-.06.02-.02.05-.04.07-.05 0 0 .01 0 .01-.01.02-.02.04-.03.07-.05.02-.02.05-.03.07-.05.03-.01.05-.02.07-.04.02-.02.05-.03.07-.04.03-.02.05-.03.07-.05.02-.01.04-.03.07-.04.02-.01.04-.03.07-.04.02-.01.04-.03.06-.04l.06-.03c.02-.01.04-.02.06-.04l.06-.03s.01 0 .01-.01c.02-.01.03-.02.05-.03.03-.01.05-.02.07-.03.02-.01.03-.02.05-.03l.06-.03.06-.03.06-.03c.02 0 .04-.01.05-.02l.06-.03c.02-.01.04-.01.06-.02.02-.01.03-.01.05-.02.02-.01.04-.02.05-.02.01 0 .02-.01.02-.01.01 0 .02-.01.03-.01.03-.01.05-.02.07-.03.02-.01.03-.01.05-.02.02-.01.04-.01.05-.02.02-.01.04-.01.06-.02.02-.01.04-.01.05-.02.02 0 .04 0 .06-.01.02-.01.03-.01.05-.01.02-.01.04-.01.06-.02.02-.01.04-.01.05-.01.01 0 .02 0 .03-.01.01 0 .01 0 .02-.01.02 0 .04-.01.05-.01.02 0 .04-.01.06-.01.02 0 .04-.01.06-.01.02 0 .04-.01.06-.01.02 0 .04-.01.05-.01.01 0 .03 0 .04-.01.01 0 .03 0 .04-.01H10.98c.05 0 .09.01.13.01.03 0 .05.01.07.01h.03c.03.01.06.01.08.02.02.01.04.01.05.02.01 0 .02.01.02.01s.01 0 .02.01h.02l1.05.52c.03.01.03.01.02.01Z"
            />
          </Svg>

          <Text style={{ fontSize: 15, fontWeight: "600", color: "#9D9D9D" }}>
            Approved
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "33.4%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={16}
            fill="none"
            // {...props}
          >
            <Path
              fill="#7C7C7C"
              d="M7.5.91C3.55.91.35 4.12.35 8.06s3.2 7.15 7.15 7.15 7.15-3.2 7.15-7.15S11.45.91 7.5.91Zm2.36 11.71L7.5 9.17l-2.36 3.46H3.49l3.19-4.67L3.63 3.5h1.65L7.5 6.76 9.73 3.5h1.65L8.33 7.96l3.18 4.66H9.86Z"
            />
          </Svg>
          <Text style={{ fontSize: 15, fontWeight: "600", color: "#9D9D9D" }}>
            Rejected
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({});
