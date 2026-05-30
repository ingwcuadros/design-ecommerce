import { useReveal } from "@/hooks/useReveal";

const testimonials = [
    {
        name: "Carolina Mejía",
        location: "Medellín, Antioquia",
        initials: "CM",
        color: "bg-amber-100 text-amber-800",
        stars: 5,
        text: "El asesor me explicó todo, me mandó fotos reales y el proceso fue súper organizado. La lavadora llegó limpia y funcionando perfectamente. Mejor de lo que esperaba.",
    },
    {
        name: "Diego Ramírez",
        location: "Bogotá D.C.",
        initials: "DR",
        color: "bg-sky-100 text-sky-800",
        stars: 5,
        text: "Con Hogar Plus fue diferente desde el primer mensaje. Me mostraron lo que tenían, acordamos precio y entregaron el mismo día que dijeron. Proceso muy organizado.",
    },
    {
        name: "Paola Torres",
        location: "Cali, Valle del Cauca",
        initials: "PT",
        color: "bg-rose-100 text-rose-800",
        stars: 5,
        text: "La instalación estuvo incluida y el equipo fue muy amable. Le pregunté mil cosas y me explicaron cómo cuidarla. No esperaba ese nivel de atención.",
    },
    {
        name: "Andrés Moreno",
        location: "Barranquilla, Atlántico",
        initials: "AM",
        color: "bg-green-100 text-green-800",
        stars: 5,
        text: "Llevo 6 meses con mi LG restaurada y no ha tenido ningún problema. Funciona perfecto y el precio fue muy bueno. Lo recomiendo sin pensarlo.",
    },
    {
        name: "Lucía Fernández",
        location: "Manizales, Caldas",
        initials: "LF",
        color: "bg-purple-100 text-purple-800",
        stars: 5,
        text: "Me ayudaron a escoger entre dos opciones sin presionarme. Cuando llegó tenía exactamente las fotos que me mandaron. Ninguna sorpresa. Eso fue lo que más valoré.",
    },
    {
        name: "Roberto Herrera",
        location: "Pereira, Risaralda",
        initials: "RH",
        color: "bg-orange-100 text-orange-800",
        stars: 5,
        text: "Todo fue por WhatsApp y muy fluido. Me mandaron foto, acordamos, y al otro día la tenía en casa instalada. Así debería ser todo.",
    },
];

function Stars({ count }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const headerRef = useReveal();
    const gridRef = useReveal(100);

    return (
        <section className="py-20 md:py-28 bg-warm-white">
            <div className="max-w-6xl mx-auto px-5">
                <div ref={headerRef} className="text-center max-w-xl mx-auto mb-14">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-3">
                        Testimonios
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                        Lo que dicen quienes ya tienen su lavadora
                    </h2>
                    <p className="text-muted-foreground font-inter text-base leading-relaxed">
                        Personas reales, hogares reales.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Stars count={t.stars} />
                            <p className="text-sm text-muted-foreground font-inter leading-relaxed flex-1">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-border">
                                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                                    <span className="text-xs font-semibold font-inter">{t.initials}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-inter font-semibold text-foreground">{t.name}</p>
                                    <p className="text-xs text-muted-foreground font-inter">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}