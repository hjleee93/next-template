import "./globals.css";
import { CounterStoreProvider } from "@/providers/counter-store-provider";
import Providers from "@/providers/react-query-provider";
import { initMocks } from "@/mocks";
import { MSWComponent } from "@/providers/MSWComponent";

initMocks()

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWComponent>
          <Providers>
          <CounterStoreProvider>
          {children}
          </CounterStoreProvider>
        </Providers>
      </MSWComponent>
      </body>
    </html>
  );
}
