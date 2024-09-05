import { Inter, JetBrains_Mono, Poppins, Orbitron, Michroma, Exo_2, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const mons = Montserrat({ subsets: ["latin"], weight: "400" });
// fututristic fonts
const orbit = Orbitron({ subsets: ["latin"], weight: "400" });
const microma = Michroma({ subsets: ["latin"], weight: "400" });
const exo2 = Exo_2({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Safwahdev Portfolio",
  description: "This is Safwahdev main website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mons.className}>{children}</body>
    </html>
  );
}
