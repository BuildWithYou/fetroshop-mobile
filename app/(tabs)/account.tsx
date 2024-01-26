import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Image, Pressable, ScrollView, Switch, Text, View } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import config from "../../constants/config";
import Button from "../../components/Button";
import ItemLink from "../../components/ItemList";

export default function Account() {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <ScrollView className="flex flex-col">
        <LinearGradient
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            height: 200,
          }}
          colors={[config.colors.primary, "transparent"]}
        />
        <View className="w-full my-1 px-4">
          <View className="w-full bg-light dark:bg-secondaryDark backdrop-blur rounded-lg">
            <View className="w-full flex flex-row items-center justify-evenly p-3">
              <View className="w-1/5 flex flex-col gap-1">
                <Image
                  className="w-20 h-20 bg-auto rounded-full"
                  source={require("../../assets/images/adaptive-icon.png")}
                />
              </View>
              <View className="w-2/3 flex flex-col gap-1">
                <Text className="text-lg font-bold dark:text-white ml-4">
                  M Faisal Asrozy
                </Text>
                <Text className="text-lg dark:text-white ml-4">085xxxxx</Text>
              </View>
              <View className="w-auto h-auto flex flex-row justify-center items-center">
                <Button
                  textClassName="p-0.5"
                  variant={
                    colorScheme == "dark" ? "outlineLight" : "outlineDark"
                  }
                  pill="full"
                >
                  <Ionicons
                    name="pencil-sharp"
                    size={14}
                    color={
                      colorScheme == "dark" ? config.colors.light : "black"
                    }
                  />
                </Button>
              </View>
            </View>
            <View className="w-full px-8">
              <View className="w-full flex flex-row items-center justify-evenly rounded-lg bg-slate-400 p-2">
                <View className="w-1/6 flex flex-col gap-1">
                  <Image
                    className="w-16 h-16 bg-auto rounded-full"
                    source={require("../../assets/images/adaptive-icon.png")}
                  />
                </View>
                <View className="w-2/3 flex flex-col gap-2">
                  <Text className="text-md font-semibold text-white ml-4">
                    NEWBIE
                  </Text>
                  <Text className="text-md text-white ml-4">
                    Anggota sejak 21 Nov 2020
                  </Text>
                </View>
                <View className="w-auto h-auto flex flex-row justify-center items-center">
                  <Button textClassName="p-0" variant="inlineLight">
                    <Ionicons
                      name="chevron-forward-circle-outline"
                      size={20}
                      color="white"
                    />
                  </Button>
                </View>
              </View>
            </View>
            <View className="w-full flex flex-row items-center justify-between p-3">
              <View className="w-1/3 flex flex-col items-center gap-1">
                <MaterialCommunityIcons
                  name="ticket-confirmation"
                  size={14}
                  color={colorScheme == "dark" ? "white" : "black"}
                />
                <View className="flex flex-row gap-1">
                  <Text className="text-sm dark:text-white">4</Text>
                  <Text className="text-sm dark:text-white">Voucher</Text>
                </View>
              </View>
              <View className="w-1/3 flex flex-col items-center gap-1">
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={14}
                  color={colorScheme == "dark" ? "white" : "black"}
                />
                <View className="flex flex-row gap-1">
                  <Text className="text-sm dark:text-white">4</Text>
                  <Text className="text-sm dark:text-white">Promo</Text>
                </View>
              </View>
              <View className="w-1/3 flex flex-col items-center gap-1">
                <Ionicons
                  name="star"
                  size={14}
                  color={colorScheme == "dark" ? "white" : "black"}
                />
                <View className="flex flex-row gap-1">
                  <Text className="text-sm dark:text-white">4</Text>
                  <Text className="text-sm dark:text-white">Star</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="max-w-full h-full flex flex-col my-3 px-4">
          <ItemLink
            href="/setting"
            title="Pengaturan"
            subTitle="Ganti Password, Daftar Alamat"
            icon="settings-outline"
          />
          <ItemLink href="/uknow" title="Rating & Ulasan" icon="star-outline" />
          <ItemLink
            href="/uknow"
            title="Atur Notifikasi"
            icon="notifications-outline"
          />
          <ItemLink
            href="/uknow"
            title="Ajak Teman Pakai Fetroshop"
            icon="people-outline"
          />
          <ItemLink href="/uknow" title="Go Green" icon="leaf-outline" />
          <ItemLink
            href="/uknow"
            title="Official Store"
            icon="storefront-outline"
          />
          <ItemLink
            href="/uknow"
            title="Panduan Pengguna"
            icon="book-outline"
          />
          <ItemLink
            href="/uknow"
            title="Pusat Bantuan"
            icon="help-circle-outline"
          />
          <ItemLink
            href="/about"
            title="Tentang Aplikasi"
            subTitle="Syarat Ketentuan & Kebijakan Privasi"
            icon="alert-circle-outline"
          />
        </View>
      </ScrollView>
    </View>
  );
}
