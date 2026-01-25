import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { NAV_THEME } from '@/theme';
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";


export default function RootLayout() {
  const {colorScheme, isDarkColorScheme} = useColorScheme();

  return (
        <NavThemeProvider value={NAV_THEME[colorScheme]}>
                <SafeAreaProvider>
                        <Stack screenOptions={{headerShown: false}}>
                            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                            <Stack.Screen name="(transactions)[id]" options={{ headerShown: false }} />
                        </Stack>
                </SafeAreaProvider>
        </NavThemeProvider>
  )
}
