const WHATSAPP_NUMBER = "573001234567";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, necesito asesoría para elegir la lavadora ideal según mi presupuesto y espacio 🙂")}`;

export default function CatalogFinalCTA() {
    return (
        <section className="py-16 md:py-20 bg-secondary/20 border-t border-border">
            <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
                <div className="bg-white border border-border rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-xl shadow-black/4">
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-green-deep/5 translate-x-20 -translate-y-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-beige -translate-x-16 translate-y-16 pointer-events-none" />

                    <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-green-deep/10 text-green-deep mx-auto mb-5 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>

                        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground mb-3">
                            ¿No sabes cuál elegir?
                        </h2>
                        <p className="text-sm text-muted-foreground font-inter leading-relaxed mb-7 max-w-sm mx-auto">
                            Te ayudamos por WhatsApp según tu presupuesto, espacio y necesidad. Sin presión, sin formularios.
                        </p>

                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 bg-green-deep text-white font-semibold font-inter text-sm px-8 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-green-deep/25"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Recibir asesoría
                        </a>

                        <div className="flex flex-wrap justify-center gap-5 mt-6 pt-5 border-t border-border">
                            {["Sin presión de compra", "Respuesta en minutos", "Asesor real"].map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground font-inter">
                                    <svg className="w-3.5 h-3.5 text-green-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}