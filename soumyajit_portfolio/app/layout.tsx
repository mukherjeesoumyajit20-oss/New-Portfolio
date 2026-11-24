import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Soumyajit Mukherjee | Sales Leadership Portfolio",
  description: "Sales leadership, revenue growth, team development and real-world problem solving across EdTech, CareerTech, SaaS and hospitality.",
  openGraph: { title: "Soumyajit Mukherjee | Sales Leadership Portfolio", description: "Building revenue. Developing people. Scaling sales engines." }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
