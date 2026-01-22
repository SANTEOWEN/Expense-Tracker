import { useColorScheme } from '@/hooks/useColorScheme';
import * as Lucide from 'lucide-react-native';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';



interface Category {
    icon: keyof typeof Lucide;
    label: string;
}


interface Transaction {
    type: string;
}

type TransactionType = 'Income' | 'Expense';


const AddTransactions = ({ onPress }: { onPress: () => void }) => {
  const {isDarkColorScheme} = useColorScheme();
  const [transactionType, setTransactionType] = useState<TransactionType>('Income');

  return (
        <View className='bg-card border-border border w-full p-4 rounded-xl flex-col gap-4'>
            <View className='flex-row justify-between items-center gap-2'>
                <Text className='text-foreground text-lg'>Add Transactions</Text>
                <Pressable onPress={(onPress)} className='rounded-xl bg-zinc-950 border-border border p-2'>
                    <X size={20} color={isDarkColorScheme ? 'white' : 'black'}/>
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
                <TextInput placeholder='₱ 0' keyboardType='numeric' className='text-3xl'/>
            </View>
            <View className='my-3'>
                <Text className='text-zinc-400'>Category</Text>
            </View>

        </View>
  )
}

export default AddTransactions
