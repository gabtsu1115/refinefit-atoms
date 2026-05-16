import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Index from "@/pages/Index";
import Facilities from "@/pages/Facilities";
import Pricing from "@/pages/Pricing";
import Access from "@/pages/Access";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/access" element={<Access />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <MobileCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;