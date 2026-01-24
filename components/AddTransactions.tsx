import { useColorScheme } from '@/hooks/useColorScheme';
import * as icons from 'lucide-react-native';
import * as Lucide from 'lucide-react-native';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';



interface Category {
    icon: keyof typeof Lucide;
    label: string;
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
        { icon: 'ShoppingBag', label: 'Shopping', size: 24 },
        { icon: 'Utensils', label: 'Food', size: 24 },
        { icon: 'Car', label: 'Transport', size: 24 },
        { icon: 'Home', label: 'Home', size: 24 },
        { icon: 'Gamepad2', label: 'Entertainment', size: 24 },
        { icon: 'Plane', label: 'Travel', size: 24 },
    ];

    const colors: string[] = [
        '#ef4444',
        '#f97316',
        '#f59e0b',
        '#10b981',
        '#06b6d4',
        '#3b82f6',
    ]


    return (
        <View className='bg-background items-center justify-center rounded-lg p-4 w-full border-border border'>
            <View className='flex-col gap-4 w-full p-3'>
                {/* Close Button */}
                <View className='flex-row justify-between items-center gap-2 mb-3'>
                    <X color={isDarkColorScheme ? 'white' : 'black'} onPress={onPress} />
                    <Text className='text-foreground text-lg'> New Transaction</Text>
                </View>

                {/* Transaction Type Selector */}
                <View className='bg-card rounded-xl p-2 mb-3'>
                    <View className='flex-row gap-2 items-center justify-center'>
                        <Pressable className={`flex-1 py-3 rounded-lg ${transactionType === 'Income' ? 'bg-primary' : 'bg-card'}`} onPress={() => setTransactionType('Income')}>
                            <Text className={`text-center text-lg font-medium ${transactionType === 'Income' ? 'text-foreground' : 'text-zinc-400'}`}>Income</Text>
                        </Pressable>
                        <Pressable className={`flex-1 py-3 rounded-lg ${transactionType === 'Expense' ? 'bg-primary' : 'bg-card'}`} onPress={() => setTransactionType('Expense')}>
                            <Text className={`text-center text-lg font-medium ${transactionType === 'Expense' ? 'text-foreground' : 'text-zinc-400'}`}>Expense</Text>

                        </Pressable>
                    </View>
                </View>

                {/* Amount Input */}
                <View className='flex-col items-center mb-3 gap-2'>
                    <Text className='text-zinc-400 font-light'>Enter Amount</Text>
                    <TextInput keyboardType='numeric' placeholder='₱0.00' placeholderTextColor='#6b7280' className='text-white text-3xl font-semibold' textAlign='center' />
                </View>

                {/* Category Selection */}
                <View className='items-start mb-3'>
                    <Text className='text-zinc-400'>Select Category</Text>
                </View>
                <View className='flex-row flex-wrap justify-between mb-3'>
                    {categories.map((category, index) => {
                        const isSelectd = index === 0;
                        const Icons = ({ name, color, size }: IconProps) => {
                            const LucideIcon = icons[name];
                            return <LucideIcon color={color} size={size} />;
                        };
                        return (
                            <Pressable key={index} className={`w-12 h-12 rounded-xl items-center justify-center ${isSelectd ? 'bg-primary' : 'bg-zinc-800'}`}>
                                <Icons name={category.icon} color={'#ffffff'} size={category.size} />
                            </Pressable>

                        )
                    })}
                </View>
                {/* Color Selection */}
                <View className='items-start mb-3'>
                    <Text className='text-zinc-400'>Select Color</Text>
                </View>
                <View className='flex-row flex-wrap justify-between mb-3 gap-2'>
                    {colors.map((color, index) => {
                        const isSelected = index === 0;
                        return (
                            <Pressable key={index} className={`w-12 h-12 items-center justify-center rounded-full border ${isSelected ? 'border-foreground' : 'border-transparent'}`} style={{ backgroundColor: color }} />
                        )
                    })}
                </View>
                {/* Add note button */}
                <View className='mb-3'>
                    <TextInput placeholder=' Add Note' className='p-3 rounded-lg border border-border' />
                </View>
                {/* Add Transaction Button */}
                <Pressable className='items-center justify-center w-full bg-primary h-10 rounded-lg'>
                    <Text className='text-foreground text-lg font-medium'>Save Transaction</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AddTransactions
