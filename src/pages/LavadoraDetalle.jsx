import { useParams, Link } from "react-router-dom";
import { products } from "@/components/lavadoras/catalogData";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppSticky from "@/components/home/WhatsAppSticky";
import DetailGallery from "@/components/lavadoras/detail/DetailGallery";
import DetailInfo from "@/components/lavadoras/detail/DetailInfo";
import DetailLineExplainer from "@/components/lavadoras/detail/DetailLineExplainer";
import DetailHowItWorks from "@/components/lavadoras/detail/DetailHowItWorks";
import { ChevronLeft } from "lucide-react";

export default function LavadoraDetalle() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen font-inter flex items-center justify-center">
                <div className="text-center">
                    <p className="text-muted-foreground mb-4">Categoría no encontrada.</p>
                    <Link to="/lavadoras" className="text-green-deep underline text-sm">
                        Ver todas las lavadoras
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen font-inter bg-background">
            <Navbar />
            <main className="pt-20">
                {/* Breadcrumb */}
                <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-4">
                    <Link
                        to="/lavadoras"
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-inter"
                    >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        Volver al catálogo
                    </Link>
                </div>

                {/* Main grid */}
                <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                        <DetailGallery product={product} />
                        <DetailInfo product={product} />
                    </div>

                    {/* Lower sections */}
                    <div className="mt-14 space-y-10">
                        <DetailLineExplainer segmento={product.segmento} />
                        <DetailHowItWorks product={product} />
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppSticky />
        </div>
    );
}