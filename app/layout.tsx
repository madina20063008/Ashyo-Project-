import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/query/QueryClientProvider";

export const metadata: Metadata = {
  title: "Ashyo",
  description: "Ashyo maket for sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./logo.svg" />
      </head>
      <body
        className={` antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
