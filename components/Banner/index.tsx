import { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import {
  SwiperFlatList,
  Pagination,
  PaginationProps,
} from "react-native-swiper-flatlist";
import config from "../../constants/config";
import Button from "../Button";
import ButtonLink from "../Button/buttonLink";

const data = [
  {
    id: 1,
    name: "React JS",
    url: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
  },
  {
    id: 2,
    name: "JavaScript",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
  },
  {
    id: 3,
    name: "Node JS",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png",
  },
];

function renderItem(item: any) {
  return (
    <View className="w-full h-full bg-red-600">
      <Image
        className="w-full h-full bg-auto rounded-lg"
        source={{ uri: item.url }}
      />
    </View>
  );
}

function CustomPagination(props: JSX.IntrinsicAttributes & PaginationProps) {
  return (
    <View className="w-full flex flex-row justify-between items-center -mt-6">
      <View className="w-3/4">
        <Pagination
          {...props}
          paginationDefaultColor={config.colors.secondary}
          paginationActiveColor={config.colors.primary}
          paginationStyleItem={{ height: 8, width: 8 }}
          paginationStyle={{ top: -12 }}
        />
      </View>
      <View className="w-1/4">
        <ButtonLink
          className="pr-0"
          variant="inlinePrimary"
          size="xs"
          href="/allPromo"
        >
          Lihat Semua
        </ButtonLink>
      </View>
    </View>
  );
}

export default function Banner() {
  const { width } = Dimensions.get("window");

  return (
    <SwiperFlatList
      contentContainerStyle={{ display: "flex", justifyContent: "center" }}
      // useReactNativeGestureHandler
      // inverted
      autoplay
      autoplayLoop
      autoplayDelay={2}
      index={0}
      // autoplayLoop
      // autoplayInvertDirection
      // data={data}
      // renderItem={({ item }) => renderItem(item)}
      // onChangeIndex={({ index, prevIndex }) => {
      //   console.log('renderItem', { index, prevIndex });
      // }}
      showPagination
      PaginationComponent={CustomPagination}
      // e2eID="container_swiper_renderItem"
    >
      <Image
        className="rounded-lg"
        style={{ resizeMode: "stretch", width: width - 28, height: 170 }}
        source={require("../../assets/images/banner/banner1.png")}
      />
      <Image
        className="rounded-lg"
        style={{ resizeMode: "stretch", width: width - 28, height: 170 }}
        source={require("../../assets/images/banner/banner2.png")}
      />
      <Image
        className="rounded-lg"
        style={{ resizeMode: "stretch", width: width - 28, height: 170 }}
        source={require("../../assets/images/banner/banner4.png")}
      />
    </SwiperFlatList>
  );
}
