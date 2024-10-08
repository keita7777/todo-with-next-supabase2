import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { RecoilProvider } from "./recoil/RecoilProvider";

export const metadata: Metadata = {
  title: "TODO Next App",
  description: "TODOリストを作成できます",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-slate-300 max-w-screen-md md:mx-auto m-6 ">
        <RecoilProvider>
          <Header />
          <main className="px-2 py-2">{children}</main>

          <Footer />
        </RecoilProvider>
      </body>
    </html>
  );
}
