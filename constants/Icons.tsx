import { COLORS } from "@/theme/colors";
import { History, HomeIcon, LucideProps, SlidersVertical } from "lucide-react-native";

export const createIconMap = (isDarkColorScheme: boolean) => ({
  index: (props: LucideProps) => (
    <HomeIcon
      size={24}
      color={isDarkColorScheme ? COLORS.light.primary : COLORS.dark.primary}
      {...props}
    />
  ),
  history: (props: LucideProps) => (
    <History
      size={24}
      color={isDarkColorScheme ? COLORS.light.primary : COLORS.dark.primary}
      {...props}
    />
  ),
  settings: (props: LucideProps) => (
    <SlidersVertical
      size={24}
      color={isDarkColorScheme ? COLORS.light.primary : COLORS.dark.primary}
      {...props}
    />
  )
});

export type IconMap = ReturnType<typeof createIconMap>;
