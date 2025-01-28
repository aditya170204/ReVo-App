import { ScrollView, StyleSheet, Text, View } from "react-native";

import React from "react";
import CountCard from "../myComponents/CountCard";
import CountCard2 from "../myComponents/CountCard2";
import GraphCard from "../myComponents/GraphCard";
import ProfileArea from "./dashboardCom/ProfileArea";

const Dashboard = () => {
  let bord = true;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginHorizontal: 20, marginTop: 50 }}
    >
      <View
        style={{
          gap: 20,
          marginBottom: 5,
        }}
      >
        <View>
          <ProfileArea />
        </View>
        <GraphCard
          border={true}
          sectionTitle={"Employees Status"}
          graphName={"BOSTONS"}
          arrtitles={[
            { color: "#E9A80A", title: "NEW" },
            { color: "#FF8A00", title: "DRAFT" },
            { color: "#4ABC04", title: "ACTIVE" },
            { color: "#740707", title: "DEACTIVATED" },
            { color: "#FF0000", title: "REJECTED" },
          ]}
        />
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <CountCard count={"44"} title="Present Employee" />
            <CountCard count={"03"} title="Employees Absent" />
            <CountCard count={"09"} title="Leave Applications" />
            <CountCard count={"03"} title="New Employees Added" />
          </View>
        </View>
        <CountCard2
          arrData={[
            { a: 10, b: "sdfds msdfsd" },
            { a: 20, b: " msdfsd" },
            { a: 30, b: "sdfds " },
            { a: 40, b: "sdfdsfsd" },
          ]}
        />
        <View
          style={{
            width: "100%",
            borderWidth: 1,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <GraphCard
            sectionTitle={"Working Days This Year"}
            graphName={"YEARLY"}
            arrtitles={[
              { color: "#0095FF", title: "WORKING DAYS" },
              { color: "#4ABC04", title: "PUBLIC HOLIDAYS" },
            ]}
          />

          <GraphCard
            graphSize={"normal"}
            sectionTitle={"Working Days This Month"}
            graphName={"MONTHLY"}
            arrtitles={[
              { color: "#F6C244", title: "WORKING DAYS" },
              { color: "#FF8A00", title: "PUBLIC HOLIDAYS" },
            ]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
