import { Layout } from "@/components/Layout/Layout";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "DOit",
  description: "Освітня платформа для команди",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
