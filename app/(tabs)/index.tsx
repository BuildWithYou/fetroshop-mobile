import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import config from "../../utils/config";
import Button from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Banner from "../../components/Banner";
import CategoryItem from "../../components/Category";
import ProductCard from "../../components/ProductCard";
import { router } from "expo-router";

const icon = require("../../assets/icon.png");
const product = [
  {
    id: 1,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 2,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 0,
    image: "",
  },
  {
    id: 3,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 4,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 5,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 6,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 7,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 8,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 9,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 10,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
  {
    id: 11,
    name: "Fruit Tea Blackcurrant",
    price: 10000,
    promo: 7000,
    image: "",
  },
];

export default function Home() {
  return (
    <View className="flex-1 flex-col items-center">
      <StatusBar style="auto" />
      <ScrollView className="flex flex-col">
        <LinearGradient
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            height: 300,
          }}
          colors={[config.colors.primary, "transparent"]}
        />
        <View className="w-full flex flex-row items-center justify-evenly gap-2 py-2 px-2 my-1">
          <View className="w-5/6 flex flex-row items-center justify-between bg-light border border-primary rounded-md py-2 px-3">
            <Ionicons name="search" size={22} color="black" />
            <View className="w-3/4 text-start border-r border-r-secondary">
              <Text>Cari barang apa?</Text>
            </View>
            <Ionicons name="qr-code-outline" size={22} color="black" />
          </View>
          <View className="w-auto flex flex-row items-center justify-center bg-light rounded-full p-2">
            <Ionicons name="heart" size={22} color={config.colors.danger} />
          </View>
        </View>
        <View className="w-full my-1 px-4">
          <View className="w-full bg-light rounded-md">
            <View className="w-full flex flex-row items-center justify-between p-3">
              <View className="w-1/3 flex flex-col gap-1">
                <View className="flex flex-row items-center gap-1">
                  <Ionicons name="cash-outline" size={14} color="black" />
                  <Text className="text-sm">12.000</Text>
                </View>
                <Text className="text-sm ml-4">Saldo</Text>
              </View>
              <View className="w-1/3 flex flex-col gap-1">
                <View className="flex flex-row items-center gap-1">
                  <Ionicons name="cash-outline" size={14} color="black" />
                  <Text className="text-sm">10.000</Text>
                </View>
                <Text className="text-sm ml-4">Poin</Text>
              </View>
              <View className="w-1/3 flex flex-row justify-center">
                <Button className="w-full" variant="outlinePrimary" size="sm">
                  <Ionicons
                    name="barcode-outline"
                    size={14}
                    color={config.colors.primary}
                  />
                  Show Member
                </Button>
              </View>
            </View>
            <View className="w-full flex flex-row items-center justify-between border-t p-3">
              <View className="w-1/3 flex flex-row items-center gap-1">
                <MaterialCommunityIcons
                  name="ticket-confirmation"
                  size={14}
                  color="black"
                />
                <Text className="text-sm">4</Text>
                <Text className="text-sm">Voucher</Text>
              </View>
              <View className="w-1/3 flex flex-row items-center gap-1">
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={14}
                  color="black"
                />
                <Text className="text-sm">4</Text>
                <Text className="text-sm">Promo</Text>
              </View>
              <View className="w-1/3 flex flex-row items-center gap-1">
                <Ionicons name="star" size={14} color="black" />
                <Text className="text-sm">4</Text>
                <Text className="text-sm">Star</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="max-w-full h-56 flex flex-col my-1 px-4">
          <Banner />
        </View>
        <View className="w-full flex flex-wrap flex-row gap-x-1 gap-y-6 items-center rounded-md my-4 px-4">
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
          <CategoryItem src={icon} title="category" />
        </View>
        <View className="w-full h-[22rem] rounded-md my-1 px-4">
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-semibold">Penawaran Terbaik</Text>
            <Button variant="inlinePrimary" size="xs">
              Lihat Semua
            </Button>
          </View>
          <ScrollView horizontal contentContainerStyle={{ gap: 6 }}>
            {product.map((item, index) => (
              <ProductCard key={"productPromo" + index} data={item} />
            ))}
          </ScrollView>
        </View>
        <View className="w-full h-[22rem] rounded-md my-1 px-4">
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-semibold">Produk Terbaru</Text>
            <Button variant="inlinePrimary" size="xs">
              Lihat Semua
            </Button>
          </View>
          <ScrollView horizontal contentContainerStyle={{ gap: 6 }}>
            {product.map((item, index) => (
              <ProductCard key={"productTerbaru" + index} data={item} />
            ))}
          </ScrollView>
        </View>
        <View className="w-full h-[22rem] rounded-md my-1 px-4">
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-semibold">Promo Andalan</Text>
            <Button
              variant="inlinePrimary"
              size="xs"
              onPress={() => router.push("/promo")}
            >
              Lihat Semua
            </Button>
          </View>
          <ScrollView horizontal contentContainerStyle={{ gap: 6 }}>
            <View className="w-48 h-[97%] rounded-md px-1 py-2">
              <Image
                className="w-full h-full rounded-lg"
                style={{ resizeMode: "stretch" }}
                source={require("../../assets/product/product1.png")}
              />
            </View>
            <View className="w-48 h-[97%] rounded-md px-1 py-2">
              <Image
                className="w-full h-full rounded-lg"
                style={{ resizeMode: "stretch" }}
                source={require("../../assets/product/product1.png")}
              />
            </View>
            <View className="w-48 h-[97%] rounded-md px-1 py-2">
              <Image
                className="w-full h-full rounded-lg"
                style={{ resizeMode: "stretch" }}
                source={require("../../assets/product/product1.png")}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
