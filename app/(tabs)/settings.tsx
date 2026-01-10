import { useColorScheme } from '@/lib/useColorScheme';
import { COLORS } from '@/theme/colors';
import { StatusBar } from 'expo-status-bar';
import { ChevronRight, LogOut, Moon, User } from 'lucide-react-native';
import React from 'react';
import { Pressable, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const settings = () => {
    const { colorScheme, toggleColorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <SafeAreaView className='flex-1 bg-background'>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <View className='m-10 flex-1'>
            <View className='flex-col flex-1'>
                <View className='my-5'>
                    <Text className='text-4xl h-11 text-foreground'>Settings</Text>
                </View>
                <View className='my-2'>
                    <Text className='text-input font-bold'>APPEARANCE</Text>
                </View>
                <View className='bg-card border-border border p-4 rounded-md'>
                    <Pressable onPress={() => toggleColorScheme()} className='flex-row items-center justify-between'>
                        <View className='flex-row items-center gap-3'>
                            <View className='w-8 h-8 bg-primary rounded-md items-center justify-center'>
                                <Moon color={isDarkColorScheme ? COLORS.light.grey6 : COLORS.dark.grey6}/>
                            </View>
                            <Text className='text-lg font-medium text-foreground'>Dark Mode</Text>
                        </View>
                        <Switch
                        onValueChange={toggleColorScheme}
                        trackColor={{false: COLORS.light.foreground, true: COLORS.dark.foreground}}
                        thumbColor={COLORS.light.primary}
                        value={isDarkColorScheme}
                        />
                    </Pressable>
                </View>
                <View className='mt-10 my-2'>
                    <Text className='text-input font-bold'>ACCOUNT</Text>
                </View>
                <View className='bg-card border-border border p-4 rounded-md'>
                    <Pressable className='flex-row items-center justify-between'>
                        <View className='flex-row items-center gap-3'>
                            <View className='w-8 h-8 bg-primary rounded-md items-center justify-center'>
                                <User color={isDarkColorScheme ? COLORS.light.grey6 : COLORS.dark.grey6}/>
                            </View>
                            <Text className='text-lg font-medium text-foreground'>Profile</Text>
                        </View>
                        <ChevronRight color={isDarkColorScheme ? COLORS.light.grey6 : COLORS.dark.grey6}/>
                    </Pressable>

                    <View className='border-t border-border my-5'/>

                    <Pressable className='flex-row items-center justify-between'>
                        <View className='flex-row items-center gap-3'>
                            <View className='w-8 h-8 bg-[#fdecec] rounded-md items-center justify-center'>
                                <LogOut color={isDarkColorScheme ? COLORS.light.destructive : COLORS.dark.destructive}/>
                            </View>
                            <Text className='text-lg font-medium text-destructive'>Log Out</Text>
                        </View>
                    </Pressable>
                </View>

                <View className='border-t border-border my-10'/>
                <View className='mt-20'>
                    <Text className='text-center text-foreground font-thin'>Beware of little expenses. A small leak will sink a great ship.</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default settings;
