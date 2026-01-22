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
        { icon: 'ShoppingBag', label: 'Shopping', color: '#FF6B6B', size: 24 },
        { icon: 'Utensils', label: 'Food', color: '#4ECDC4', size: 24 },
        { icon: 'Car', label: 'Transport', color: '#FFD166', size: 24 },
        { icon: 'Home', label: 'Home', color: '#118AB2', size: 24 },
        { icon: 'Gamepad2', label: 'Entertainment', color: '#073B4C', size: 24 },
        { icon: 'Plane', label: 'Travel', color: '#EF476F', size: 24 },
        { icon: 'Gift', label: 'Gifts', color: '#FF6B6B', size: 24 },
        { icon: 'Zap', label: 'Utilities', color: '#4ECDC4', size: 24},
        { icon: 'Heart', label: 'Health', color: '#FFD166', size: 24 },
        { icon: 'Plus', label: 'Other', color: '#118AB2', size: 24 }
    ];


    return (
        <View className='bg-card border-border border w-full p-4 rounded-xl flex-col gap-4'>
            <View className='flex-row justify-between items-center gap-2'>
                <Text className='text-foreground text-lg'>Add Transactions</Text>
                <Pressable onPress={(onPress)} className='rounded-xl bg-zinc-950 border-border border p-2'>
                    <X size={20} color={isDarkColorScheme ? 'white' : 'black'} />
                </Pressable>
            </View>
            <View className='bg-[#262d41] rounded-xl p-1'>
                <View className='flex-row gap-2 rounded-xl'>
                    <Pressable className={`flex-1 py-3 rounded-lg ${transactionType === 'Income' ? 'bg-primary' : 'bg-[#262d41]'}`} onPress={() => setTransactionType('Income')}>
                        <Text className={`text-center text-lg font-medium ${transactionType === 'Income' ? 'text-foreground' : 'text-zinc-400'}`}>Income</Text>
                    </Pressable>
                    <Pressable className={`flex-1 py-3 rounded-lg ${transactionType === 'Expense' ? 'bg-primary' : 'bg-[#262d41]'}`} onPress={() => setTransactionType('Expense')}>
                        <Text className={`text-center text-lg font-medium ${transactionType === 'Expense' ? 'text-foreground' : 'text-zinc-400'}`}>Expense</Text>
                    </Pressable>
                </View>
            </View>
            <View className='my-5 items-center justify-center'>
                <Text className='text-foreground text-xl text-zinc-500 font-light'>Enter Amount</Text>
                <TextInput placeholder='₱ 0' keyboardType='numeric' className='text-3xl' />
            </View>
            <View className='my-3'>
                <Text className='text-zinc-400'>Category</Text>
                <View className='my-2 flex-row gap-3 flex-wrap'>
                    {categories.map((category, index) => {
                        const isSelectd = index === 0;
                        const Icons = ({ name, color, size }: IconProps) => {
                            const LucideIcon = icons[name];
                            return <LucideIcon color={color} size={size}/>;
                        };
                        return (
                            <Pressable key={index} className={`w-14 h-14 rounded-xl items-center justify-center ${isSelectd ? 'bg-primary' : 'bg-zinc-950'}`}>
                                <Icons name={category.icon} color={category.color} size={category.size} />
                            </Pressable>
                        )

                    })}
                </View>
            </View>

        </View>
    )
}

export default AddTransactions
