import { getLucideIcon } from '@/constants/Icons'
import { formatDate, lighten } from '@/lib/helper_functions'
import { Category, Transaction } from '@/lib/types.types'
import React from 'react'
import { Pressable, Text, View } from 'react-native'



type ItemCardProps = {
    transaction: Transaction;
    category: Category;
    onPress?: () => void;
}



const RenderItemCard = ({transaction, category, onPress}: ItemCardProps) => {
const Icon = getLucideIcon(category.icon)

return (
    <View className='bg-card border-border border p-4 my-2 rounded-md'>
        <Pressable className='flex-row items-center justify-between'>
            <View className='flex-row items-center gap-3'>
                <View className='w-12 h-12 rounded-lg items-center justify-center' style={{backgroundColor: lighten(category.color)}}>
                    <Icon color={category.color} size={30}/>
                </View>
                <View className='flex-col gap-2'>
                    <Text className='text-foreground text-base'>{category.name}</Text>
                    <Text className='text-input'>{formatDate(transaction.created_at)}</Text>
                </View>
            </View>
            <Text className={`text-center text-foreground px-2 ${transaction.type === 'expense' ? ' text-red-400' : ' text-green-400'}`}>{transaction.type == 'expense' ? `-₱${transaction.amount}` : `₱${transaction.amount}`}</Text>
        </Pressable>
    </View>
  )
}

export default RenderItemCard
