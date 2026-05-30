import { useReveal } from "@/hooks/useReveal";

const benefits = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Revisión técnica incluida",
        desc: "Cada equipo pasa por una revisión funcional completa antes de llegar a tu casa. Lo que recibes, funciona.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        title: "Entrega coordinada",
        desc: "Programamos el día y la hora que mejor te quede. Sin ventanas de tiempo abiertas ni incertidumbre.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Instalación básica incluida",
        desc: "La conectamos, la probamos y nos aseguramos de que todo esté bien antes de irnos. Tú solo abres la puerta.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: "Asesoría personalizada",
        desc: "Te acompaña un asesor real durante todo el proceso. Una persona que resuelve tus dudas con claridad.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Fotos reales antes de confirmar",
        desc: "Antes de confirmar, te enviamos fotos actuales del equipo. Lo que ves es exactamente lo que recibes.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Trato humano en cada paso",
        desc: "Comprás con personas reales que cuidan cada detalle. Una experiencia organizada y cercana de principio a fin.",
    },
];

export default function Experience() {
    const headerRef = useReveal();
    const gridRef = useReveal(100);

    return (
        <section id="experiencia" className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <div ref={headerRef} className="max-w-xl mb-14">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-3">
                        La experiencia completa
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                        Qué incluye cada compra en Hogar Plus
                    </h2>
                    <p className="text-muted-foreground font-inter text-base leading-relaxed">
                        No solo vendemos lavadoras restauradas. Vendemos tranquilidad y una experiencia organizada de principio a fin.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((b, i) => (
                        <div
                            key={i}
                            className="group flex gap-5 p-6 rounded-2xl border border-border hover:border-green-deep/30 hover:bg-green-deep/5 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-green-deep/10 text-green-deep flex items-center justify-center group-hover:bg-green-deep group-hover:text-white transition-all duration-300">
                                {b.icon}
                            </div>
                            <div>
                                <h3 className="font-inter font-semibold text-sm text-foreground mb-1.5">{b.title}</h3>
                                <p className="text-xs text-muted-foreground font-inter leading-relaxed">{b.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}