
import RenderItemCard from '@/components/RenderItemCard'
import { testCategories, testTransactions } from '@/constants/test-data'
import { Category } from '@/lib/types.types'
import { useColorScheme } from '@/lib/useColorScheme'
import { StatusBar } from 'expo-status-bar'
import { Briefcase, Car, Heart, Plus, ShoppingBag, ShoppingCart, TrendingUp, Tv, UtensilsCrossed, Wallet, Zap } from 'lucide-react-native'
import React, { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const index = () => {
  const { isDarkColorScheme } = useColorScheme();
  const iconMap: { [key: string]: any } = {
    ShoppingCart, Car, Tv, UtensilsCrossed, Zap, Heart, ShoppingBag, Wallet, Briefcase, TrendingUp
  }

  const [filterType, setFilterType] = useState< 'all' |'expense' | 'income'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryById = (id: number): Category | undefined => {
    return testCategories.find(c => c.category_id === id);
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const filteredTransactions = testTransactions
    .filter(t => filterType === 'all' || t.type === filterType)
    .filter(t => {
        if (!searchQuery) return true;
        const category = getCategoryById(t.category_id);
        return t.description.toLowerCase().includes(searchQuery.toLowerCase()) || category?.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime());

  const totalIncome = testTransactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = testTransactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome + totalExpense

  return (
    <>
    <SafeAreaView className='flex-1 bg-background'>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'}/>
        <View className='flex-1 px-5 pb-6 flex-col'>
            <View className='bg-primary rounded-lg py-10 w-full max-w-screen-md'>
                <View className='justify-center items-center'>
                    <Text className='text-white opacity-80 text-sm mb-2'>Total Balance</Text>
                    <Text className='text-white text-5xl font-extrabold'>₱{balance.toFixed(2)}</Text>
                </View>
            </View>

            <Pressable className='my-10 items-center justify-center bg-foreground p-5 rounded-lg' onPress={() => (console.log('test'))}>
                <View className='flex-row items-center'>
                    <Plus color={isDarkColorScheme ? 'black' : 'white'}/>
                    <Text className='text-background'> Add Transaction </Text>
                </View>
            </Pressable>

            <View className='py-5 flex-row justify-between'>
                <Text className='text-lg text-foreground font-thin'>Recent Transactions</Text>
                <View>
                    <Text className='text-base text-foreground font-thin text-primary'>View All</Text>
                </View>
            </View>
            <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={filteredTransactions}
            renderItem={({item}) => {
                const category = getCategoryById(item.category_id);
                if (!category) return null;

                return <RenderItemCard transaction={item} category={category}/>
            }}
            />

        </View>
    </SafeAreaView>
    </>
  )
}

export default index
