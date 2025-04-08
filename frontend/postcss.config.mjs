const config = {
  plugins: ["@tailwindcss/postcss"],
    theme: {
      extend: {
        screens: {       // Extra small devices
          sm: "640px",        // Small devices
          md: "768px",        // Medium devices
          lg: "1024px",       // Large devices
          xl: "1280px",       // Extra large
          "2xl": "1536px",    // 2x extra large
          "max-sm": { max: "600px" },
          "max-md": { max: "767px" },
          "max-lg": { max: "1023px" },
          "max-xl": { max: "1279px" },
        },
        fontSize: {
          xxs: "0.625rem", // Extra small
          huge: "3rem", // Custom large size
        },
        fontWeight: {
          extrabold: "800",
        },
        letterSpacing: {
          wider: "0.1em",
        },
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: {
          light: "#d1d5db",
          DEFAULT: "#6b7280",
          dark: "#1f2937",
        },
      },
    },
  },
};

export default config;
