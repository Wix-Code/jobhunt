const config = {
  plugins: ["@tailwindcss/postcss"],
    theme: {
    extend: {
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
