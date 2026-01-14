import Hero_section from "./Components/Hero_section";
import Header from "./Components/Header";
import About_section from "./Components/About_section";
import Gallery from "./Components/Gallery";
import Review_section from "./Components/Review_section";
import Order_info from "./Components/Order_info";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero_section />

      {/* About Section */}
      <About_section />

      {/* Gallery */}
      <Gallery />

      {/* Reviews Section */}
      <Review_section />

      {/* Order Info */}
      <Order_info />

      {/* Footer */}
      <Footer />
    </div>
  );
}
