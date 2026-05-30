import { useReveal } from "@/hooks/useReveal";

const WHATSAPP_NUMBER = "573001234567";

const features = {
    standard: [
        "Funciona correctamente al 100%",
        "Limpia y revisada técnicamente",
        "Puede tener desgaste visual normal",
        "Excelente relación calidad-precio",
        "Ideal para uso diario sin importar la estética",
    ],
    premium: [
        "Funciona correctamente al 100%",
        "Menor desgaste visual",
        "Mejor percepción estética general",
        "Estado más cercano al original",
        "Para quienes priorizan apariencia y cuidado",
    ],
};

export default function Segments() {
    const headerRef = useReveal();
    const cardsRef = useReveal(100);
    const stdUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me interesa una lavadora de la Línea Estándar 🙂")}`;
    const premUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me interesa una lavadora de la Línea Premium 🙂")}`;

    return (
        <section className="py-20 md:py-28 bg-warm-white">
            <div className="max-w-6xl mx-auto px-5">
                {/* Header */}
                <div ref={headerRef} className="text-center max-w-xl mx-auto mb-14">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-3">
                        Segmentos
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                        ¿Cuál línea es para ti?
                    </h2>
                    <p className="text-muted-foreground font-inter text-base leading-relaxed">
                        Todas nuestras lavadoras pasan por el mismo proceso de revisión técnica. La diferencia está en el estado visual natural del equipo.
                    </p>
                </div>

                {/* Comparison cards */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Standard */}
                    <div className="bg-white border border-border rounded-3xl p-8 flex flex-col gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-3 py-1 mb-4">
                                <span className="w-2 h-2 rounded-full bg-muted-foreground/40"></span>
                                <span className="text-xs font-medium font-inter text-muted-foreground">Línea Estándar</span>
                            </div>
                            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                                Confiable y funcional
                            </h3>
                            <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                                Para quien busca una lavadora que lava perfecto sin pagar de más por la apariencia.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-3">
                            {features.standard.map((f, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-muted flex-shrink-0 flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-muted-foreground font-inter">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground font-inter mb-4">Precios aproximados desde:</p>
                            <p className="font-playfair text-3xl font-semibold text-foreground mb-4">$290.000</p>
                            <a
                                href={stdUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full border border-border text-foreground text-sm font-medium font-inter py-3 rounded-xl hover:bg-secondary transition-all"
                            >
                                Ver disponibilidad Estándar
                            </a>
                        </div>
                    </div>

                    {/* Premium */}
                    <div className="bg-green-deep rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-16 translate-x-16" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-10 -translate-x-10" />

                        <div className="relative">
                            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 mb-4">
                                <span className="w-2 h-2 rounded-full bg-white/80"></span>
                                <span className="text-xs font-medium font-inter text-white/90">Línea Premium</span>
                            </div>
                            <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
                                Cuida cada detalle
                            </h3>
                            <p className="text-sm text-white/70 font-inter leading-relaxed">
                                Para quien quiere que la lavadora se vea bien en su hogar, no solo que funcione.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-3 relative">
                            {features.premium.map((f, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-white/85 font-inter">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="relative mt-auto pt-4 border-t border-white/20">
                            <p className="text-xs text-white/60 font-inter mb-4">Precios aproximados desde:</p>
                            <p className="font-playfair text-3xl font-semibold text-white mb-4">$520.000</p>
                            <a
                                href={premUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-white text-green-deep text-sm font-semibold font-inter py-3 rounded-xl hover:bg-white/90 transition-all"
                            >
                                Ver disponibilidad Premium
                            </a>
                        </div>
                    </div>
                </div>

                {/* Note */}
                <p className="text-center text-xs text-muted-foreground font-inter mt-8 max-w-lg mx-auto">
                    La diferencia entre líneas no es por restauración adicional. Es por el estado visual natural del equipo al momento de seleccionarlo.
                </p>
            </div>
        </section>
    );
}