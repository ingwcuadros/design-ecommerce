import { useState, useEffect, useRef, useCallback } from "react";

const WHATSAPP_NUMBER = "573001234567";

const WaIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const slides = [
    {
        id: 1,
        tag: "Línea Premium",
        tagColor: "bg-white/20 text-white border border-white/30",
        headline: "Lavadoras restauradas para un hogar que funciona mejor",
        sub: "Seleccionadas, revisadas y listas para instalar. Con acompañamiento real en todo el proceso.",
        brand: "LG Automática",
        capacity: "22 kg · Carga superior",
        price: "Desde $520.000",
        state: "Restaurada y revisada",
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=900&q=85",
        msg: "Hola, me interesa una LG Automática de la Línea Premium 🙂",
        accent: "from-[#1a3329]/90 via-[#1a3329]/60 to-transparent",
    },
    {
        id: 2,
        tag: "Línea Premium",
        tagColor: "bg-white/20 text-white border border-white/30",
        headline: "Línea Premium: mejor estado visual, revisión técnica y acompañamiento",
        sub: "Equipos con mínimo desgaste estético, funcionamiento garantizado y entrega coordinada.",
        brand: "Samsung Frontal",
        capacity: "18 kg · Carga frontal",
        price: "Desde $620.000",
        state: "Restaurada y revisada",
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=900&q=85",
        msg: "Hola, me interesa una Samsung Frontal de la Línea Premium 🙂",
        accent: "from-[#1c2e45]/90 via-[#1c2e45]/60 to-transparent",
    },
    {
        id: 3,
        tag: "Línea Estándar",
        tagColor: "bg-white/20 text-white border border-white/30",
        headline: "Opciones seleccionadas listas para instalar en tu hogar",
        sub: "Equipos revisados técnicamente con entrega e instalación incluidas. Confiables desde el primer día.",
        brand: "Whirlpool",
        capacity: "18 kg · Carga superior",
        price: "Desde $380.000",
        state: "Restaurada y revisada",
        image: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=900&q=85",
        msg: "Hola, quiero ver opciones disponibles de Hogar Plus 🙂",
        accent: "from-[#2a1f14]/90 via-[#2a1f14]/60 to-transparent",
    },
];

function MainSlider() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const pauseRef = useRef(null);

    const goTo = useCallback((idx) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
        setCurrent(idx);
    }, [isAnimating]);

    const handleManual = (idx) => {
        setIsPaused(true);
        clearTimeout(pauseRef.current);
        goTo(idx);
        pauseRef.current = setTimeout(() => setIsPaused(false), 8000);
    };

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 4500);
        return () => clearInterval(id);
    }, [isPaused]);

    useEffect(() => () => clearTimeout(pauseRef.current), []);

    const slide = slides[current];

    return (
        <div className="relative h-full min-h-[340px] md:min-h-0 rounded-3xl overflow-hidden group">
            {/* Background image with transition */}
            {slides.map((s, i) => (
                <div
                    key={s.id}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: i === current ? 1 : 0 }}
                >
                    <img
                        src={s.image}
                        alt={s.brand}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${s.accent}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-9">
                <div>
                    <span className={`inline-flex items-center text-[10px] font-semibold font-inter tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-sm ${slide.tagColor}`}>
                        {slide.tag}
                    </span>
                </div>

                <div>
                    {/* Product meta */}
                    <div className="mb-4 flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="text-white/60 text-[10px] font-inter">✓ {slide.state}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-white/80 text-xs font-inter font-medium">{slide.brand}</span>
                            <span className="text-white/40 text-xs">·</span>
                            <span className="text-white/60 text-xs font-inter">{slide.capacity}</span>
                        </div>
                    </div>

                    <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-[1.15] mb-3">
                        {slide.headline}
                    </h2>
                    <p className="text-sm text-white/75 font-inter leading-relaxed mb-2 max-w-sm">
                        {slide.sub}
                    </p>
                    <p className="text-white font-playfair font-semibold text-xl mb-6">{slide.price}</p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-2.5">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(slide.msg)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-deep text-white font-semibold text-sm font-inter px-5 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-black/25"
                        >
                            <WaIcon />
                            Lo quiero
                        </a>
                        <a
                            href="#catalogo"
                            className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-medium text-sm font-inter px-5 py-3 rounded-xl hover:bg-white/25 active:scale-95 transition-all"
                        >
                            Ver opciones
                        </a>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex items-center gap-2 mt-4">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleManual(i)}
                            className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
                            aria-label={`Ir al slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function BenefitCard({ icon, title, text, cta = null, ctaHref = null }) {
    return (
        <div className="bg-warm-white border border-border rounded-3xl p-7 flex flex-col gap-4 h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-green-deep/10 text-green-deep flex items-center justify-center group-hover:bg-green-deep group-hover:text-white transition-all duration-300 flex-shrink-0">
                {icon}
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-inter font-semibold text-base text-foreground leading-snug">{title}</h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed flex-1">{text}</p>
            </div>
            {cta && ctaHref && (
                <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold font-inter text-green-deep border border-green-deep/30 px-4 py-2.5 rounded-xl hover:bg-green-deep hover:text-white hover:border-green-deep transition-all self-start"
                >
                    <WaIcon />
                    {cta}
                </a>
            )}
        </div>
    );
}

export default function HeroBanner() {
    return (
        <section className="pt-20 pb-8 md:pt-24 md:pb-10 bg-background">
            <div className="max-w-[1400px] mx-auto px-5 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:h-[520px]">
                    {/* Left — big slider (60%) */}
                    <div className="lg:col-span-3 h-[380px] lg:h-full">
                        <MainSlider />
                    </div>

                    {/* Right — two benefit cards (40%) */}
                    <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        <BenefitCard
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            }
                            title="Revisadas antes de llegar a tu hogar"
                            text="Lavadoras seleccionadas, revisadas técnicamente y acompañadas por Hogar Plus. Cada equipo funciona al 100% antes de salir."
                        />
                        <BenefitCard
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            }
                            title="Compra asistida por WhatsApp"
                            text="Te ayudamos a elegir según tu espacio, presupuesto y necesidad. Un asesor real, sin bots, sin formularios."
                            cta="Escribir ahora"
                            ctaHref={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, necesito ayuda para elegir una lavadora para mi hogar 🙂")}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
