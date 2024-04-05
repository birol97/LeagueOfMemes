import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"> </link>
    <link rel="preconnect" href="https://fonts.googleapis.com"> </link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
   </Head>
        <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
