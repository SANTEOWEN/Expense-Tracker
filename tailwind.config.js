const { hairlineWidth, platformSelect } = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: withOpacity('border'),
        background: withOpacity("background"),
        foreground: withOpacity("foreground"),
        primary: withOpacity("primary"),
        secondary: withOpacity("secondary"),
        destructive: withOpacity("destructive"),
        muted: withOpacity("muted"),
        accent: withOpacity("accent"),
        popover: withOpacity("popover"),
        card: withOpacity("card"),
        input: withOpacity('input'),

        primary: {
          DEFAULT: withOpacity("primary"),
          foreground: withOpacity("primary-foreground"),
        },
        secondary: {
          DEFAULT: withOpacity("secondary"),
          foreground: withOpacity("secondary-foreground"),
        },
        destructive: {
          DEFAULT: withOpacity("destructive"),
          foreground: withOpacity("destructive-foreground"),
        },
        muted: {
          DEFAULT: withOpacity("muted"),
          foreground: withOpacity("muted-foreground"),
        },
        accent: {
          DEFAULT: withOpacity("accent"),
          foreground: withOpacity("accent-foreground"),
        },
        popover: {
          DEFAULT: withOpacity("popover"),
          foreground: withOpacity("popover-foreground"),
        },
        card: {
          DEFAULT: withOpacity("card"),
          foreground: withOpacity("card-foreground"),
        },
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [],
};

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return platformSelect({
        ios: `color-mix(in srgb, var(--${variableName}) ${opacityValue * 100}%, transparent)`,
        android: `color-mix(in srgb, var(--android-${variableName}) ${opacityValue * 100}%, transparent)`,
      });
    }
    return platformSelect({
      ios: `var(--${variableName})`,
      android: `var(--android-${variableName})`,
    });
  };
}
