import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./redux/Features/provider";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BreatheIn",
  description: "Live your life the fullest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
