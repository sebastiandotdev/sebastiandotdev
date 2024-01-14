import Footer from "@/components/footer";
import Menu from "@/components/menu";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body>
        <Menu />
        <main className="container mx-auto max-w-4xl px-4 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
