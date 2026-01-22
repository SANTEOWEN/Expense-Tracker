import { createIconMap } from '@/constants/Icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { useNavigationMode } from 'react-native-navigation-mode';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTransactions from './AddTransactions';
import { Modal } from './Modal';
import { TabBarButton } from './TabBarButton';


export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const [visible, setVisible] = useState(false);
    const { colorScheme, isDarkColorScheme } = useColorScheme();
    const icon = createIconMap(isDarkColorScheme);
    const { navigationMode, loading, error } = useNavigationMode()



    return (
        <SafeAreaView>
            <View className='flex-row items-center justify-center w-full gap-5 my-2'>
                <View className={`flex-row justify-centerc items-center bg-card border-border border rounded-full p-2`}>
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
                                styles='justify-center items-center gap-1 px-5'
                                isFocused={isFocused}
                                routeName={route.name}
                                label={typeof label === 'string' ? label : route.name}
                                icon={icon}
                            />

                        );
                    })}
                </View>
                <Pressable className='bg-card border-border border rounded-full w-16 h-16 items-center justify-center' onPress={() => (setVisible(true))}>
                        <Plus color={isDarkColorScheme ? 'white' : 'black'}/>
                </Pressable>
                <Modal isOpen={visible} withInput={true}>
                    <AddTransactions onPress={() => (setVisible(false))}/>
                </Modal>
            </View>
        </SafeAreaView>
    );
}
