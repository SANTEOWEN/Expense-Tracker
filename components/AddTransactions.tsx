import { useColorScheme } from '@/hooks/useColorScheme';
import * as icons from 'lucide-react-native';
import * as Lucide from 'lucide-react-native';
import {
    X
} from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';



interface Category {
    icon: keyof typeof Lucide;
    label: string;
    color: string;
    size: number;
}


interface Transaction {
    type: string;
}

interface IconProps {
    name: keyof typeof icons;
    size?: number;
    color?: string;
}

type TransactionType = 'Income' | 'Expense';


const AddTransactions = ({ onPress }: { onPress: () => void }) => {
    const { isDarkColorScheme } = useColorScheme();
    const [transactionType, setTransactionType] = useState<TransactionType>('Income');

    const categories: Category[] = [
        { icon: 'ShoppingBag', label: 'Shopping', color: '#FFff', size: 24 },
        { icon: 'Utensils', label: 'Food', color: '#FFff', size: 24 },
        { icon: 'Car', label: 'Transport', color: '#FFff', size: 24 },
        { icon: 'Home', label: 'Home', color: '#FFff', size: 24 },
        { icon: 'Gamepad2', label: 'Entertainment', color: '#FFff', size: 24 },
        { icon: 'Plane', label: 'Travel', color: '#FFff', size: 24 },
    ];

    const colors: string[] = [
        '#ef4444',
        '#f97316',
        '#f59e0b',
        '#10b981',
        '#06b6d4',
        '#3b82f6',
        '#6366f1',
        '#ec4899',
        '#64748b',
    ]


    return (
        <View className='bg-background border-border border p-4 rounded-xl flex-col gap-4'>
            <View className='flex-row justify-between items-center gap-2'>
                <Text className='text-foreground text-lg'>Add Transactions</Text>
                <Pressable onPress={(onPress)} className='rounded-xl bg-card border-border border p-2'>
                    <X size={20} color={isDarkColorScheme ? 'white' : 'black'} />
                </Pressable>
            </View>
            <View className='bg-card rounded-xl p-1'>
                <View className='flex-row gap-2 rounded-xl'>
                    <Pressable className={`flex-1 py-3 rounded-lg ${transactionType === 'Income' ? 'bg-primary' : 'bg-card'}`} onPress={() => setTransactionType('Income')}>
                        <Text className={`text-center text-lg font-medium ${transactionType === 'Income' ? 'text-foreground' : 'text-zinc-400'}`}>Income</Text>
                    </Pressable>
                    <Pressable className={`flex-1 py-3 rounded-lg ${transactionType === 'Expense' ? 'bg-primary' : 'bg-card'}`} onPress={() => setTransactionType('Expense')}>
                        <Text className={`text-center text-lg font-medium ${transactionType === 'Expense' ? 'text-foreground' : 'text-zinc-400'}`}>Expense</Text>
                    </Pressable>
                </View>
            </View>
            <View className='my-5 items-center justify-center'>
                <Text className='text-foreground text-xl text-zinc-500 font-light'>Enter Amount</Text>
                <TextInput placeholder='₱ 0' keyboardType='numeric' className='text-3xl' />
            </View>
            <Text className='text-zinc-400'>Select Category</Text>
            <View className='flex-row gap-5'>
                {categories.map((category, index) => {
                    const isSelectd = index === 0;
                    const Icons = ({ name, color, size }: IconProps) => {
                        const LucideIcon = icons[name];
                        return <LucideIcon color={color} size={size} />;
                    };
                    return (
                        <Pressable key={index} className={`w-12 h-12 rounded-xl items-center justify-center ${isSelectd ? 'bg-primary' : 'bg-zinc-950'}`}>
                            <Icons name={category.icon} color={category.color} size={category.size} />
                        </Pressable>
                    )

                })}
            </View>
            <Text className='text-zinc-400'>Select Color</Text>
            <View className='flex-row gap-5 flex-wrap'>
                {colors.map((color, index) => {
                    const isSelected = index === 0;
                    return (
                        <Pressable key={index} className={`w-12 h-12 rounded-full`} style={{ backgroundColor: color }}/>
                    )
                })}
            </View>
            <View className='mt-5'>
                <TextInput placeholder='Add a note' className='p-5 rounded-lg border-border border'/>
            </View>
            <Pressable className='bg-primary rounded-xl py-4'>
                <Text className='text-foreground text-center'>Save Transaction</Text>
            </Pressable>
        </View>
    )
}

export default AddTransactions
