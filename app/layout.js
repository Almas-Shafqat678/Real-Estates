// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Homyz",
  description: "Find your dream property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar /> {/* ✅ Navbar always visible */}
        {children}
      </body>
    </html>
  );
}
