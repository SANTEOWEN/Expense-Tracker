import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";
import React from 'react';

export default function TabLayout() {

    return (
        <Tabs
        tabBar={(props) => <TabBar {...props}/>}
        screenOptions={{
            headerShown: false,
        }}>
            <Tabs.Screen
            name="index"
            options = {{title: 'Home'}}
            />

            <Tabs.Screen
            name="history"
            options={{title: 'History'}}
            />

            <Tabs.Screen
            name='budget'
            options={{title: 'Budget'}}
            />

            <Tabs.Screen
            name='goals'
            options={{title: 'Goals'}}
            />

            <Tabs.Screen
            name="settings"
            options={{title: 'Options'}}
            />


        </Tabs>
    )
}
