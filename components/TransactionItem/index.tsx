import { Image, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Button from "../Button";

export default function TransactionItem() {
  return (
    <View className="w-11/12 flex flex-col gap-1 rounded-lg border border-secondary dark:border-primary px-3 mx-auto my-1.5">
      <View className="flex flex-row justify-between p-2">
        <View className="flex flex-row gap-2 items-center">
          <Feather name="shopping-bag" size={20} color="black" />
          <View>
            <Text className="dark:text-white">Belanja</Text>
            <Text className="dark:text-white">10 Feb 2024</Text>
          </View>
        </View>
        <View className="flex flex-row gap-2 items-center">
          <Text className="bg-success/40 rounded-md dark:text-white px-1">
            Selesai
          </Text>
          <Button className="px-0" variant="inlineDark">
            <Feather name="more-vertical" size={20} color="black" />
          </Button>
        </View>
      </View>
      <View className="flex flex-row items-center gap-3 border-y border-y-secondary/30 p-2 py-3">
        <Image
          className="w-12 h-12 bg-auto rounded-lg"
          source={require("../../assets/images/product/product1.png")}
        />
        <View>
          <Text className="dark:text-white">Fruit Tea Blackcurrant</Text>
          <Text className="dark:text-white">1 barang</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between p-2">
        <View className="w-1/3">
          <Text className="dark:text-white">Total Belanja</Text>
          <Text className="font-bold dark:text-white">Rp 10.000</Text>
        </View>
        <View className="w-1/3 flex flex-row items-center justify-between">
          <Button variant="outlinePrimary" size="sm">
            Ulas
          </Button>
          <Button size="sm">Beli Lagi</Button>
        </View>
      </View>
    </View>
  );
}
