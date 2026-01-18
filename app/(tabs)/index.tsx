
import RenderItemCard from '@/components/RenderItemCard'
import { testCategories, testTransactions } from '@/constants/test-data'
import { useColorScheme } from '@/hooks/useColorScheme'
import { Category } from '@/lib/types.types'
import { StatusBar } from 'expo-status-bar'
import { Briefcase, Car, Heart, Plus, ShoppingBag, ShoppingCart, TrendingUp, Tv, UtensilsCrossed, Wallet, Zap } from 'lucide-react-native'
import React, { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { useNavigationMode } from 'react-native-navigation-mode'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'



const index = () => {
  const insets = useSafeAreaInsets()
  const {navigationMode, loading, error} = useNavigationMode()

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
    <SafeAreaView className='flex-1 m-5'>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'}/>

        {/* Total Balance */}
        <View className='flex-none flex-col'>
            {/* Balance Card TODO: Create a seperated card component for it. */}
            <View className='mb-4 bg-primary rounded-lg py-10'>
                <View className='justify-center items-center'>
                    <Text className='text-white opacity-80 text-sm mb-2'>Total Balance</Text>
                    <Text className='text-white text-5xl font-extrabold'>₱{balance.toFixed(2)}</Text>
                </View>
            </View>

            <Pressable className='items-center justify-center bg-foreground p-4 rounded-lg w-full' onPress={() => (console.log(navigationMode?.type))}>
                <View className='flex-row items-center'>
                    <Plus color={isDarkColorScheme ? 'black' : 'white'}/>
                    <Text className='text-background'> Add Transaction </Text>
                </View>
            </Pressable>

            <View className='mt-10 py-5 flex-row justify-between'>
                <Text className='text-lg text-foreground font-base'>Recent Transactions</Text>
                <Pressable>
                    <Text className='text-base text-foreground font-base text-primary'>View All</Text>
                </Pressable>
            </View>
        </View>

        {/* List of data's */}
        <View className='flex-initial max-h-[50%]'>
                <FlatList
                    className='grow-0'
                    ItemSeparatorComponent={() => <View className='p-1'/>}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={filteredTransactions.slice(0, 5)}
                    renderItem={({item}) => {
                        const category = getCategoryById(item.category_id);
                        if (!category) return null;

                        return (
                                <RenderItemCard transaction={item} category={category}/>
                        )
                    }}/>
        </View>

    </SafeAreaView>
  )
}

export default index
