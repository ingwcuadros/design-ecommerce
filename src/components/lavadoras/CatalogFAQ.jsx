import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "¿La lavadora de la foto es la misma que entregan?",
        a: "No necesariamente. Las fotos del catálogo son representativas de la categoría. Antes de confirmar tu pedido, te enviamos fotos reales del equipo disponible en ese momento para que veas exactamente lo que recibirás.",
    },
    {
        q: "¿Qué significa restaurada?",
        a: "Restaurada significa que el equipo fue revisado técnicamente, limpiado y verificado en su funcionamiento. En la Línea Premium también se realiza una restauración estética para mejorar su presentación visual.",
    },
    {
        q: "¿Tienen garantía?",
        a: "Sí. Ofrecemos garantía limitada de funcionamiento. Si el equipo presenta fallas en los primeros días tras la entrega, lo revisamos y resolvemos sin costo adicional.",
    },
    {
        q: "¿El precio incluye instalación?",
        a: "Sí, el precio incluye instalación básica: conexión de mangueras, prueba de funcionamiento y entrega operativa en tu domicilio dentro de la zona de cobertura.",
    },
    {
        q: "¿Puedo ver fotos reales antes de comprar?",
        a: "Por supuesto. Antes de confirmar cualquier pedido, te enviamos fotos actuales del equipo disponible por WhatsApp para que tomes la decisión con información real.",
    },
];

function FAQItem({ faq }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-border last:border-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 py-4 text-left"
            >
                <span className="text-sm font-semibold font-inter text-foreground">{faq.q}</span>
                <ChevronDown
                    className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <p className="pb-4 text-xs text-muted-foreground font-inter leading-relaxed">
                    {faq.a}
                </p>
            )}
        </div>
    );
}

export default function CatalogFAQ() {
    return (
        <section className="py-14 md:py-18 bg-white border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-2">
                        <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-2">Preguntas frecuentes</p>
                        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                            Todo lo que necesitas saber
                        </h2>
                        <p className="text-sm text-muted-foreground font-inter mt-3 leading-relaxed">
                            ¿Tienes más preguntas? Escríbenos por WhatsApp y un asesor real te responde en minutos.
                        </p>
                    </div>
                    <div className="lg:col-span-3 divide-y divide-border bg-secondary/10 rounded-2xl px-6">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} faq={faq} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}