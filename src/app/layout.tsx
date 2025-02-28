import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AntdConfigProvider from "@/components/providers/AntdConfigProvider";
import Sidebar from "@/components/layouts/Sidebar";
import { cn } from "@/lib/utils";
import ReactQueryConfig from "@/components/providers/ReactQueryConfig";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VissSoft Test - Nguyen Quang Hung",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(roboto.className, "bg-[#D3E5FF]")}>
      <body>
        <AntdConfigProvider>
          <ReactQueryConfig>
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
            <div className={"flex h-screen"}>
              <Sidebar />
              <div className={"flex-1"}>{children}</div>
            </div>
          </ReactQueryConfig>
        </AntdConfigProvider>
      </body>
    </html>
  );
}
