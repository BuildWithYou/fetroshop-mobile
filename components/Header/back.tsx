import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface HeaderProps {
  title: string;
}

export default function HeaderBack(params: HeaderProps) {
  return (
    <View className="w-full h-24 flex flex-row items-end gap-3 bg-primary px-4 pb-5">
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="white" />
      </Pressable>
      <View>
        <Text className="text-white text-lg font-semibold">{params.title}</Text>
      </View>
    </View>
  );
}
