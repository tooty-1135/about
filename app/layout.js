import { Inter } from "next/font/google";
import "./globals.scss";
import { Windowsize } from "@/data/componets/Windowsize";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asteroid 的網頁",
  description: "這是Asteroid的網頁，裡面有關於他的資訊",
  openGraph: {
    images: '/asteroid_avatar.png',
  },
};

export const viewport = {
  themeColor: '#f4f8fb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-tw">
      <Windowsize>
        <body className={inter.className}>
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
        </body>
      </Windowsize>
    </html>
  );
}
