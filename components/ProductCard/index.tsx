import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../Button";

interface ProductCardProps {
  data: { image: string; name: string; promo: number; price: number };
}

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <View className="flex flex-col justify-between w-40 h-[97%] bg-light rounded-md px-1 py-2">
      <View className="flex items-center justify-center">
        <Image
          className="rounded-lg"
          style={{ resizeMode: "contain", width: 130, height: 130 }}
          source={require("../../assets/product/product1.png")}
        />
      </View>
      <View className="h-[30%] px-1">
        <Text className="text-md line-clamp-2">{data.name}</Text>
        <Text className="text-lg">
          Rp{" "}
          {data.promo >= 1
            ? data.promo.toLocaleString()
            : data.price.toLocaleString()}
        </Text>
        {data.promo >= 1 && (
          <View className="flex flex-row items-center gap-1">
            <Text className="text-xs bg-danger text-white rounded-sm px-1">
              {((data.price - data.promo) / data.price) * 100}%
            </Text>
            <Text className="text-sm text-danger line-through">
              Rp {data.price.toLocaleString()}
            </Text>
          </View>
        )}
      </View>
      <View>
        <Button pill="lg" textSize="lg" size="sm">
          <Ionicons
            name="add"
            size={15}
            color="white"
            style={{ fontWeight: "bold" }}
          />
          Keranjang
        </Button>
      </View>
    </View>
  );
}
