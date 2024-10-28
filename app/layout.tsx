import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BioMed Copilot",
  description: "AI agent for biomedicine startups",
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
