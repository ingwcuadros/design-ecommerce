const WHATSAPP_NUMBER = "573001234567";

const lines = [
    {
        name: "Línea Estándar",
        badge: "bg-muted text-muted-foreground border-border",
        headline: "Buena relación calidad-precio",
        desc: "Funcional, revisada y lista para trabajar. Puede presentar marcas de uso visibles en la carcasa, pero su funcionamiento está garantizado.",
        price: "Desde $650.000",
        features: [
            "Revisión técnica completa",
            "Instalación básica incluida",
            "Prueba funcional en casa",
            "Garantía limitada",
        ],
        cta: "Ver Línea Estándar",
        msg: "Hola, estoy interesado en la Línea Estándar de lavadoras. ¿Qué opciones tienen disponibles?",
        highlight: false,
    },
    {
        name: "Línea Premium",
        badge: "bg-green-deep/10 text-green-deep border-green-deep/20",
        headline: "Mejor presentación y menor desgaste",
        desc: "Menor desgaste visual, mejor estética general. Ideal si buscas un equipo que se vea bien en tu hogar además de funcionar perfecto.",
        price: "Desde $850.000",
        features: [
            "Revisión técnica profunda",
            "Limpieza y restauración estética",
            "Instalación básica incluida",
            "Prueba funcional en casa",
            "Garantía limitada",
        ],
        cta: "Ver Línea Premium",
        msg: "Hola, estoy interesado en la Línea Premium de lavadoras. ¿Qué opciones tienen disponibles?",
        highlight: true,
    },
];

export default function CatalogLineComparison() {
    return (
        <section className="py-14 md:py-18 bg-secondary/20 border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="text-center mb-10">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-2">Comparación</p>
                    <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground">
                        Elige tu línea comercial
                    </h2>
                    <p className="text-sm text-muted-foreground font-inter mt-2 max-w-sm mx-auto">
                        Ambas líneas están revisadas y funcionan perfectamente. La diferencia es estética.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                    {lines.map((line, i) => (
                        <div
                            key={i}
                            className={`rounded-3xl border p-7 flex flex-col gap-5 transition-all duration-300
                ${line.highlight
                                    ? "bg-white border-green-deep/25 shadow-xl shadow-green-deep/8 ring-1 ring-green-deep/10"
                                    : "bg-white border-border hover:border-border/60"
                                }`}
                        >
                            {line.highlight && (
                                <div className="flex justify-end">
                                    <span className="text-[10px] font-bold font-inter bg-green-deep text-white px-3 py-1 rounded-full">
                                        Más solicitada
                                    </span>
                                </div>
                            )}

                            <div>
                                <span className={`inline-block text-[10px] font-bold font-inter px-3 py-1 rounded-full border mb-3 ${line.badge}`}>
                                    {line.name}
                                </span>
                                <h3 className="font-playfair text-xl font-semibold text-foreground">{line.headline}</h3>
                                <p className="text-xs text-muted-foreground font-inter mt-2 leading-relaxed">{line.desc}</p>
                            </div>

                            <div>
                                <p className="text-[9px] text-muted-foreground font-inter mb-0.5 uppercase tracking-wider">Precio desde</p>
                                <p className="font-playfair font-bold text-2xl text-foreground">{line.price}</p>
                            </div>

                            <ul className="space-y-2">
                                {line.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-2 text-xs font-inter text-foreground">
                                        <svg className="w-3.5 h-3.5 text-green-deep flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(line.msg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-auto flex items-center justify-center gap-2 font-semibold font-inter text-xs py-3 px-5 rounded-xl transition-all
                  ${line.highlight
                                        ? "bg-green-deep text-white hover:opacity-90 shadow-lg shadow-green-deep/20"
                                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                                    }`}
                            >
                                {line.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}