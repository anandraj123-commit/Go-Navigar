
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Corona Admin UI",
};

export default function VendorLayout({ children }) {
  return (
        <>
        <Sidebar />
        <Header />
        <main style={{ marginLeft: "260px", marginTop: "80px", padding: "20px" }}>
          {children}
        </main>
        <Footer />
       </>
     
  );
}
