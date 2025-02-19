import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SelectList } from "react-native-dropdown-select-list";
import EmployeeCard from "../myComponents/EmployeeCard";
import { useNavigation } from "@react-navigation/native";
import {
  UserListingData,
  UserListingDataPage,
  userListPage,
} from "../api/fetchApi";
import { useQuery } from "react-query";
import { myConsole } from "../utils/myConsole";
import { Button } from "@react-navigation/elements";

const Users = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("new");
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const data = [
    { key: "new", value: "new" },
    { key: "draft", value: "draft" },
    { key: "pending", value: "pending" },
    { key: "approved", value: "approved" },
    { key: "rejected", value: "rejected" },
    { key: "deactive", value: "deactive" },
  ];

  const fetchUsers = async () => {
    if (isFetching) return;
    setIsFetching(true);

    try {
      const fetchedData = await UserListingData({ status: selected });
      setUserList(fetchedData.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsFetching(false);
    }
  };
  const fetchuserListPage = async () => {
    if (isFetching) return;
    setIsFetching(true);

    try {
      const fetchedData = await userListPage(page);
      setPage((prevData) => [...prevData, ...fetchedData.data]);
    } catch (error) {
      console.error("error is", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [selected]);
  //
  // useEffect(() => {
  //   fetchuserListPage();
  // }, [page]);

  const loadMore = () => {
    // if (!isFetching) {
    // }
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 12 }}>
          All Employees
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AllOfferLetters");
          }}
          style={{
            backgroundColor: "#9A4D49",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 12,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            Offer Letter
          </Text>
        </TouchableOpacity>
      </View>

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
          <MaterialIcons color={"white"} name={"person-add"} size={25} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <SelectList
          defaultOption={"new"}
          boxStyles={{ borderWidth: 0.5 }}
          dropdownStyles={{
            borderWidth: 0.5,
          }}
          setSelected={(v) => {
            setSelected(v);
          }}
          data={data}
        />
      </View>

      <FlatList
        onEndReached={() => loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => {
          return isFetching ? (
            <View>
              <ActivityIndicator size={"large"} />
              {/* <Button onPress={loadMore}>load more</Button> */}
            </View>
          ) : null;
        }}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 170 }}
        data={userList}
        renderItem={({ item }) => {
          return (
            <EmployeeCard
              id={item?._id}
              email={item?.email}
              mobileNo={item?.mobile}
              name={item?.name}
              role={item?.role}
            />
          );
        }}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
