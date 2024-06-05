import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div>
        <div className="flex flex-row gap-4 text-orange-300 ">
            <Link href="/dashboard/favorites">Favoritos</Link>
            <Link href="/dashboard/orders">Orders</Link>
            <Link href="/car">CART</Link>
        </div>
    </div>
    {children}
    </>
  );
}
