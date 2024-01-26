import ItemLink from "@/components/ItemList";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Text, View } from "react-native";

export default function About() {
  const { colorScheme } = useColorScheme();
  return (
    <View className="flex-1 items-center dark:bg-black">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View className="max-w-full h-full flex flex-col my-3 px-4">
        <ItemLink
          href="/about/terms"
          title="Syarat Ketentuan"
          icon="shield-half-outline"
        />
        <ItemLink
          href="/about/privacy"
          title="Kebijakan Privasi"
          icon="shield-checkmark-outline"
        />
      </View>
    </View>
  );
}
