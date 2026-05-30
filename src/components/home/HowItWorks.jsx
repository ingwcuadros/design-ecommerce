import { useReveal } from "@/hooks/useReveal";

const WHATSAPP_NUMBER = "573001234567";
const WHATSAPP_MSG = encodeURIComponent("Hola, me interesa conocer más sobre las lavadoras de Hogar Plus 🙂");
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const steps = [
    {
        number: "01",
        title: "Escoge la categoría",
        desc: "Navega por nuestras categorías y segmentos. Encuentra la marca y tipo de carga que mejor se adapta a tu hogar.",
        detail: "Opciones claras, precios aproximados, sin inventario complicado.",
    },
    {
        number: "02",
        title: "Habla con tu asesor",
        desc: "Te conectamos por WhatsApp con un asesor real. Te mostramos las opciones disponibles con fotos actuales.",
        detail: "Una persona real que te acompaña. Sin formularios, sin robots.",
    },
    {
        number: "03",
        title: "Recibe en tu hogar",
        desc: "Coordinamos entrega, instalación básica y prueba funcional. Todo organizado y listo para ti.",
        detail: "Limpia, funcionando y lista para entrar a tu vida.",
    },
];

function WaIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

export default function HowItWorks() {
    const headerRef = useReveal();
    const stepsRef = useReveal(100);
    const ctaRef = useReveal(200);

    return (
        <section id="como-funciona" className="py-20 md:py-28 bg-warm-white">
            <div className="max-w-6xl mx-auto px-5">
                {/* Header */}
                <div ref={headerRef} className="text-center max-w-xl mx-auto mb-16">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-3">
                        El proceso
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                        Así de simple funciona Hogar Plus
                    </h2>
                    <p className="text-muted-foreground font-inter text-base leading-relaxed">
                        Tres pasos. Sin complicaciones. Sin sorpresas.
                    </p>
                </div>

                {/* Steps */}
                <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[calc(100%_-_1rem)] w-[calc(100%_-_3rem)] h-px bg-border z-0" />
                            )}
                            <div className="relative z-10 bg-white border border-border rounded-2xl p-7 flex flex-col gap-4 h-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-green-deep/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-green-deep font-playfair font-bold text-lg">{step.number}</span>
                                </div>
                                <h3 className="font-inter font-semibold text-base text-foreground">{step.title}</h3>
                                <p className="text-sm text-muted-foreground font-inter leading-relaxed">{step.desc}</p>
                                <p className="text-xs text-green-deep/80 font-inter italic border-t border-border pt-3 mt-auto">
                                    {step.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div ref={ctaRef} className="text-center">
                    <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-green-deep text-white font-medium px-7 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all font-inter text-sm shadow-lg shadow-green-deep/20"
                    >
                        <WaIcon />
                        Empezar ahora por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}