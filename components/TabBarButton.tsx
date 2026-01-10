import { IconMap } from '@/constants/Icons';
import { COLORS } from '@/theme/colors';
import React, { useEffect } from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface TabBarButton {
    onPress: (event: GestureResponderEvent) => void;
    onLongPress: (event: GestureResponderEvent) => void;
    styles: string;
    isFocused: boolean;
    routeName: string;
    label: string;
    icon: IconMap;
}

export function TabBarButton({onPress, onLongPress, styles, isFocused, routeName, label, icon}: TabBarButton) {
  const isValidRoute = (name: string): name is keyof IconMap => {
    return name in icon;
  };

  const scale = useSharedValue(0)

  useEffect(() => {
    //Conditionally adding value of the scale(useSharedValue context) by know if the user is focusing on the button. with a duration of 3.5ms
    scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, {
        duration: 400,
    });
  }, [isFocused])


 const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0,1], [1,0]);
    return { opacity }
 })

 const animatedIconStyle = useAnimatedStyle(() => {

    // This variable is responsible for scaling the icons by using the useSharedValue context and with the help of useEffect.
    // when the user focused on the button it will trigger the the scale(useSharedValue context) to increment its value by 1
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

    const top = interpolate(scale.value, [0, 1], [0, 9])

    return {
        transform: [{
            scale: scaleValue
        }],
        top: top,
    }
 })



  return (
    <Pressable className={styles} onPress={onPress} onLongPress={onLongPress}>
        <Animated.View style={animatedIconStyle}>
            {isValidRoute(routeName) && icon[routeName]({
            color: isFocused ? COLORS.light.primary : '#556063'
            })}
        </Animated.View>
        <Animated.Text className={isFocused ? `text-primary` : `text-[#556063] font-normal`} style={animatedTextStyle}>
          {label}
        </Animated.Text>
    </Pressable>
  );
}
