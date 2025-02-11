import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TeamCard from "../myComponents/TeamCard";
import { getTeamList } from "../api/fetchApi";
import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "react-query";

const Teams = () => {
  const navigation = useNavigation();
  const {
    data: getTeamDetailsById,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => {
      return getTeamList({ getTeamDetailsById });
    },
    queryKey: ["getTeamDetailsById", "getTeamDetailsById"],
  });
  console.log("getTeamDetailsById", getTeamDetailsById?.data);
  return (
    <View style={{ padding: 20, marginTop: 20, gap: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 12 }}>
          All Teams
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateTeam");
          }}
          style={{
            backgroundColor: "#9A4D49",
            justifyContent: "center",
            alignItems: "center",
            // width: 110,
            // height: 50,
            padding: 10,
            borderRadius: 12,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            Create Teams
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Search"
        style={{
          borderWidth: 0.5,
          borderRadius: 20,
          paddingHorizontal: 20,
          borderColor: "#7C7C7C",
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 125 }}
        data={getTeamDetailsById?.data}
        renderItem={({ item }) => {
          console.log("first");
          return (
            <TeamCard
              onPress={() => {
                console.log("ewwqrewre");
                navigation.navigate("TeamDetails", { item });
              }}
              data={getTeamDetailsById}
              ManagerName={
                <View
                  key={"a"}
                  style={{ flexDirection: "row", flexWrap: "wrap" }}
                >
                  {item?.manager.map((el) => {
                    return <Text>{el?.name || "N/A"} </Text>;
                  })}
                </View>
              }
              teamLead={
                <View
                  key={"b"}
                  style={{ flexDirection: "row", flexWrap: "wrap" }}
                >
                  {item?.teamLead.map((el) => {
                    return <Text>{el?.name || "N/A"} </Text>;
                  })}
                </View>
              }
              teamName={item?.teamName}
              totalMembers={item?.size}
            />
          );
        }}
      />
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({});
