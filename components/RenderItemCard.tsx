import { Category, Transaction } from '@/lib/types.types'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const RenderItemCard = ({item}: {item: Transaction | Category}) => {



  return (
    <View className='bg-card border-border border p-4 rounded-md'>
        <Pressable className='flex-row items-center justify-between'>
            <View className='flex-row items-center gap-3'>
                <View className='w-12 h-12 bg-orange-300 rounded-lg items-center justify-center'>
                    {/* Add Logo here */}
                </View>
                <View className='flex-col gap-2'>
                    <Text className='text-foreground text-base'>{/*Add Header text here*/}</Text>
                    <Text className='text-input'>{/*Add time and date here*/}</Text>
                </View>
            </View>
            <Text className='text-center text-foreground px-2'>{/*Add transaction amount here*/}</Text>
        </Pressable>
    </View>
  )
}

export default RenderItemCard
