import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vertical Foundation | Vitruveo Governance",
  description: "Vertical Foundation governs, manages and funds the Vitruveo ecosystem - an EVM-compatible L1 blockchain built for the AI era.",
  keywords: ["Vertical Foundation", "Vitruveo", "blockchain", "L1", "EVM", "AI", "HOST protocol", "Web3"],
  openGraph: {
    title: "Vertical Foundation | Vitruveo Governance",
    description: "Vertical Foundation governs, manages and funds the Vitruveo ecosystem.",
    type: "website",
  },
  icons: {
    icon: "/assets/vertical-foundation-logomark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
