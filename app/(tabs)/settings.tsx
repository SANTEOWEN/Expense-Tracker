import { useColorScheme } from '@/lib/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { ChevronRight, Moon, User } from 'lucide-react-native';
import React from 'react';
import { Pressable, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const settings = () => {
    const { colorScheme } = useColorScheme();

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
                    <Pressable className='flex-row items-center justify-between'>
                        <View className='flex-row items-center gap-3'>
                            <View className='w-8 h-8 bg-teal-200 rounded-md items-center justify-center'>
                                <Moon/>
                            </View>
                            <Text className='text-lg font-medium text-foreground'>Dark Mode</Text>
                        </View>
                        <Switch/>
                    </Pressable>
                </View>
                <View className='mt-10 my-2'>
                    <Text className='text-input font-bold'>ACCOUNT</Text>
                </View>
                <View className='bg-card border-border border p-4 rounded-md'>
                    <Pressable className='flex-row items-center justify-between'>
                        <View className='flex-row items-center gap-3'>
                            <View className='w-8 h-8 bg-teal-200 rounded-md items-center justify-center'>
                                <User/>
                            </View>
                            <Text className='text-lg font-medium text-foreground'>Profile</Text>
                        </View>
                        <ChevronRight color={colorScheme == 'dark' ? 'white' : 'black'}/>
                    </Pressable>
                </View>


            </View>
        </View>
    </SafeAreaView>
  )
}

export default settings;
