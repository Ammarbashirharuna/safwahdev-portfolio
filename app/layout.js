import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Safwahdev Portfolio",
  description: "This is Safwahdev main website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>{children}</body>
    </html>
  );
}
