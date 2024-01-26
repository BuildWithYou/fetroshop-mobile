import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import config from "../../constants/config";
import { useColorScheme } from "nativewind";
import { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";

interface ItemLinkProps {
  icon: any;
  title: string;
  subTitle?: string;
  href: any;
}

export default function ItemLink({
  icon,
  title,
  subTitle,
  href,
}: ItemLinkProps) {
  const { colorScheme } = useColorScheme();

  return (
    <Link href={href} asChild>
      <Pressable className="w-full flex flex-row justify-evenly gap-2 items-center border-b border-secondary py-4">
        <Ionicons
          name={icon}
          size={20}
          color={colorScheme == "dark" ? "white" : config.colors.primary}
        />
        <View className="w-4/5">
          {title && (
            <Text className="dark:text-white font-semibold text-md">
              {title}
            </Text>
          )}
          {subTitle && (
            <Text className="text-sm dark:text-white">{subTitle}</Text>
          )}
        </View>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={colorScheme == "dark" ? "white" : config.colors.primary}
        />
      </Pressable>
    </Link>
  );
}
