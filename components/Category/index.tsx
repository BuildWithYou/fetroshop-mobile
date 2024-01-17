import React from "react";
import { Image, Text, View } from "react-native";

interface CategoryItemProps {
  src: any;
  title: string;
}

export default function CategoryItem({ src, title }: CategoryItemProps) {
  return (
    <View className="w-16 h-16 flex flex-col items-center justify-center">
      <Image className="w-14 h-14 rounded-md" source={src} />
      <Text>{title}</Text>
    </View>
  );
}
