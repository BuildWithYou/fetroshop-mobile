import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Transaction() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text>Transaction</Text>
      <StatusBar style="auto" />
    </View>
  );
}
