import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderHome() {
  return (
    <View className="w-full h-24 flex flex-row items-end justify-between bg-primary px-4 pb-5">
      <View>
        <Text className="text-white text-lg font-semibold">Hi. Faisal</Text>
      </View>
      <View className="flex flex-row gap-2">
        <Ionicons name="chatbox-ellipses-outline" size={22} color="white" />
        <Ionicons name="notifications-outline" size={22} color="white" />
        <Ionicons name="cart-outline" size={22} color="white" />
      </View>
    </View>
  );
}
