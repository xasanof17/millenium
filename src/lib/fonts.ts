import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  // adjustFontFallback: false,
});
