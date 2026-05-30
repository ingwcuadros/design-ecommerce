import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "573001234567";

const products = [
    {
        id: "lg-turbodrum",
        name: "LG TurboDrum",
        marca: "LG",
        segmento: "Línea Premium",
        capacidad: "22 lb",
        tipo: "Carga superior",
        precio: "Desde $950.000",
        precioNum: 950000,
        image: "/images/lavadoras/lavadora-lg-carga-superior-19-kilos-wt19ovtb-negro.avif",
        msg: "Hola, estoy interesado en la categoría LG TurboDrum - Línea Premium. ¿Qué opciones tienen disponibles?",
    },
    {
        id: "samsung-digital-18",
        name: "Samsung Digital 18 lb",
        marca: "Samsung",
        segmento: "Línea Premium",
        capacidad: "18 lb",
        tipo: "Digital",
        precio: "Desde $870.000",
        precioNum: 870000,
        image: "/images/lavadoras/lavadora-samsung-bespoke-carga-superior-ai-wash-13-kilos-wa80f13s5bco-negra.avif",
        msg: "Hola, estoy interesado en la categoría Samsung Digital 18 lb - Línea Premium. ¿Qué opciones tienen disponibles?",
    },
    {
        id: "haceb-carga-superior",
        name: "Haceb Carga Superior",
        marca: "Haceb",
        segmento: "Línea Estándar",
        capacidad: "16 lb",
        tipo: "Carga superior",
        precio: "Desde $650.000",
        precioNum: 650000,
        image: "/images/lavadoras/lavadora-gris.avif",
        msg: "Hola, estoy interesado en la categoría Haceb Carga Superior - Línea Estándar. ¿Qué opciones tienen disponibles?",
    },
    {
        id: "whirlpool-automatica",
        name: "Whirlpool Automática",
        marca: "Whirlpool",
        segmento: "Línea Estándar",
        capacidad: "18 lb",
        tipo: "Automática",
        precio: "Desde $720.000",
        precioNum: 720000,
        image: "/images/lavadoras/lavadora-gris2.avif",
        msg: "Hola, estoy interesado en la categoría Whirlpool Automática - Línea Estándar. ¿Qué opciones tienen disponibles?",
    },
    {
        id: "mabe-20lb",
        name: "Mabe 20 libras",
        marca: "Mabe",
        segmento: "Línea Estándar",
        capacidad: "20 lb",
        tipo: "Automática",
        precio: "Desde $780.000",
        precioNum: 780000,
        image: "/images/lavadoras/lavadora-mabe-carga-superior-20-kilos-lma0220wdgab0-gris.avif",
        msg: "Hola, estoy interesado en la categoría Mabe 20 libras - Línea Estándar. ¿Qué opciones tienen disponibles?",
    },
];

const WaIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const segmentoBadge = {
    "Línea Premium": "bg-green-deep/10 text-green-deep border-green-deep/20",
    "Línea Estándar": "bg-muted text-muted-foreground border-border",
};

function ProductCard({ product }) {
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.msg)}`;

    return (
        <Link
            to={`/lavadoras/${product.id}`}
            className="group flex-shrink-0 w-[280px] md:w-[300px] bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 hover:border-green-deep/20 transition-all duration-300 flex flex-col"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-[10px] font-bold font-inter px-3 py-1.5 rounded-full border ${segmentoBadge[product.segmento]}`}>
                    {product.segmento}
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-foreground text-[10px] font-semibold font-inter px-2.5 py-1 rounded-full border border-border">
                    {product.marca}
                </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1 gap-2">
                <div>
                    <h3 className="font-inter font-semibold text-sm text-foreground leading-tight">{product.name}</h3>
                    <p className="text-xs text-muted-foreground font-inter mt-0.5">{product.capacidad} · {product.tipo}</p>
                </div>

                {/* Price + CTA */}
                <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-3">
                    <div>
                        <p className="text-[9px] text-muted-foreground font-inter mb-0.5">Precio aprox.</p>
                        <p className="font-playfair font-bold text-lg text-foreground">{product.precio}</p>
                    </div>

                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 bg-green-deep/10 text-green-deep border border-green-deep/20 hover:bg-green-deep hover:text-white text-[11px] font-bold font-inter px-3 py-2 rounded-lg transition-all flex-shrink-0"
                    >
                        <WaIcon />
                        Lo quiero
                    </a>
                </div>
            </div>
        </Link>
    );
}

export default function Catalog() {
    const headerRef = useReveal();
    const trackRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const pauseTimerRef = useRef(null);

    const total = products.length;
    const CARD_WIDTH = 316;

    const scrollTo = useCallback((index) => {
        const el = trackRef.current;
        if (!el) return;
        const clamped = Math.max(0, Math.min(index, total - 1));
        el.scrollTo({ left: clamped * CARD_WIDTH, behavior: "smooth" });
        setCurrent(clamped);
    }, [total]);

    const handleManual = (dir) => {
        setIsPaused(true);
        clearTimeout(pauseTimerRef.current);
        const next = (current + dir + total) % total;
        scrollTo(next);
        pauseTimerRef.current = setTimeout(() => setIsPaused(false), 8000);
    };

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setCurrent(prev => {
                const next = (prev + 1) % total;
                const el = trackRef.current;
                if (el) el.scrollTo({ left: next * CARD_WIDTH, behavior: "smooth" });
                return next;
            });
        }, 3800);
        return () => clearInterval(id);
    }, [isPaused, total]);

    useEffect(() => () => clearTimeout(pauseTimerRef.current), []);

    return (
        <section id="catalogo" className="py-14 md:py-20 bg-secondary/20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

                {/* Header */}
                <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-2">
                            Catálogo destacado
                        </p>
                        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                            Lavadoras disponibles
                        </h2>
                        <p className="text-sm text-muted-foreground font-inter mt-2">
                            Restauradas, revisadas y listas para tu hogar.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => handleManual(-1)}
                            className="w-11 h-11 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground hover:bg-green-deep hover:text-white hover:border-green-deep transition-all duration-200"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handleManual(1)}
                            className="w-11 h-11 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground hover:bg-green-deep hover:text-white hover:border-green-deep transition-all duration-200"
                            aria-label="Siguiente"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div
                    ref={trackRef}
                    className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6 mb-10">
                    {products.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setIsPaused(true); scrollTo(i); clearTimeout(pauseTimerRef.current); pauseTimerRef.current = setTimeout(() => setIsPaused(false), 8000); }}
                            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-green-deep" : "w-2 h-2 bg-border hover:bg-muted-foreground"}`}
                            aria-label={`Ir al producto ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/lavadoras"
                        className="inline-flex items-center gap-2.5 bg-white border border-green-deep/30 text-green-deep font-semibold font-inter text-sm px-7 py-3.5 rounded-xl hover:bg-green-deep hover:text-white hover:border-green-deep transition-all duration-200 shadow-sm"
                    >
                        Ver todas las opciones
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                    <p className="text-xs text-muted-foreground font-inter mt-3">
                        ¿Buscas un modelo específico?{" "}
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, busco un modelo específico de lavadora, ¿tienen disponibilidad? 🙂")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-deep underline underline-offset-2 hover:opacity-75 transition-opacity"
                        >
                            Escríbenos y lo buscamos para ti.
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
