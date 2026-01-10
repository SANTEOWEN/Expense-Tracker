import { createIconMap } from '@/constants/Icons';
import { useColorScheme } from '@/lib/useColorScheme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { TabBarButton } from './TabBarButton';


export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
const {colorScheme, isDarkColorScheme} = useColorScheme();
const icon = createIconMap(isDarkColorScheme)



  return (
    <View className='flex-row bottom-10 justify-between items-center mx-20 py-5'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

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
  );
}
