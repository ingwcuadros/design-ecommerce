import { useReveal } from "@/hooks/useReveal";

const testimonials = [
    {
        name: "Carolina M.",
        location: "Medellín",
        initials: "CM",
        color: "bg-amber-100 text-amber-800",
        text: "El proceso fue súper organizado. La lavadora llegó limpia y funcionando. Mejor de lo que esperaba.",
    },
    {
        name: "Diego R.",
        location: "Bogotá",
        initials: "DR",
        color: "bg-sky-100 text-sky-800",
        text: "Con Hogar Plus fue diferente desde el primer mensaje. Entregaron el mismo día que dijeron. Muy organizado.",
    },
    {
        name: "Paola T.",
        location: "Cali",
        initials: "PT",
        color: "bg-rose-100 text-rose-800",
        text: "La instalación estuvo incluida y el equipo fue muy amable. No esperaba ese nivel de atención.",
    },
    {
        name: "Andrés M.",
        location: "Barranquilla",
        initials: "AM",
        color: "bg-green-100 text-green-800",
        text: "Llevo 6 meses con mi LG restaurada y no ha tenido ningún problema. Lo recomiendo sin pensarlo.",
    },
];

function Stars() {
    return (
        <div className="flex gap-0.5 mb-3">
            {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsCompact() {
    const headerRef = useReveal();
    const gridRef = useReveal(80);

    return (
        <section className="py-16 md:py-20 bg-secondary/20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div ref={headerRef} className="text-center mb-10">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-2">
                        Testimonios
                    </p>
                    <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground">
                        Lo que dicen nuestros clientes
                    </h2>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white border border-border rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <Stars />
                            <p className="text-xs text-muted-foreground font-inter leading-relaxed flex-1">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-2.5 pt-2 border-t border-border">
                                <div className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                                    <span className="text-[10px] font-semibold font-inter">{t.initials}</span>
                                </div>
                                <div>
                                    <p className="text-xs font-inter font-semibold text-foreground">{t.name}</p>
                                    <p className="text-[10px] text-muted-foreground font-inter">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}