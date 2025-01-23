import { ScrollView, StyleSheet, Text, View } from "react-native";

import React from "react";

const Dashboard = () => {
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View
        style={{
          // width: "100%",
          // alignItems: "center",
          gap: 20,
          // flex: 1,
          // marginBottom: 500,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>Profile Area</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 300,
            borderWidth: 1,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontFamily: "roboto",
              fontSize: 25,
              color: "#2B2B2B",
              borderColor: "red",
              borderWidth: 1,
              marginBottom: 10,
            }}
          >
            Employees Status
          </Text>
          <View
            style={{ width: "60%", borderWidth: 1, borderColor: "#5D5D5D" }}
          />
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "green",
              width: "80%",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 90,
                backgroundColor: "blue",
                height: "85%",
                width: "45%",
              }}
            >
              <Text style={{ color: "white" }}>graph</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                height: "75%",
                width: "45%",
                backgroundColor: "yellow",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                  }}
                />
                <Text>things on graph !</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                  }}
                />
                <Text>things on graph !</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                  }}
                />
                <Text>things on graph !</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                  }}
                />
                <Text>things on graph !</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderWidth: 1,
            borderRadius: 20,
            alignItems: "center",
            rowGap: 20,
            padding: 20,
          }}
        >
          <View style={{ flexDirection: "row", columnGap: 60 }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Text>employe score</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Text>employe score</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", columnGap: 60 }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Text>employe score</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Text>employe score</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderWidth: 1,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontFamily: "roboto",
              fontSize: 25,
              color: "#2B2B2B",
              borderColor: "red",
              borderWidth: 1,
              marginBottom: 10,
            }}
          >
            Working Days This Year
          </Text>
          <View
            style={{ width: "60%", borderWidth: 1, borderColor: "green" }}
          />
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "green",
              width: "80%",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
                backgroundColor: "blue",
                height: 300,
                width: "45%",
              }}
            >
              <Text style={{ color: "white" }}>graph</Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                height: 100,
                width: "45%",
                backgroundColor: "yellow",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                  }}
                />
                <Text>things on graph !</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                  }}
                />
                <Text>things on graph !</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginTop: 10,
              fontFamily: "roboto",
              fontSize: 25,
              color: "#2B2B2B",
              borderColor: "red",
              borderWidth: 1,
              marginBottom: 10,
            }}
          >
            Working Days This Month
          </Text>
          <View
            style={{ width: "60%", borderWidth: 1, borderColor: "#5D5D5D" }}
          />
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "green",
              width: "80%",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 90,
                backgroundColor: "blue",
                height: "100",
                width: "45%",
              }}
            >
              <Text style={{ color: "white" }}>graph</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                height: 200,
                width: "45%",
                backgroundColor: "yellow",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                  }}
                />
                <Text>things on graph !</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: 10,
                    width: 10,
                    borderRadius: 10,
                  }}
                />
                <Text>things on graph !</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
