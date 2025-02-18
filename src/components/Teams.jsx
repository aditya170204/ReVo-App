// import {
//   ActivityIndicator,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import TeamCard from "../myComponents/TeamCard";
// import { getTeamList } from "../api/fetchApi";
// import { FlatList } from "react-native-gesture-handler";
// import { useQuery } from "react-query";

// const Teams = () => {
//   const navigation = useNavigation();

//   const [page, setPage] = useState(1);
//   const [teamList, setTeamList] = useState([]);
//   const [isFetching, setIsFetching] = useState(false);

//   // const {
//   //   data: getTeamDetailsById,
//   //   error,
//   //   isLoading,
//   // } = useQuery({
//   //   queryFn: () => {
//   //     return getTeamList({ getTeamDetailsById });
//   //   },
//   //   queryKey: ["getTeamDetailsById", "getTeamDetailsById"],
//   // });

//   // console.log("getTeamDetailsById", getTeamDetailsById?.data);

//   const fetchTeams = async () => {
//     if (isFetching) return;
//     setIsFetching(true);

//     try {
//       const fetchedData = await getTeamList(page);
//       setTeamList((prevData) => [...prevData, ...fetchedData.data]);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setIsFetching(false);
//     }
//   };

//   useEffect(() => {
//     fetchTeams();
//   }, [page]);

//   const loadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <View style={{ padding: 20, marginTop: 20, gap: 20 }}>
//       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//         <Text style={{ fontSize: 25, fontWeight: "bold", padding: 12 }}>
//           All Teams
//         </Text>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("CreateTeam");
//           }}
//           style={{
//             backgroundColor: "#9A4D49",
//             justifyContent: "center",
//             alignItems: "center",
//             // width: 110,
//             // height: 50,
//             padding: 10,
//             borderRadius: 12,
//             marginTop: 10,
//           }}
//         >
//           <Text style={{ color: "white", fontWeight: "600" }}>
//             Create Teams
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <TextInput
//         placeholder="Search"
//         style={{
//           borderWidth: 0.5,
//           borderRadius: 20,
//           paddingHorizontal: 20,
//           borderColor: "#7C7C7C",
//         }}
//       />

//       <FlatList
//         onEndReached={loadMore}
//         onEndReachedThreshold={0.1}
//         data={teamList}
//         ListFooterComponent={() => {
//           return isFetching ? (
//             <View>
//               <ActivityIndicator size={"large"} />
//             </View>
//           ) : null;
//         }}
//         showsVerticalScrollIndicator={false}
//         style={{ marginBottom: 125 }}
//         renderItem={({ item }) => {
//           console.log("first");
//           return (
//             <TeamCard
//               onPress={() => {
//                 console.log("ewwqrewre");
//                 navigation.navigate("TeamDetails", { item });
//               }}
//               data={item}
//               ManagerName={
//                 <View
//                   key={"a"}
//                   style={{ flexDirection: "row", flexWrap: "wrap" }}
//                 >
//                   {item?.manager.map((el) => {
//                     return <Text>{el?.name || "N/A"} </Text>;
//                   })}
//                 </View>
//               }
//               teamLead={
//                 <View
//                   key={"b"}
//                   style={{ flexDirection: "row", flexWrap: "wrap" }}
//                 >
//                   {item?.teamLead.map((el) => {
//                     return <Text>{el?.name || "N/A"} </Text>;
//                   })}
//                 </View>
//               }
//               teamName={item?.teamName}
//               totalMembers={item?.size}
//             />
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default Teams;

// const styles = StyleSheet.create({});

//
///
//
//
//
//
//

import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TeamCard from "../myComponents/TeamCard";
import { getTeamList } from "../api/fetchApi";
import { FlatList } from "react-native-gesture-handler";

const Teams = () => {
  const navigation = useNavigation();

  const [page, setPage] = useState(1);
  const [teamList, setTeamList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch team list from the API
  const fetchTeams = async () => {
    if (isFetching) return; // Prevent duplicate requests
    setIsFetching(true);

    try {
      const fetchedData = await getTeamList(page); // Get teams for the current page
      setTeamList((prevData) => [...prevData, ...fetchedData.data]); // Append new data to the list
    } catch (error) {
      console.error("Error fetching teams:", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchTeams(); // Fetch teams when the page changes
  }, [page]);

  const loadMore = () => {
    if (!isFetching) {
      setPage((prevPage) => prevPage + 1); // Increment page when user reaches bottom
    }
  };

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
        value={searchQuery} // Bind search input value
        onChangeText={(text) => setSearchQuery(text)} // Update searchQuery state
        placeholder="Search"
        style={{
          borderWidth: 0.5,
          borderRadius: 20,
          paddingHorizontal: 20,
          borderColor: "#7C7C7C",
        }}
      />

      <FlatList
        data={teamList} // Use teamList here
        onEndReached={loadMore} // Trigger loading of more data
        onEndReachedThreshold={0.1} // Trigger loadMore when user is 10% away from bottom
        ListFooterComponent={() => {
          return isFetching ? (
            <View>
              <ActivityIndicator size={"large"} />
            </View>
          ) : null;
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id.toString()} // Ensure each item has a unique key
        style={{ marginBottom: 125 }}
        renderItem={({ item }) => (
          <TeamCard
            onPress={() => {
              navigation.navigate("TeamDetails", { item });
            }}
            data={item} // Use item instead of teamList
            ManagerName={
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {item?.manager?.map((el, index) => (
                  <Text key={`manager-${index}`}>{el?.name || "N/A"} </Text>
                ))}
              </View>
            }
            teamLead={
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {item?.teamLead?.map((el, index) => (
                  <Text key={`lead-${index}`}>{el?.name || "N/A"} </Text>
                ))}
              </View>
            }
            teamName={item?.teamName}
            totalMembers={item?.size}
          />
        )}
      />
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({});
