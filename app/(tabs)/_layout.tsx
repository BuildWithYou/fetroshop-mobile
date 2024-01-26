import { Tabs } from "expo-router/tabs";
import Header from "../../components/Header";
import HeaderHome from "../../components/Header/home";
import config from "../../constants/config";
import { useColorScheme } from "nativewind";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colorScheme == "dark" ? "black" : "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => <HeaderHome />,
          tabBarActiveTintColor: config.colors.primary,
          tabBarIcon: (icon) => (
            <Ionicons
              name="home"
              size={22}
              color={
                icon.focused ? config.colors.primary : config.colors.secondary
              }
            />
          ),
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
              color={
                icon.focused ? config.colors.primary : config.colors.secondary
              }
            />
          ),
          href: "/promo",
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaksi",
          header: () => <Header title="Riwayat Transaksi" />,
          tabBarActiveTintColor: config.colors.primary,
          tabBarIcon: (icon) => (
            <Ionicons
              name="receipt"
              size={22}
              color={
                icon.focused ? config.colors.primary : config.colors.secondary
              }
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
          headerStyle: {
            backgroundColor: config.colors.primary,
          },
          headerTitleStyle: {
            color: "#fff",
          },
          tabBarIcon: (icon) => (
            <Ionicons
              name="person-circle"
              size={22}
              color={
                icon.focused ? config.colors.primary : config.colors.secondary
              }
            />
          ),
          href: "/account",
        }}
      />
    </Tabs>
  );
}
