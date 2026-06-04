
import "../globals.css";
import Navbar from "./about-us/_components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#FAF6EE]">
      <div >
         <Navbar />
        {children}
      </div>
    </div>
  );
}
