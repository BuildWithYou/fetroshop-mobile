import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface HeaderProps {
  title: string;
}

export default function Header(params: HeaderProps) {
  return (
    <View className="w-full h-24 flex flex-row items-end justify-between bg-primary px-4 pb-5">
      <View>
        <Text className="text-white text-lg font-semibold">{params.title}</Text>
      </View>
      <Ionicons name="cart-outline" size={22} color="white" />
    </View>
  );
}
