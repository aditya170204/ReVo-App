import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./src/components/Dashboard";
import Users from "./src/components/Users";
import Teams from "./src/components/Teams";
import Attendance from "./src/components/Attendance";
import Leaves from "./src/components/Leaves";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileDetails from "./src/screens/dashboard/ProfileDetails";
import Notification from "./src/screens/dashboard/Notification";
import Settings from "./src/screens/dashboard/Settings";
import AllOfferLetters from "./src/screens/Users/AllOfferLetters";
import CreateOfferLetter from "./src/screens/Users/CreateOfferLetter";
import AddEmployee from "./src/screens/Users/AddEmployee";
import AddEmployeeAddressInfo from "./src/screens/Users/AddEmployeeAddressInfo";
import AddEmployeeBankInfo from "./src/screens/Users/AddEmployeeBankInfo";
import UploadOfferLetter from "./src/screens/Users/UploadOfferLetter";
import EmployeeDetails from "./src/screens/Users/EmployeeDetails";
import EmployeeDetailCard from "./src/myComponents/EmployeeDetailCard";
import TeamDetails from "./src/screens/Teams/TeamDetails";
import CreateTeam from "./src/screens/Teams/CreateTeam";
import UpdateTeam from "./src/screens/Teams/UpdateTeam";
import MyAttendance from "./src/screens/Attendance/MyAttendance";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MyLeaves from "./src/screens/Leaves/MyLeaves";
import ApplyForLeave from "./src/screens/Leaves/ApplyForLeave";
import LeaveDetails from "./src/screens/Leaves/LeaveDetails";
import { QueryClient, QueryClientProvider } from "react-query";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      // initialRouteName="AllOfferLetters"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#9A4D49",
      }}
    >
      <Tab.Screen
        name="DASHBOARD"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return <MaterialIcons name="dashboard" size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="USERS"
        component={Users}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return <FontAwesome5 name="users" size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="TEAMS"
        component={Teams}
        options={{
          tabBarIcon: ({ color, focussed, size }) => {
            return <FontAwesome6 name="people-group" size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="ATTENDANCE"
        component={Attendance}
        options={{
          tabBarIcon: ({ color, focussed, size }) => {
            return <FontAwesome6 name="calendar-check" size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="LEAVES"
        component={Leaves}
        options={{
          tabBarIcon: ({ color, focussed, size }) => {
            return (
              <MaterialCommunityIcons name="calendar-range-outline" size={30} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="AllOfferLetters" component={AllOfferLetters} />
            <Stack.Screen
              name="CreateOfferLetter"
              component={CreateOfferLetter}
            />
            <Stack.Screen name="AddEmployee" component={AddEmployee} />
            <Stack.Screen
              name="AddEmployeeAddressInfo"
              component={AddEmployeeAddressInfo}
            />
            <Stack.Screen
              name="AddEmployeeBankInfo"
              component={AddEmployeeBankInfo}
            />
            <Stack.Screen
              name="UploadOfferLetter"
              component={UploadOfferLetter}
            />
            <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
            <Stack.Screen
              name="EmployeeDetailCard"
              component={EmployeeDetailCard}
            />
            <Stack.Screen name="TeamDetails" component={TeamDetails} />
            <Stack.Screen name="CreateTeam" component={CreateTeam} />
            <Stack.Screen name="UpdateTeam" component={UpdateTeam} />
            <Stack.Screen name="MyAttendance" component={MyAttendance} />
            <Stack.Screen name="LeaveDetails" component={LeaveDetails} />
            <Stack.Screen name="MyLeaves" component={MyLeaves} />
            <Stack.Screen name="ApplyForLeave" component={ApplyForLeave} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
