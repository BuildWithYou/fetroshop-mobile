import { Image, Text, View } from "react-native";
import Button from "../Button";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../../utils/cn";

interface ProductCardProps extends VariantProps<typeof productCardVariants> {
  data: { image: string; name: string; promo: number; price: number };
  className?: string;
}

export default function ProductCard({
  data,
  textSize,
  textStyle,
  className,
}: ProductCardProps) {
  return (
    <View
      className={cn(productCardVariants({ textStyle, textSize, className }))}
    >
      <View className="flex items-center justify-center">
        <Image
          className="w-32 h-32 bg-auto rounded-lg"
          source={require("../../assets/images/product/product1.png")}
        />
      </View>
      <View className="h-[30%] px-1">
        <Text className="text-md font-semibold dark:text-white line-clamp-2">
          {data.name}
        </Text>
        <Text className="text-lg dark:text-white">
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
          {/* <Ionicons
            name="add"
            size={15}
            color="white"
            style={{ fontWeight: "bold" }}
          /> */}
          Keranjang
        </Button>
      </View>
    </View>
  );
}

const productCardVariants = cva(
  "flex flex-col justify-between w-40 h-80 bg-light dark:bg-secondaryDark rounded-md px-1 py-2",
  {
    variants: {
      textStyle: {
        primary: "text-white",
        secondary: "text-white",
        success: "text-white",
        danger: "text-white",
        warning: "text-white",
        info: "text-white",
        light: "text-white",
        dark: "text-white",
        outlinePrimary: "text-primary",
        outlineSecondary: "text-secondary",
        outlineSuccess: "text-success",
        outlineDanger: "text-danger",
        outlineWarning: "text-warning",
        outlineInfo: "text-info",
        outlineLight: "text-light",
        outlineDark: "text-dark",
        inlinePrimary: "text-primary",
        inlineSecondary: "text-secondary",
        inlineSuccess: "text-success",
        inlineDanger: "text-danger",
        inlineWarning: "text-warning",
        inlineInfo: "text-info",
        inlineLight: "text-light",
        inlineDark: "text-dark",
      },
      textSize: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
      },
    },
    defaultVariants: {
      textStyle: "primary",
      textSize: "md",
    },
  }
);
