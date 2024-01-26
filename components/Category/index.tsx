import React from "react";
import { Image, Text, View } from "react-native";

interface CategoryProps {
  src: any;
  title: string;
}

export default function Category({ src, title }: CategoryProps) {
  return (
    <View className="w-16 h-16 flex flex-col items-center justify-center">
      <Image className="w-14 h-14 bg-auto rounded-md" source={src} />
      <Text className="dark:text-white">{title}</Text>
    </View>
  );
}
