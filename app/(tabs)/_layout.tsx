import { Tabs } from "expo-router/tabs";
import Header from "../../components/Header";
import HeaderHome from "../../components/Header/home";
import { Ionicons } from "@expo/vector-icons";
import config from "../../utils/config";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => <HeaderHome />,
          tabBarIcon: (icon) => (
            <Ionicons
              name="home"
              size={22}
              color={icon.focused ? config.colors.primary : "black"}
            />
          ),
          tabBarIconStyle: {
            color: config.colors.primary,
          },
          href: "/",
        }}
      />
      <Tabs.Screen
        name="promo"
        options={{
          title: "Promo",
          header: () => <Header title="Promo" />,
          tabBarActiveTintColor: config.colors.primary,
          tabBarIcon: (icon) => (
            <MaterialCommunityIcons
              name="brightness-percent"
              size={22}
              color={icon.focused ? config.colors.primary : "black"}
            />
          ),
          href: "/promo",
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaction",
          header: () => <Header title="Transaction" />,
          tabBarActiveTintColor: config.colors.primary,
          tabBarIcon: (icon) => (
            <Ionicons
              name="receipt"
              size={22}
              color={icon.focused ? config.colors.primary : "black"}
            />
          ),
          href: "/transaction",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarActiveTintColor: config.colors.primary,
          tabBarIcon: (icon) => (
            <Ionicons
              name="person-circle"
              size={22}
              color={icon.focused ? config.colors.primary : "black"}
            />
          ),
          href: "/account",
        }}
      />
    </Tabs>
  );
}
