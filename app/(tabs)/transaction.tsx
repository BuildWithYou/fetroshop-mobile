import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Image, ScrollView, Text, View } from "react-native";
import Button from "../../components/Button";
import TransactionItem from "../../components/TransactionItem";
import Select from "../../components/Select";

export default function Transaction() {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-1 flex-col items-center dark:bg-black">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      {/* <View className="flex flex-row gap-4 justify-evenly items-center border border-secondary rounded-lg mt-4 p-2">
        <FontAwesome5
          name="store-alt"
          size={20}
          color={colorScheme == "dark" ? "white" : "black"}
        />
        <View className="w-2/3">
          <Text className="font-bold dark:text-white">
            Transaksi Langsung di Toko
          </Text>
          <Text className="dark:text-white">
            Transaksi langsung ke toko tanpa lewat Fetroshop
          </Text>
        </View>
        <Ionicons
          name="chevron-forward"
          size={22}
          color={colorScheme == "dark" ? "white" : "black"}
        />
      </View> */}
      <View className="w-full flex flex-row justify-center gap-2 px-4 py-2 bg-secondary/10">
        <Select className="w-1/3" title="Semua Status" />
        <Select className="w-1/3" title="Semua Produk" />
        <Select className="w-1/3" title="Kategori" />
      </View>
      <ScrollView className="w-full flex flex-col">
        {/* <View className="w-full items-center">
          <Image
            className="w-72 h-52 bg-auto mt-10 mb-6"
            source={require("../../assets/emptyOrder.png")}
          />
          <Text className="text-center font-bold dark:text-white">
            Belum ada transaksi
          </Text>
          <Text className="text-center dark:text-white my-2">
            Tunggu apa lagi, belanja sekarang
          </Text>
          <View className="flex flex-row justify-center">
            <Button className="w-32" size="sm">
              Yuk, Belanja
            </Button>
          </View>
        </View> */}
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </ScrollView>
    </View>
  );
}
