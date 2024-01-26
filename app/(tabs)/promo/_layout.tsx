import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import config from "../../../constants/config";
import { useColorScheme } from "nativewind";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function PromoLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colorScheme == "dark" ? "black" : "white",
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: "Harga Spesial",
          tabBarLabelStyle: { textTransform: "none" },
          tabBarActiveTintColor: config.colors.primary,
          tabBarInactiveTintColor: colorScheme == "dark" ? "white" : "black",
        }}
      />
      <MaterialTopTabs.Screen
        name="freeProduct"
        options={{
          title: "Gratis Produk",
          tabBarLabelStyle: { textTransform: "none" },
          tabBarActiveTintColor: config.colors.primary,
          tabBarInactiveTintColor: colorScheme == "dark" ? "white" : "black",
        }}
      />
      <MaterialTopTabs.Screen
        name="package"
        options={{
          title: "Paket",
          tabBarLabelStyle: { textTransform: "none" },
          tabBarActiveTintColor: config.colors.primary,
          tabBarInactiveTintColor: colorScheme == "dark" ? "white" : "black",
        }}
      />
    </MaterialTopTabs>
  );
}
