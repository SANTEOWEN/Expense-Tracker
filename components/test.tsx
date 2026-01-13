import { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

// TypeScript Interfaces
interface Category {
  category_id: number;
  user_id: number;
  name: string;
  type: 'expense' | 'income';
  color: string;
  icon: string;
  created_at: string;
}

interface Transaction {
  transaction_id: number;
  user_id: number;
  category_id: number;
  amount: number;
  type: 'expense' | 'income';
  description: string;
  transaction_date: string;
  created_at: string;
}

// Test Data
const testCategories: Category[] = [
  { category_id: 1, user_id: 1, name: 'Groceries', type: 'expense', color: '#10b981', icon: 'ShoppingCart', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 2, user_id: 1, name: 'Transportation', type: 'expense', color: '#3b82f6', icon: 'Car', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 3, user_id: 1, name: 'Entertainment', type: 'expense', color: '#8b5cf6', icon: 'Tv', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 4, user_id: 1, name: 'Dining Out', type: 'expense', color: '#ef4444', icon: 'UtensilsCrossed', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 5, user_id: 1, name: 'Utilities', type: 'expense', color: '#f59e0b', icon: 'Zap', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 6, user_id: 1, name: 'Healthcare', type: 'expense', color: '#ec4899', icon: 'Heart', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 7, user_id: 1, name: 'Shopping', type: 'expense', color: '#06b6d4', icon: 'ShoppingBag', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 8, user_id: 1, name: 'Salary', type: 'income', color: '#22c55e', icon: 'Wallet', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 9, user_id: 1, name: 'Freelance', type: 'income', color: '#84cc16', icon: 'Briefcase', created_at: '2024-01-15T08:00:00Z' },
  { category_id: 10, user_id: 1, name: 'Investment', type: 'income', color: '#14b8a6', icon: 'TrendingUp', created_at: '2024-01-15T08:00:00Z' },
];

const testTransactions: Transaction[] = [
  { transaction_id: 1, user_id: 1, category_id: 1, amount: 85.50, type: 'expense', description: 'Weekly grocery shopping at Whole Foods', transaction_date: '2025-01-05', created_at: '2025-01-05T14:30:00Z' },
  { transaction_id: 2, user_id: 1, category_id: 2, amount: 45.00, type: 'expense', description: 'Gas station fill-up', transaction_date: '2025-01-06', created_at: '2025-01-06T09:15:00Z' },
  { transaction_id: 3, user_id: 1, category_id: 4, amount: 32.75, type: 'expense', description: 'Lunch at Italian restaurant', transaction_date: '2025-01-07', created_at: '2025-01-07T13:20:00Z' },
  { transaction_id: 4, user_id: 1, category_id: 3, amount: 15.99, type: 'expense', description: 'Netflix subscription', transaction_date: '2025-01-08', created_at: '2025-01-08T10:00:00Z' },
  { transaction_id: 5, user_id: 1, category_id: 1, amount: 67.25, type: 'expense', description: 'Grocery shopping at Trader Joes', transaction_date: '2025-01-09', created_at: '2025-01-09T16:45:00Z' },
  { transaction_id: 6, user_id: 1, category_id: 5, amount: 120.00, type: 'expense', description: 'Electric bill', transaction_date: '2025-01-10', created_at: '2025-01-10T08:30:00Z' },
  { transaction_id: 7, user_id: 1, category_id: 2, amount: 12.50, type: 'expense', description: 'Uber ride to downtown', transaction_date: '2025-01-10', created_at: '2025-01-10T19:20:00Z' },
  { transaction_id: 8, user_id: 1, category_id: 4, amount: 28.50, type: 'expense', description: 'Coffee and breakfast', transaction_date: '2025-01-11', created_at: '2025-01-11T08:45:00Z' },
  { transaction_id: 9, user_id: 1, category_id: 7, amount: 89.99, type: 'expense', description: 'New running shoes', transaction_date: '2025-01-11', created_at: '2025-01-11T15:30:00Z' },
  { transaction_id: 10, user_id: 1, category_id: 3, amount: 45.00, type: 'expense', description: 'Movie tickets and popcorn', transaction_date: '2025-01-12', created_at: '2025-01-12T20:00:00Z' },
  { transaction_id: 11, user_id: 1, category_id: 8, amount: 3500.00, type: 'income', description: 'Monthly salary', transaction_date: '2025-01-01', created_at: '2025-01-01T00:00:00Z' },
  { transaction_id: 12, user_id: 1, category_id: 9, amount: 500.00, type: 'income', description: 'Freelance web design project', transaction_date: '2025-01-08', created_at: '2025-01-08T14:00:00Z' },
  { transaction_id: 13, user_id: 1, category_id: 10, amount: 125.50, type: 'income', description: 'Stock dividends', transaction_date: '2025-01-10', created_at: '2025-01-10T10:00:00Z' },
  { transaction_id: 14, user_id: 1, category_id: 1, amount: 95.30, type: 'expense', description: 'Grocery shopping', transaction_date: '2024-12-28', created_at: '2024-12-28T11:00:00Z' },
  { transaction_id: 15, user_id: 1, category_id: 4, amount: 156.80, type: 'expense', description: 'Holiday dinner with family', transaction_date: '2024-12-25', created_at: '2024-12-25T19:30:00Z' },
  { transaction_id: 16, user_id: 1, category_id: 6, amount: 75.00, type: 'expense', description: 'Doctor visit copay', transaction_date: '2024-12-20', created_at: '2024-12-20T14:15:00Z' },
  { transaction_id: 17, user_id: 1, category_id: 7, amount: 245.00, type: 'expense', description: 'Christmas gifts', transaction_date: '2024-12-18', created_at: '2024-12-18T16:00:00Z' },
  { transaction_id: 18, user_id: 1, category_id: 2, amount: 50.00, type: 'expense', description: 'Gas', transaction_date: '2024-12-15', created_at: '2024-12-15T10:30:00Z' },
  { transaction_id: 19, user_id: 1, category_id: 8, amount: 3500.00, type: 'income', description: 'Monthly salary', transaction_date: '2024-12-01', created_at: '2024-12-01T00:00:00Z' },
  { transaction_id: 20, user_id: 1, category_id: 8, amount: 500.00, type: 'income', description: 'Year-end bonus', transaction_date: '2024-12-20', created_at: '2024-12-20T12:00:00Z' },
];

const TransactionsScreen = () => {
  const [filterType, setFilterType] = useState<'all' | 'expense' | 'income'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryById = (id: number): Category | undefined => {
    return testCategories.find(c => c.category_id === id);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';

    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const filteredTransactions = testTransactions
    .filter(t => filterType === 'all' || t.type === filterType)
    .filter(t => {
      if (!searchQuery) return true;
      const category = getCategoryById(t.category_id);
      return t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             category?.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime());

  const totalIncome = testTransactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = testTransactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  const renderHeader = () => (
    <View>
      {/* Summary Cards */}
      <View className="flex-row px-4 pt-4 gap-3">
        <View className="flex-1 bg-green-500 p-4 rounded-xl items-center">
          <Text className="text-xs text-white opacity-90 mb-1">Income</Text>
          <Text className="text-lg font-bold text-white">${totalIncome.toFixed(2)}</Text>
        </View>
        <View className="flex-1 bg-red-500 p-4 rounded-xl items-center">
          <Text className="text-xs text-white opacity-90 mb-1">Expenses</Text>
          <Text className="text-lg font-bold text-white">${totalExpenses.toFixed(2)}</Text>
        </View>
        <View className={`flex-1 p-4 rounded-xl items-center ${balance >= 0 ? 'bg-blue-500' : 'bg-orange-500'}`}>
          <Text className="text-xs text-white opacity-90 mb-1">Balance</Text>
          <Text className="text-lg font-bold text-white">${balance.toFixed(2)}</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View className="px-4 pt-4">
        <TextInput
          className="bg-white rounded-xl px-4 py-3 text-base border border-gray-200"
          placeholder="Search transactions..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Filter Buttons */}
      <View className="flex-row px-4 pt-3 pb-4 gap-2">
        <TouchableOpacity
          className={`flex-1 py-2.5 px-4 rounded-lg items-center ${filterType === 'all' ? 'bg-blue-600' : 'bg-gray-100'}`}
          onPress={() => setFilterType('all')}
        >
          <Text className={`text-sm font-semibold ${filterType === 'all' ? 'text-white' : 'text-gray-700'}`}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-2.5 px-4 rounded-lg items-center ${filterType === 'income' ? 'bg-green-600' : 'bg-gray-100'}`}
          onPress={() => setFilterType('income')}
        >
          <Text className={`text-sm font-semibold ${filterType === 'income' ? 'text-white' : 'text-gray-700'}`}>
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-2.5 px-4 rounded-lg items-center ${filterType === 'expense' ? 'bg-red-600' : 'bg-gray-100'}`}
          onPress={() => setFilterType('expense')}
        >
          <Text className={`text-sm font-semibold ${filterType === 'expense' ? 'text-white' : 'text-gray-700'}`}>
            Expenses
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: Transaction }) => {
    const category = getCategoryById(item.category_id);
    if (!category) return null;

    return (
      <TouchableOpacity className="flex-row justify-between items-center px-4 py-3 bg-white">
        <View className="flex-row items-center flex-1">
          <View
            className="w-12 h-12 rounded-full justify-center items-center mr-3"
            style={{ backgroundColor: `${category.color}20` }}
          >
            <View
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: category.color }}
            />
          </View>
          <View className="flex-1">
            <View className="flex-row items-center gap-2 mb-0.5">
              <Text className="text-base font-semibold text-gray-900">{category.name}</Text>
              <View className={`px-2 py-0.5 rounded-full ${item.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                <Text className={`text-[10px] font-semibold ${item.type === 'income' ? 'text-green-800' : 'text-red-800'}`}>
                  {item.type}
                </Text>
              </View>
            </View>
            <Text className="text-sm text-gray-600" numberOfLines={1}>{item.description}</Text>
            <Text className="text-xs text-gray-400 mt-0.5">{formatDate(item.transaction_date)}</Text>
          </View>
        </View>
        <Text className={`text-lg font-bold ml-2 ${item.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
          {item.type === 'income' ? '+' : '-'}${item.amount.toFixed(2)}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => <View className="h-px bg-gray-100" />;

  const renderEmpty = () => (
    <View className="p-12 items-center">
      <Text className="text-base text-gray-400">No transactions found</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <View className="px-5 py-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Transactions</Text>
      </View>
      <FlatList
        data={filteredTransactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.transaction_id.toString()}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <View className="py-3 items-center bg-white border-t border-gray-200">
        <Text className="text-xs text-gray-600">
          Showing {filteredTransactions.length} of {testTransactions.length} transactions
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TransactionsScreen;
