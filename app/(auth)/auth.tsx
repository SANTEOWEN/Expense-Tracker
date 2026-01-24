import { useColorScheme } from '@/hooks/useColorScheme';
import { COLORS } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { RectangleGoggles, Wallet } from "lucide-react-native";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
const { colorScheme, toggleColorScheme, isDarkColorScheme } = useColorScheme();

const router = useRouter()

const handleRoute = () => {
    router.navigate('/(tabs)')
}


    return (
        <SafeAreaView className="flex-1 bg-background w-full">
            <View className="m-10 flex-1">
                <View className="flex-col flex-1">
                    <View className="flex-none my-5 items-center justify-start">
                        <View className="w-16 h-16 bg-primary rounded-md items-center justify-center my-5">
                            <Wallet color={isDarkColorScheme ? COLORS.light.grey6 : COLORS.dark.grey6}/>
                        </View>
                        <View className='my-3 w-full'>
                            <Text className='text-foreground text-2xl text-center'>Welcome Back</Text>
                        </View>
                        <View className='my-3 w-full'>
                            <Text className='text-input text-center'>Enter your details to access your expense tracker account.</Text>
                        </View>
                    </View>

                    <View className='items-start flex-shrink flex-col overflow-auto'>
                        <View className='my-2'>
                            <Text className='text-foreground'>Email Address</Text>
                        </View>
                        <View className='my-1 border-border border w-full rounded-lg p-2'>
                            <TextInput
                            placeholder='example@gmail.com'
                            autoCapitalize='none'
                            />
                        </View>
                        <View className='mb-2'>
                            <Text className='text-foreground'>Password</Text>
                        </View>
                        <View className='border-border border w-full rounded-lg p-2'>
                            <TextInput
                            autoCapitalize='none'
                            placeholder='Password'
                            secureTextEntry
                            />
                        </View>
                    </View>

                    <View className='mt-5 items-end gap-5'>
                        <Pressable>
                            <Text className='text-primary'>Forgot Password?</Text>
                        </Pressable>
                        <View className='items-center justify-center w-full'>
                            <Pressable className='bg-primary p-5 w-full items-center rounded'>
                                <Text className='text-foreground'>Sign In</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View className="flex-row items-center py-4 my-2">
                        <View className="flex-1 h-px bg-border" />
                        <Text className="mx-4 text-input text-sm">Or continue with</Text>
                        <View className="flex-1 h-px bg-border" />
                    </View>

                    <View className='items-center justify-center w-full'>
                        <Pressable className='bg-card border-border border p-5 w-full items-center rounded flex-row justify-center gap-2'>
                            <RectangleGoggles color={isDarkColorScheme ? COLORS.light.grey6 : COLORS.dark.grey6}/>
                            <Text className='text-foreground'>Google</Text>
                        </Pressable>
                    </View>

                    <View className='items-center justify-center w-full flex-row mt-10 gap-2'>
                        <Text className='text-input'>Don't have an account?</Text>
                        <Pressable onPress={() => (handleRoute())}>
                            <Text className='text-primary'> Sign up</Text>
                        </Pressable>
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )

}
