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
    {children}
    <div>
        <div className="flex flex-row gap-4 text-orange-300 justify-end p-4 ">
            
            <Link className ="bg-[#222222] border rounded-md px-6 py-3 text-white hover:bg-[#454545]" href="/dashboard/orders">Mis Ordenes 👜</Link>
            <Link className="bg-[#222222] border rounded-md px-6 py-3 text-white hover:bg-[#454545]" href="/cart">Ir al carrito 🛒</Link>
            <Link  className="bg-[#222222] border rounded-md px-6 py-3 text-white hover:bg-[#454545]" href="/dashboard/favorites">Favoritos ❤️</Link>
        </div>
    </div>
    
    </>
  );
}
