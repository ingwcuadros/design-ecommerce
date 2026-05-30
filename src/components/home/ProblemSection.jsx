import { useEffect, useRef } from "react";

const pillars = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Equipos seleccionados y revisados",
        desc: "Cada lavadora pasa por una revisión técnica antes de llegar a ti. Lo que ves es exactamente lo que recibes.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Fotos reales antes de confirmar",
        desc: "Te enviamos fotos actuales del equipo. Conoces exactamente lo que vas a recibir antes de cualquier decisión.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: "Un asesor real en cada paso",
        desc: "Te acompaña una persona real desde que preguntas hasta que tu lavadora está instalada y funcionando.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: "Lista para entrar a tu hogar",
        desc: "Entrega coordinada, instalación básica y prueba funcional incluidas. Solo abre la puerta y empieza a lavar.",
    },
];

function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

export default function ProblemSection() {
    const headerRef = useReveal();
    const gridRef = useReveal();
    const bridgeRef = useReveal();

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                {/* Header */}
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-3">
                        Por qué Hogar Plus
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                        Una experiencia{" "}
                        <span className="italic text-green-deep">más organizada</span>{" "}
                        para equipar tu hogar.
                    </h2>
                    <p className="text-muted-foreground font-inter text-base leading-relaxed">
                        Comprar una lavadora restaurada puede ser sencillo, claro y confiable. Eso es exactamente lo que construimos.
                    </p>
                </div>

                {/* Pillars grid */}
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    {pillars.map((p, i) => (
                        <div
                            key={i}
                            className="group bg-warm-white border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-green-deep/30 hover:shadow-sm transition-all duration-300"
                        >
                            <div className="w-11 h-11 rounded-xl bg-green-deep/10 text-green-deep flex items-center justify-center group-hover:bg-green-deep group-hover:text-white transition-all duration-300">
                                {p.icon}
                            </div>
                            <h3 className="font-inter font-semibold text-sm text-foreground">{p.title}</h3>
                            <p className="text-xs text-muted-foreground font-inter leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bridge banner */}
                <div ref={bridgeRef} className="bg-green-deep rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-20 translate-x-20" />
                    <div className="flex-1 text-center md:text-left relative">
                        <p className="text-white/60 text-xs font-inter uppercase tracking-widest mb-3">
                            Nuestra promesa
                        </p>
                        <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
                            Compra con más tranquilidad y claridad.
                        </h3>
                        <p className="text-white/75 font-inter text-sm leading-relaxed max-w-md">
                            Seleccionamos, revisamos y organizamos cada proceso para que tú solo te preocupes por escoger. Nosotros nos encargamos del resto.
                        </p>
                    </div>
                    <div className="flex-shrink-0 relative">
                        <img
                            src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=80"
                            alt="Lavadora restaurada y lista"
                            className="w-64 h-48 object-cover rounded-2xl opacity-90"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}