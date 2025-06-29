import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContextProvider from "./context/dataContext";
import Work from "./components/work"
import { useDataContext } from "./context/dataContext";

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
