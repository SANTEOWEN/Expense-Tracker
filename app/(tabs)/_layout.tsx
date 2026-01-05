import { Tabs } from "expo-router";
import { History, Home, SlidersVertical } from 'lucide-react-native';
import React from 'react';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#2bb673',
            tabBarInactiveTintColor: '#556063',
            tabBarStyle: {
                borderTopWidth:1,
                borderTopColor: '#2bb673',
                height: 100,
                paddingBottom: 10,
                paddingTop: 10
            },
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: '600'
            },
            headerShown: false

        }}>
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
