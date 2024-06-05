import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes Website",
  description: "Notes Website inspired by google keep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}