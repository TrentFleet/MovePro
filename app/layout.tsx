import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your connected Workflow",
  description: "Simple and Powerful Workout Diary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
                <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <body className={font.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
