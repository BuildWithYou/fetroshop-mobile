import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, Text, View } from "react-native";
import Select from "../../../components/Select";
import ProductCard from "../../../components/ProductCard";

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

export default function SpecialPrice() {
  return (
    <View className="flex-1 flex-col items-center justify-center dark:bg-black">
      <StatusBar style="auto" />
      <View className="w-full flex flex-row justify-center gap-2 px-4 py-2 bg-secondary/10">
        <Select className="w-1/3" title="Rekomendasi" />
        <Select className="w-1/3" title="Jenis" />
        <Select className="w-1/3" title="Kategori" />
      </View>
      <FlatList
        className="flex-1 gap-2"
        data={product}
        renderItem={({ item }) => (
          <ProductCard className="w-52 m-2" data={item} />
        )}
        numColumns={2}
      />
    </View>
  );
}
