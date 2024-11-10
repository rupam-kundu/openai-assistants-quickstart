import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BioInvestAI",
  description: "BioInvestAI is an AI-powered assistant that accelerates biopharma investments by providing rapid preliminary analysis of early-stage startups. BioInvestAI leverages advanced AI and Retrieval Augmented Generation to streamline due diligence, save time, and enhance your investment decisions in the biopharma sector.",
  icons: {
    icon: "/openai.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          {assistantId ? children : <Warnings />}
        </body>
      </UserProvider>
    </html>
  );
}
