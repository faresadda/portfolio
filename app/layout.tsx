import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContextProvider from "./context/dataContext";
import Work from "./components/work";
import { useDataContext } from "./context/dataContext";

export const metadata = {
  title: "Fares Adda Full-Stack Developer",
  description:
    "Personal website for Fares Adda, a web developer specialized in React and Node js. Browse projects, services, and contact me.",
  keywords: [
    "Fares Adda",
    "Full Stack Developer",
    "React",
    "Node js",
    "Portfolio",
    "Web Developer",
    "Projects",
    "Services",
  ],
  authors: [{ name: "Fares Adda", url: "https://faresadda.vercel.app" }],
  creator: "Fares Adda",
  publisher: "Fares Adda",
  openGraph: {
    title: "Fares Adda Full Stack Developer",
    description:
      "Personal website for Fares Adda, a web developer specialized in React and Node.js. Browse projects, services, and contact me.",
    url: "https://faresadda.vercel.app",
    siteName: "Fares Adda Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 500,
        height: 500,
        alt: "Fares Adda Portfolio",
        background: 'black'
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ContextProvider>
          <Navbar />
          {children}
          <Work />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
