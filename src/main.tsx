import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// const theme = extendTheme({
//   config,
//   colors: {
//     primary: {
//       50: "#e0e7ff",
//       100: "#c7d2fe",
//       200: "#a5b4fc",
//       300: "#818cf8",
//       400: "#6366f1",
//       500: "#4f46e5",
//       600: "#4338ca",
//       700: "#3730a3",
//       800: "#312e81",
//       900: "#1E3A8A", // Navy Blue
//     },
//     secondary: {
//       50: "#f0fdf4",
//       100: "#dcfce7",
//       200: "#bbf7d0",
//       300: "#86efac",
//       400: "#4ade80",
//       500: "#22c55e",
//       600: "#16a34a",
//       700: "#15803d",
//       800: "#166534",
//       900: "#14532d", // Green Accent
//     },
//     gray: {
//       50: "#f9fafb",
//       100: "#f3f4f6",
//       200: "#e5e7eb",
//       300: "#d1d5db",
//       400: "#9ca3af",
//       500: "#6b7280",
//       600: "#4b5563",
//       700: "#374151",
//       800: "#1f2937",
//       900: "#111827", // Gray
//     },
//   },
//   fonts: {
//     heading: "Merriweather, sans-serif",
//     body: "Inter, sans-serif",
//   },
// });

const theme = extendTheme({
  config,
colors: {
  text: {
    primary: "#000000",
  },
  background: {
    primary: "#FFFFFF",
  },
  hover: {
    primary: "#A0AEC0",
  },
  accent: {
    primary: "#3182CE",
  },
  border: {
    primary: "#E2E8F0",
  },
},
styles: {
  global: {
    "html, body": {
      color: "text.primary",
      backgroundColor: "background.primary",
      lineHeight: "tall",
    },
    a: {
      color: "accent.primary",
      _hover: {
        color: "hover.primary",
      },
    },
  },
},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
