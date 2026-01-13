// TabBar.tsx
import { createIconMap } from '@/constants/Icons';
import { useColorScheme } from '@/lib/useColorScheme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useRouter } from 'expo-router';
import { PieChart, Plus, PlusCircle, Target, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { TabBarButton } from './TabBarButton';

interface MenuOption {
  id: string;
  label: string;
  icon: any;
  color: string;
  route: string;
}

const menuOptions: MenuOption[] = [
  {
    id: 'transaction',
    label: 'New Transaction',
    icon: PlusCircle,
    color: 'bg-green-500',
    route: '/transaction-form'
  },
  {
    id: 'savings',
    label: 'Saving Goals',
    icon: Target,
    color: 'bg-blue-500',
    route: '/saving-goals'
  },
  {
    id: 'budget',
    label: 'Budget',
    icon: PieChart,
    color: 'bg-purple-500',
    route: '/budget'
  },
];

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const icon = createIconMap(isDarkColorScheme);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuSelect = (option: MenuOption) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      router.push(option.route as any);
    }, 150);
  };

  return (
    <>
      {/* Popup Menu Modal */}
      <Modal
        visible={isMenuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsMenuOpen(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/40"
          activeOpacity={1}
          onPress={() => setIsMenuOpen(false)}
        >
          <View className="absolute bottom-32 right-6 gap-3">
            {menuOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <View
                  key={option.id}
                  className="flex-row items-center gap-3"
                >
                  <View className="bg-white px-4 py-2 rounded-full shadow-lg">
                    <Text className="text-sm font-medium text-gray-700">
                      {option.label}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleMenuSelect(option)}
                    className={`${option.color} w-14 h-14 rounded-full items-center justify-center shadow-lg`}
                    activeOpacity={0.8}
                  >
                    <IconComponent size={24} color="white" />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Tab Bar */}
      <View className='absolute bottom-10 left-0 right-0'>
        <View className='flex-row justify-between items-center mx-20 py-5 bg-white dark:bg-gray-800 rounded-full shadow-lg'>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;
            const isMiddleTab = index === 1; // Assuming middle position for 3 tabs

            // Render the center "+" button
            if (isMiddleTab) {
              return (
                <View key={route.name} className='flex-1 items-center'>
                  <TouchableOpacity
                    onPress={() => setIsMenuOpen(!isMenuOpen)}
                    className={`${
                      isMenuOpen ? 'bg-gray-700' : 'bg-indigo-600'
                    } w-14 h-14 rounded-full items-center justify-center shadow-lg -mt-8`}
                    activeOpacity={0.8}
                  >
                    {isMenuOpen ? (
                      <X size={28} color="white" />
                    ) : (
                      <Plus size={28} color="white" />
                    )}
                  </TouchableOpacity>
                </View>
              );
            }

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              }) as { defaultPrevented?: boolean };

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TabBarButton
                key={route.name}
                onLongPress={onLongPress}
                onPress={onPress}
                styles='flex-1 justify-center items-center gap-1'
                isFocused={isFocused}
                routeName={route.name}
                label={typeof label === 'string' ? label : route.name}
                icon={icon}
              />
            );
          })}
        </View>
      </View>
    </>
  );
}
