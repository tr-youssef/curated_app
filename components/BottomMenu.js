import React from "react";
import { Icon } from "@rneui/themed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../src/Home.js";
import Map from "../src/Home.js";
import Tasks from "../src/Tasks.js";
import Mentors from "../src/Mentors.js";
import Profile from "../src/Profile.js";
import ActionsButton from "./ActionsButton.js";

const BottomMenu = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#EBECF7",
      borderTopWidth: 0,
      paddingTop: 10,
    },
    tabBarActiveTintColor: "#3F49A4",
    tabBarInactiveTintColor: "rgba(63, 73, 164, 0.4)",
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={screenOptions} initialRouteName="Actions">
          <Tab.Screen
            name="Home"
            component={Home}
            options={({ route }) => ({
              tabBarLabel: "Home",
              tabBarIcon: ({ focused }) => (
                <Icon
                  color={focused ? "#3F49A4" : "rgba(63, 73, 164, 0.4)"}
                  name="home"
                  type="feather"
                />
              ),
              headerShown: false,
            })}
          />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarLabel: "Map",
              tabBarIcon: ({ focused }) => (
                <Icon
                  color={focused ? "#3F49A4" : "rgba(63, 73, 164, 0.4)"}
                  name="map-pin"
                  type="feather"
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Actions"
            component={Tasks}
            options={{
              tabBarLabel: "Actions",
              tabBarIcon: ({ focused }) => <ActionsButton />,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Mentors"
            component={Mentors}
            options={{
              tabBarLabel: "Mentors",
              tabBarIcon: ({ focused }) => (
                <Icon
                  color={focused ? "#3F49A4" : "rgba(63, 73, 164, 0.4)"}
                  name="people-outline"
                  type="ionicon"
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon
                  color={focused ? "#3F49A4" : "rgba(63, 73, 164, 0.4)"}
                  name="user"
                  type="evilicon"
                />
              ),

              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default BottomMenu;
