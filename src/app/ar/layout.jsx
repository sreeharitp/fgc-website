import Footer from "@/components/ar/footer/Footer";
import Navbar from "@/components/ar/navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="dir-rtl font-mada">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
