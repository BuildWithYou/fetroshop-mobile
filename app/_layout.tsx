import { Stack } from "expo-router";
import "../global.css";
import HeaderBack from "@/components/Header/back";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="allPromo"
        options={{
          header: () => <HeaderBack title="Semua Promo" />,
        }}
      />
      <Stack.Screen
        name="setting/index"
        options={{
          header: () => <HeaderBack title="Pengaturan" />,
        }}
      />
      <Stack.Screen
        name="setting/changePassword"
        options={{
          header: () => <HeaderBack title="Ganti Password" />,
        }}
      />
      <Stack.Screen
        name="about/index"
        options={{
          header: () => <HeaderBack title="Tentang Aplikasi" />,
        }}
      />
    </Stack>
  );
}
