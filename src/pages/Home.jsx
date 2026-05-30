import Navbar from "@/components/home/Navbar";
import HeroBanner from "@/components/home/HeroBanner";
import Catalog from "@/components/home/Catalog";
import WhatsAppGuide from "@/components/home/WhatsAppGuide";
import TrustBar from "@/components/home/TrustBar";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import WhatsAppSticky from "@/components/home/WhatsAppSticky";

export default function Home() {
    return (
        <div className="min-h-screen font-inter">
            <Navbar />
            <main>
                <HeroBanner />
                <Catalog />
                <WhatsAppGuide />
                <TrustBar />
                <FAQ />
            </main>
            <Footer />
            <WhatsAppSticky />
        </div>
    );
}
