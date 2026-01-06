import { useColorScheme } from 'nativewind'
import React from 'react'
import { Text, View } from 'react-native'

export default function ThemeToggle ()  {
    const { colorScheme, toggleColorScheme } = useColorScheme()

    return (
        <View className="items-center justify-center p-4">
            <Text
                className="text-lg text-gray-800 dark:text-gray-200"
                onPress={toggleColorScheme}
            >
                Current Theme: {colorScheme === 'dark' ? 'Dark' : 'Light'}
            </Text>
        </View>
    )

}
