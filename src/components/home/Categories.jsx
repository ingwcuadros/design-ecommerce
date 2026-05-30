import { useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "573001234567";

const categories = [
    {
        name: "LG Automática",
        description: "Carga superior · 18–22 kg",
        detail: "Restaurada y revisada",
        price: "Desde $450.000",
        image: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=600&q=85",
        tag: "Más solicitada",
        msg: "Hola, me interesa una lavadora LG Automática restaurada 🙂",
    },
    {
        name: "Whirlpool",
        description: "Carga superior · Alta durabilidad",
        detail: "Restaurada y revisada",
        price: "Desde $380.000",
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&q=85",
        tag: null,
        msg: "Hola, me interesa una lavadora Whirlpool restaurada 🙂",
    },
    {
        name: "Haceb",
        description: "Carga superior · Compacta",
        detail: "Restaurada y revisada",
        price: "Desde $290.000",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=85",
        tag: "Mejor precio",
        msg: "Hola, me interesa una lavadora Haceb restaurada 🙂",
    },
    {
        name: "Samsung Frontal",
        description: "Carga frontal · Alto rendimiento",
        detail: "Restaurada y revisada",
        price: "Desde $620.000",
        image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=85",
        tag: "Premium",
        msg: "Hola, me interesa una lavadora Samsung de carga frontal restaurada 🙂",
    },
];

function WaIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function useReveal(delay = 0) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    }, delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);
    return ref;
}

function CategoryCard({ cat, index }) {
    const ref = useReveal(index * 80);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cat.msg)}`;

    return (
        <div
            ref={ref}
            className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300"
        >
            {/* Image area — clean, premium background */}
            <div className="relative h-52 overflow-hidden bg-secondary/40 flex items-center justify-center">
                <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                />
                {/* Light overlay for clean look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                {cat.tag && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-white/95 backdrop-blur-sm text-green-deep text-xs font-semibold font-inter px-3 py-1 rounded-full border border-green-deep/20 shadow-sm">
                            {cat.tag}
                        </span>
                    </div>
                )}

                {/* Verified badge */}
                <div className="absolute bottom-3 right-3">
                    <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
                        <svg className="w-3 h-3 text-green-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs font-inter font-medium text-green-deep">{cat.detail}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
                <div>
                    <h3 className="font-inter font-semibold text-base text-foreground mb-0.5">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground font-inter">{cat.description}</p>
                </div>

                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-xs text-muted-foreground font-inter mb-0.5">Precio aproximado</p>
                        <span className="font-playfair text-green-deep font-semibold text-lg">{cat.price}</span>
                    </div>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-deep text-white text-xs font-semibold font-inter py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm shadow-green-deep/20"
                >
                    <WaIcon />
                    Lo quiero
                </a>
            </div>
        </div>
    );
}

export default function Categories() {
    const headerRef = useReveal();

    return (
        <section id="categorias" className="py-20 md:py-28 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-5">
                {/* Header */}
                <div ref={headerRef} className="text-center max-w-xl mx-auto mb-14">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-3">
                        Catálogo
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                        Categorías disponibles
                    </h2>
                    <p className="text-muted-foreground font-inter text-base leading-relaxed">
                        Marcas reconocidas, revisadas y listas para tu hogar. Los precios son aproximados y varían según disponibilidad y segmento.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((cat, i) => (
                        <CategoryCard key={i} cat={cat} index={i} />
                    ))}
                </div>

                {/* Note */}
                <p className="text-center text-xs text-muted-foreground font-inter mt-8">
                    ¿Buscas una marca o modelo específico?{" "}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, busco una lavadora específica y quiero saber si tienen disponibilidad 🙂")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-deep underline underline-offset-2 hover:opacity-75 transition-opacity"
                    >
                        Escríbenos y buscamos opciones para ti.
                    </a>
                </p>
            </div>
        </section>
    );
}