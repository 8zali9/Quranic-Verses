import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header/Header'

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Quranic Verses";
const APP_DEFAULT_TITLE = "Quranic Verses";
const APP_TITLE_TEMPLATE = "%s - Quranic Verses";
const APP_DESCRIPTION = "Quranic Verses Application for displaying verses from The Quran";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
      </body>
    </html>
  );
}
