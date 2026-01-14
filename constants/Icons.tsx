import { COLORS } from "@/theme/colors";
import * as Lucide from 'lucide-react-native';
import { LucideProps } from "lucide-react-native";

export const createIconMap = (isDarkColorScheme: boolean) => ({
  index: (props: LucideProps) => (
    <Lucide.HomeIcon
      size={24}
      color={isDarkColorScheme ? COLORS.light.primary : COLORS.dark.primary}
      {...props}
    />
  ),
  history: (props: LucideProps) => (
    <Lucide.History
      size={24}
      color={isDarkColorScheme ? COLORS.light.primary : COLORS.dark.primary}
      {...props}
    />
  ),
  settings: (props: LucideProps) => (
    <Lucide.SlidersVertical
      size={24}
      color={isDarkColorScheme ? COLORS.light.primary : COLORS.dark.primary}
      {...props}
    />
  )
});

export type IconMap = ReturnType<typeof createIconMap>;


export const iconMap: Record<string, React.FC<LucideProps>> = {
    ShoppingCart: Lucide.ShoppingCart,
    Car: Lucide.Car,
    Tv: Lucide.Tv,
    Zap: Lucide.Zap,
    Heart: Lucide.Heart,
    ShoppingBag: Lucide.ShoppingBag,
    Wallet: Lucide.Wallet,
    Briefcase: Lucide.Briefcase,
    TrendingUp: Lucide.TrendingUp,
    UtensilsCrossed: Lucide.UtensilsCrossed,
}

export function getLucideIcon(name: string) {
    return iconMap[name] ?? Lucide.HelpCircle
}
