import { getLucideIcon } from '@/constants/Icons'
import { useColorScheme } from '@/hooks/useColorScheme'
import { formatDate } from '@/lib/helper_functions'
import { router, useLocalSearchParams } from 'expo-router'
import { MoveLeft } from 'lucide-react-native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const TransactionPage = () => {
    const { isDarkColorScheme } = useColorScheme();
    const { id, amount, created_at, description, category_id, type, transaction_date, category_icon, category_color, category_name } = useLocalSearchParams()
    const Icon = getLucideIcon(category_icon as string);


    return (
        <SafeAreaView className='bg-background p-4'>
            <View className='flex-col gap-4 w-full p-3'>
                <View className='flex-row items-center gap-5 mb-4'>
                    <Pressable onPress={() => router.back()}>
                        <MoveLeft size={24} color={isDarkColorScheme ? 'white' : 'black'} />
                    </Pressable>

                    <Text className='text-foreground text-lg font-bold'> Transaction Details</Text>
                </View>
                <View className="items-center justify-center mb-3">
                    <View className='w-20 h-20 rounded-full bg-red-300 items-center justify-center mb-3' style={{ backgroundColor: category_color as string }}>
                        <Icon color={isDarkColorScheme ? 'white' : 'black'} size={40} />
                    </View>
                    <Text className={`text-foreground text-2xl font-base text-center mb-2 ${type === 'expense' ? ' text-red-400' : ' text-green-400'}`}>
                        {type == 'expense' ? `- ₱${amount}.00` : `₱${amount}.00`}
                    </Text>
                    <View className='w-auto bg-card border-border border py-2 px-3 rounded-full items-center justify-center'>
                        <Text className='text-foreground'>{category_name}</Text>
                    </View>
                </View>
                <View className='bg-card border-border border p-4 rounded-md mb-4'>
                    <View className='flex-row items-center justify-between'>
                        <Text className='text-zinc-400'>Date</Text>
                        <Text className='text-foreground font-light'>{formatDate(transaction_date as string)}</Text>
                    </View>

                    <View className='border-t border-border my-5' />

                    <View className='flex-row items-center justify-between'>
                        <Text className='text-zinc-400'>Type</Text>
                        <Text className='text-foreground font-light capitalize'>{type}</Text>
                    </View>
                </View>
                <View className='bg-card border-border border p-4 rounded-md gap-2'>
                    <Text className='text-zinc-400'>Description</Text>
                    <Text className='text-foreground font-light'>{description}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TransactionPage
