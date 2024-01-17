import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Account() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text>Account</Text>
      <StatusBar style="auto" />
    </View>
  );
}
