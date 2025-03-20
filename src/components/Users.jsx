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
import { UserListingData } from "../api/fetchApi";
import { myConsole } from "../utils/myConsole";

const Users = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("new");
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  // const [pageNo, setPageNo] = useState(1);
  // const [totalPage, setTotalPage] = useState(1);
  const [pagination, setPagination] = useState({});

  const datas = [
    { key: "draft", value: "draft" },
    { key: "new", value: "new" },
    { key: "pending", value: "pending" },
    { key: "approved", value: "approved" },
    { key: "rejected", value: "rejected" },
    { key: "deactive", value: "deactive" },
  ];

  const fetchUsers = async () => {
    if (isFetching) return;
    setIsFetching(true);

    try {
      // Reset the page when filter changes
      if (page === 1) {
        setUserList([]);
      }

      const fetchedData = await UserListingData({
        status: selected,
        page: page,
      });

      setUserList((prevData) => [...prevData, ...fetchedData.data]);
      setPagination(fetchedData.pagination);
      // setPageNo(fetchedData.pagination.currentPage);
      // setTotalPage(fetchedData.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [selected, page]);

  const loadMore = () => {
    if (!isFetching && pagination?.hasNext) {
      setPage((prevPage) => prevPage + 1);
    }
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
            setPage(1); // Reset the page when filter changes
          }}
          data={datas}
        />
        <Text style={{ fontSize: 15, textAlign: "right" }}>
          Page ({pagination?.currentPage || 1}/{pagination?.totalPages || 1})
        </Text>
      </View>

      <FlatList
        // onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => {
          if (pagination.hasNext === true) {
            return (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 50,
                }}
                onPress={loadMore}
              >
                {isFetching ? (
                  <View>
                    <ActivityIndicator size={"large"} />
                  </View>
                ) : (
                  <Text
                    style={{
                      backgroundColor: "lightgrey",
                      borderRadius: 20,
                      height: 28,
                      width: "90%",
                      color: "white",
                      fontSize: 15,
                      fontWeight: 600,
                      textAlignVertical: "center",
                      textAlign: "center",
                    }}
                  >
                    Load More
                  </Text>
                )}
              </TouchableOpacity>
            );
          }
        }}
        // ListFooterComponent={() => {
        //   return (
        //     <View>
        //       <ActivityIndicator size={"large"} />
        //     </View>
        //   );
        // }}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 190 }}
        data={userList}
        renderItem={({ item }) => {
          return (
            <EmployeeCard
              id={item?._id}
              email={item?.email}
              mobileNo={item?.mobile}
              name={item?.name}
              role={item?.role}
              status={selected}
            />
          );
        }}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
