
import { useColorScheme } from '@/lib/useColorScheme'
import { StatusBar } from 'expo-status-bar'
import { CircleArrowDown, CircleArrowUp } from 'lucide-react-native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <>
    <SafeAreaView className='flex-1 bg-background'>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'}/>
        <View className='flex-1 p-8 flex-col'>
            <View className='bg-primary rounded-lg p-8 w-full max-w-screen-md'>
                <View className='mb-6'>
                    <Text className='text-foreground opacity-80 text-sm mb-2'>Total Balance</Text>
                    <Text className='text-foreground text-5xl font-bold'>$12,450.00</Text>
                </View>

                <View className='flex-row gap-4'>
                    <Pressable className='flex-1 bg-primary-foreground rounded-lg p-5' onPress={() => {console.log('test')}}>
                        <View className='flex-row items-center gap-2 mb-2'>
                            <CircleArrowDown size={20} color={'white'}/>
                            <Text className='text-foreground text-sm font-medium'>Income</Text>
                        </View>
                        <Text className='text-foreground text-2xl font-bold'>$4,250</Text>
                    </Pressable>

                    <Pressable className='flex-1 bg-primary-foreground rounded-lg p-5'>
                        <View className='flex-row items-center gap-2 mb-2'>
                            <CircleArrowUp size={20} color={'white'}/>
                            <Text className='text-foreground text-sm font-medium'>Expense</Text>
                        </View>
                        <Text className='text-foreground text-2xl font-bold'>$4,250</Text>
                    </Pressable>
                </View>
            </View>

            <View className='py-5 flex-row justify-between'>
                <Text className='text-lg text-foreground font-thin'>Recent Transactions</Text>
                <Pressable>
                    <Text className='text-foreground font-thin text-primary'>View All</Text>
                </Pressable>
            </View>

        </View>
    </SafeAreaView>
    </>
  )
}

export default index
