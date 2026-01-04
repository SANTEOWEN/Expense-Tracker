
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <>
    <View className='flex-col h-full gap-3'>
        <View className='flex-1 bg-green-600 rounded-md mx-5 mt-10'>
            <View className='flex-1 flex-col gap-2'>
                <View className='p-10 flex-col gap-3'>
                    <Text className='text-white text-xl font-bold'>Total Balance</Text>
                    <Text className='text-white text-4xl'>$1,234.56</Text>
                </View>
            </View>

            <View className='flex-1'>
                <View className='flex-1 flex-row p-11 bg-orange-500'>
                    <View className='rounded-sm bg-green-300'>
                        <Text className='text-white text-xl font-bold'>Income</Text>
                        <Text className='text-white text-2xl font-bold'>$1,234.56</Text>
                    </View>
                    <View className=''>
                        <Text className='text-white text-xl font-bold'>Expenses</Text>
                        <Text className='text-white text-2xl font-bold'>$1,234.56</Text>
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

        <View className='flex-1 grow-[2] bg-blue-400 rounded-md'>

        </View>
    </View>

    </>
  )
}

export default index
