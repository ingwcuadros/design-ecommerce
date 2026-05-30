import { useState } from "react";

const faqs = [
    {
        q: "¿Las lavadoras tienen garantía?",
        a: "Sí. Todas nuestras lavadoras tienen garantía de funcionamiento. Si en los primeros días detectas algún problema funcional, lo resolvemos. El detalle exacto lo coordina tu asesor antes de confirmar la compra.",
    },
    {
        q: "¿En qué estado llegan las lavadoras?",
        a: "Todas pasan por revisión técnica antes de salir. En la Línea Estándar pueden tener desgaste visual normal (rayones superficiales, marcas de uso). En la Línea Premium el estado estético es significativamente mejor. Siempre te enviamos fotos reales antes de confirmar.",
    },
    {
        q: "¿Hacen entrega a domicilio?",
        a: "Sí. Coordinamos la entrega directamente a tu hogar. La fecha y la hora la acordamos contigo antes. Actualmente operamos en las principales ciudades de Colombia.",
    },
    {
        q: "¿Incluyen instalación?",
        a: "Sí, la instalación básica está incluida. Nuestro equipo conecta la lavadora, hace la prueba de funcionamiento y se asegura de que todo esté bien antes de irse.",
    },
    {
        q: "¿Puedo escoger la marca y el modelo exacto?",
        a: "Manejamos categorías por marca y tipo de carga. La disponibilidad específica cambia. Tu asesor te mostrará las opciones disponibles en el momento con fotos actuales, y juntos encuentran la que mejor se adapta a lo que necesitas.",
    },
    {
        q: "¿Cuánto tiempo tarda la entrega?",
        a: "Por lo general coordinamos entrega en 24 a 72 horas hábiles después de confirmar. Depende de tu ciudad y disponibilidad. Tu asesor te confirma el plazo exacto.",
    },
    {
        q: "¿Cómo pago?",
        a: "Los métodos de pago se coordinan directamente con tu asesor por WhatsApp. Aceptamos transferencia, efectivo y otros métodos según disponibilidad regional.",
    },
    {
        q: "¿Por qué no puedo comprar directamente en la web?",
        a: "Porque cada compra es diferente. Preferimos acompañarte con un asesor real que entienda lo que necesitas, te muestre opciones actuales y resuelva todas tus dudas antes de confirmar. Eso es lo que nos diferencia.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section id="faq" className="py-20 md:py-28 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-3">
                            Preguntas frecuentes
                        </p>
                        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
                            Resolvemos tus dudas antes de empezar.
                        </h2>
                        <p className="text-muted-foreground font-inter text-base leading-relaxed mb-6">
                            Si tienes alguna pregunta que no está aquí, tu asesor la responde en minutos por WhatsApp.
                        </p>
                        <a
                            href={`https://wa.me/573001234567?text=${encodeURIComponent("Hola, tengo una duda sobre Hogar Plus 🙂")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium font-inter text-green-deep border border-green-deep/30 px-4 py-2.5 rounded-xl hover:bg-green-deep hover:text-white transition-all"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Preguntar por WhatsApp
                        </a>
                    </div>

                    {/* Right - accordion */}
                    <div className="flex flex-col gap-3">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border border-border rounded-2xl overflow-hidden"
                            >
                                <button
                                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-muted/40 transition-colors"
                                    onClick={() => setOpen(open === i ? null : i)}
                                >
                                    <span className="font-inter font-medium text-sm text-foreground">{faq.q}</span>
                                    <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center transition-transform duration-200 ${open === i ? "rotate-45 bg-green-deep border-green-deep" : ""}`}>
                                        <svg className={`w-3 h-3 ${open === i ? "text-white" : "text-muted-foreground"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>
                                {open === i && (
                                    <div className="px-6 pb-5">
                                        <p className="text-sm text-muted-foreground font-inter leading-relaxed">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}