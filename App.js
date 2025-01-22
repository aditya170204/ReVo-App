import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/Dashboard";
import Profile from "./src/components/Users";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./src/components/Dashboard";
import Users from "./src/components/Users";
import Teams from "./src/components/Teams";
import Attendance from "./src/components/Attendance";
import Leaves from "./src/components/Leaves";
const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DASHBOARD" component={Dashboard} />
        <Tab.Screen name="USERS" component={Users} />
        <Tab.Screen name="TEAMS" component={Teams} />
        <Tab.Screen name="ATTENDANCE" component={Attendance} />
        <Tab.Screen name="LEAVES" component={Leaves} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
