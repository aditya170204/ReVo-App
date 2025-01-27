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
// import ProfileDetails from "./src/screens/dashboard/ProfileDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="DASHBOARD"
      screenOptions={{
        // headerShown: false,
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
