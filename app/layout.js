import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Tip Calculator App",
  description:
    "A simple and fast tip calculator to split bills and calculate tip per person instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>{children}</body>
    </html>
  );
}
