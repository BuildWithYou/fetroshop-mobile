import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Promo() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text>Promo</Text>
      <StatusBar style="auto" />
    </View>
  );
}
