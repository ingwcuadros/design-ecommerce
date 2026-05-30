import CatalogBanner from "@/components/lavadoras/CatalogBanner";
import CatalogFilters from "@/components/lavadoras/CatalogFilters";
import CatalogGrid from "@/components/lavadoras/CatalogGrid";
import CatalogHowItWorks from "@/components/lavadoras/CatalogHowItWorks";
import CatalogFAQ from "@/components/lavadoras/CatalogFAQ";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppSticky from "@/components/home/WhatsAppSticky";
import { useState } from "react";

export default function Lavadoras() {
    const [filters, setFilters] = useState({
        segmento: "Todas",
        marca: null,
        precioMin: 650000,
        precioMax: 1000000,
    });

    return (
        <div className="min-h-screen font-inter bg-background">
            <Navbar />
            <main>
                <CatalogBanner />
                <CatalogFilters filters={filters} setFilters={setFilters} />
                <CatalogGrid filters={filters} />
                <CatalogHowItWorks />
                <CatalogFAQ />
            </main>
            <Footer />
            <WhatsAppSticky />
        </div>
    );
}