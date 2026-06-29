import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Client Hub Lite",
  description: "Simple client management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}