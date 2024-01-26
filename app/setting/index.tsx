import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { Pressable, Switch, Text, View } from "react-native";
import config from "../../constants/config";
import { StatusBar } from "expo-status-bar";
import ItemLink from "@/components/ItemList";

export default function AllPromo() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center dark:bg-black">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View className="max-w-full h-full flex flex-col my-3 px-4">
        <ItemLink
          href="/setting/changePassword"
          title="Ganti Password"
          icon="key-outline"
        />
        <ItemLink
          href="/setting/address"
          title="Daftar Alamat"
          icon="location-outline"
        />
        <Pressable onPress={toggleColorScheme}>
          <View className="w-full flex flex-row justify-evenly gap-2 items-center border-b border-secondary">
            <Ionicons
              name={colorScheme == "dark" ? "moon-outline" : "sunny-outline"}
              size={20}
              color={colorScheme == "dark" ? "white" : config.colors.primary}
            />
            <View className="w-[72%]">
              <Text className="dark:text-white font-semibold text-md">
                Dark Mode
              </Text>
            </View>
            <Switch
              value={colorScheme == "dark"}
              onChange={toggleColorScheme}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
