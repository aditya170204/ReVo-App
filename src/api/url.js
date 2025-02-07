// https://revo-reality-api.onrender.com/api/users
// params->
// page: 1
// status: pending
// limit: 10
// search:
// role:
// startDateOfJoining:
// endDateofJoining:
// startDateOfCreated:
// endDateOfCreated:

import { useQuery } from "react-query";
import { UserListingData } from "./fetchApi";
import { FlatList } from "react-native-gesture-handler";
import EmployeeCard from "../myComponents/EmployeeCard";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PostUserName } from "./PostApi";

// axios.get("url", {
//   params: {
//     page: 1,
//   },
// });

// url = "https://revo-reality-api.onrender.com/api/users/getUserDetailsById";
// useid = "66c573a237c5bec1b48b2b26";
// params = "66c573a237c5bec1b48b2b26";
//

//
// const {
//   data: getUserDetailsById,
//   error,
//   isLoading,
// } = useQuery({
//   queryFn: () => {
//     return UserListingData({ getUserDetailsById });
//   },
//   queryKey: ["getUserDetailsById", "getUserDetailsById"],
// });
// console.log("getUserDetailsById", getUserDetailsById?.data);

// <FlatList
//   data={getUserDetailsById?.data}
//   renderItem={({ item }) => {
//     return (
//       <EmployeeCard
//         email={item?.email}
//         id={item?._id}
//         name={item?.name}
//         role={item?.role}
//         mobileNo={item?.mobile}
//       />
//     );
//   }}
// />;

//
//

// const { data: getUserDetailsById
//     error
//  } = useQuery({
//   queryFn: () => {
//     "getUserDetailsById", "getUserDetailsById";
//   },
//   queryKey: ["getUserDetailsById", "getUserDetailsById"],
// });
// console.log("getUserDetailsById", item);

// const { data: getUserDetailsById } = useQuery({
//   queryFn: () => {
//     "getUserDetailsById", "getUserDetailsById";
//   },
//   queryKey: ["getUserDetailById", "getUserDetailsById"],
// });

// <FlatList
//   data={getUserDetailsById?.data}
//   renderItem={({ item }) => {
//     return (
//       <EmployeeCard
//         email={item?.email}
//         id={item?._id}
//         mobileNo={item?.mobile}
//         name={item?.name}
//         role={item?.role}
//       />
//     );
//   }}
// />;

// const navigation = useNavigation();
// const { data: getUserDetailById } = useQuery({
//   queryFn: () => {
//     "getUserDetailById", "getUserDetailById";
//   },
//   queryKey: ["getUserDetailById", "getUserDetailById"],
// });

{
  /* <FlatList
  data={getUserDetailById?.data}
  renderItem={({ item }) => {
    return (
      <EmployeeCard
        email={item?.email}
        id={item?._id}
        mobileNo={item?.mobileNo}
        name={item?.name}
        role={item?.role}
      />
    );
  }}
/>; */
}

// const { params } = useRoute();
// console.log("abcdef", params?.id);

// const { data: getUserDetailsById } = useQuery({
//   queryFn: () => {
//     return PostUserName({ _id: params?.data });
//   },
//   queryKey: ["getUserDetailsById", params?.id],
//   enabled: !params?.id,
// });
// console.log("getUserDetailsById", getUserDetailsById?.data?.name);

// const { data: getUserDetailsById } = useQuery({
//   queryFn: () => {
//     return PostUserName();
//   },
//   queryKey: ["getUserList"],
// });

const { data: getUserDetailsById } = useQuery({
  queryFn: () => {
    return PostUserName();
  },
  queryKey: ["getUserList"],
});
