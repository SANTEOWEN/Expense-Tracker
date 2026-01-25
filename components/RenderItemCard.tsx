import { getLucideIcon } from '@/constants/Icons'
import { formatDate, lighten } from '@/lib/helper_functions'
import { Category, Transaction } from '@/lib/types.types'
import { router } from 'expo-router'
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
    <View className='bg-card p-3 rounded-md'>
        <Pressable className='flex-row items-center justify-between' onPress={() => router.push({
            pathname: '/(transactions)/[id]',
            params: {
                id: transaction.transaction_id,
                amount: transaction.amount,
                created_at: transaction.created_at,
                description: transaction.description,
                category_id: transaction.category_id,
                type: transaction.type,
                transaction_date: transaction.transaction_date,
                // TODO: Do the fucking schema properly so you can do a relational DB
                category_icon: category.icon,
                category_color: category.color,
                category_name: category.name
             }
        })}>
            <View className='flex-row items-center gap-3'>
                <View className='w-12 h-12 rounded-lg items-center justify-center' style={{backgroundColor: lighten(category.color)}}>
                    <Icon color={category.color} size={30}/>
                </View>
                <View className='flex-col gap-3'>
                    <Text className='text-foreground'>{category.name}</Text>
                    <Text className='text-input'>{formatDate(transaction.created_at)}</Text>
                </View>
            </View>
            <Text className={`text-center text-foreground px-2 ${transaction.type === 'expense' ? ' text-red-400' : ' text-green-400'}`}>{transaction.type == 'expense' ? `-₱${transaction.amount}` : `₱${transaction.amount}`}</Text>
        </Pressable>
    </View>
  )
}

export default RenderItemCard
