const WHATSAPP_NUMBER = "573001234567";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero recibir asesoría para encontrar la lavadora ideal para mi hogar 🙂")}`;

const chips = ["Línea Estándar", "Línea Premium", "18 - 22 lb", "Desde $650.000"];

export default function CatalogBanner() {
    return (
        <section className="pt-24 pb-0 bg-gradient-to-br from-warm-white via-beige/40 to-secondary/30 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[420px]">

                    {/* LEFT */}
                    <div className="py-10 lg:py-16">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 bg-green-deep/10 border border-green-deep/20 rounded-full px-4 py-1.5 mb-5">
                            <span className="w-2 h-2 rounded-full bg-green-deep animate-pulse" />
                            <span className="text-green-deep text-xs font-semibold font-inter tracking-wide">Catálogo disponible</span>
                        </div>

                        <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
                            Lavadoras restauradas{" "}
                            <span className="italic text-green-deep">listas para tu hogar</span>
                        </h1>

                        <p className="text-muted-foreground font-inter text-base md:text-lg leading-relaxed mb-7 max-w-md">
                            Elige por marca, precio o línea comercial y recibe opciones reales por WhatsApp.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <a
                                href="#catalogo"
                                className="inline-flex items-center gap-2 bg-green-deep text-white font-semibold font-inter text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-green-deep/20"
                            >
                                Ver categorías
                            </a>
                            <a
                                href={WA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white border border-border text-foreground font-semibold font-inter text-sm px-6 py-3 rounded-xl hover:border-green-deep/40 hover:text-green-deep transition-all"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Hablar por WhatsApp
                            </a>
                        </div>

                        {/* Microconfianza */}
                        <p className="text-xs text-muted-foreground font-inter">
                            Desde $650.000 · Instalación básica · Garantía limitada
                        </p>
                    </div>

                    {/* RIGHT - image + chips */}
                    <div className="relative flex justify-center items-end h-[340px] lg:h-[420px]">
                        <img
                            src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=85"
                            alt="Lavadora restaurada"
                            className="absolute bottom-0 right-0 h-full object-cover object-center rounded-t-3xl"
                            style={{ maxWidth: "480px", width: "100%" }}
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-warm-white/60 via-transparent to-transparent rounded-t-3xl pointer-events-none" />

                        {/* Floating chips */}
                        <div className="absolute top-6 left-4 flex flex-wrap gap-2 max-w-[200px]">
                            {chips.map((chip, i) => (
                                <span
                                    key={i}
                                    className="bg-white/90 backdrop-blur-sm border border-border text-foreground text-[10px] font-semibold font-inter px-3 py-1.5 rounded-full shadow-sm"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>

                        {/* Price card */}
                        <div className="absolute bottom-6 left-4 bg-white/95 backdrop-blur-sm border border-border rounded-2xl p-3 shadow-xl">
                            <p className="text-[9px] text-muted-foreground font-inter mb-0.5">Precio desde</p>
                            <p className="font-playfair font-bold text-xl text-foreground">$650.000</p>
                            <p className="text-[9px] text-green-deep font-semibold font-inter mt-0.5">+ instalación básica</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}