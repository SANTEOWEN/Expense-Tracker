import { useColorScheme } from "@/lib/useColorScheme";
import { COLORS } from "@/theme/colors";
import { Tabs } from "expo-router";
import { History, Home, SlidersVertical } from 'lucide-react-native';
import React from 'react';
COLORS

export default function TabLayout() {
    const {colorScheme, isDarkColorScheme} = useColorScheme();

    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: isDarkColorScheme ? COLORS.light.primary : COLORS.dark.primary,
            tabBarInactiveTintColor: '#556063',
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                height: 90,
                borderRadius: 15,
            },
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: '600'
            },
            headerShown: false,
            tabBarPosition: 'bottom',
            animation: 'shift',

        }}
        >
            <Tabs.Screen name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({color, size}) => (<Home color={color} size={size} />)
            }}/>

            <Tabs.Screen name="history"
            options={{
                title: 'History',
                tabBarIcon: ({color, size}) => (<History color={color} size={size} />)
            }} />

            <Tabs.Screen name="settings"
            options={{
                title: 'Settings',
                tabBarIcon: ({color, size}) => (<SlidersVertical color={color} size={size} />)
            }} />

        </Tabs>
    )
}
