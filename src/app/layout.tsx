import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TECHXAGON ACADEMY - Login",
  description: "Readying the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
