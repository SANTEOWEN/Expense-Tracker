
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <>
    <SafeAreaView className='flex-col h-full gap-3'>
        <View className='flex-1 bg-green-500 rounded-md mx-5'>
            <View className='flex-1 flex-col gap-2'>
                <View className='flex-1 px-10 flex-col justify-center gap-3'>
                    <Text className='text-white text-2xl font-bold'>Total Balance</Text>
                    <Text className='text-white text-4xl'>$1,234.56</Text>
                </View>
            </View>

            <View className='flex-1'>
                <View className='flex-1 flex-row items-center justify-start gap-3 px-10'>
                    <View className='flex-1 p-4 rounded-md bg-green-300'>
                        <Text className='text-green-100 text-lg font-bold'>Income</Text>
                        <Text className='text-white text-2xl'>$ 1,234</Text>
                    </View>
                    <View className='flex-1 p-4 rounded-md bg-green-300'>
                        <Text className='text-green-100 text-lg font-bold'>Expenses</Text>
                        <Text className='text-white text-2xl'>$ 1,234</Text>
                    </View>
                </View>
            </View>

        </View>

        <View className='h-10 rounded-md mx-5'>
            <View className='flex-row justify-between mx-1 mt-2'>
                <Text className='text-lg'>Recent Transactions</Text>
                <Text className='text-green-600'>View All</Text>
            </View>
        </View>

        <View className='flex-1 grow-[2] rounded-md'>

        </View>
    </SafeAreaView>

    </>
  )
}

export default index
