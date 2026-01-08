import { COLORS } from "@/theme/colors";
import { useColorScheme as useNativewindColorScheme } from "nativewind";


function useColorScheme() {
    const { colorScheme, setColorScheme } = useNativewindColorScheme();

    function toggleColorScheme() {
        setColorScheme(colorScheme === "light" ? "dark" : "light");
    }

    return {
        colorScheme: colorScheme ?? "light",
        isDarkColorScheme: colorScheme === "dark",
        setColorScheme,
        toggleColorScheme,
        colors: COLORS[colorScheme ?? "light"],
    };
}

export { useColorScheme };
