export default function Footer() {
    return (
        <footer className="bg-foreground text-white/70">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center">
                                <span className="text-white text-xs font-bold font-inter">H+</span>
                            </div>
                            <span className="font-playfair font-semibold text-base text-white">
                                Hogar<span className="text-white/60">Plus</span>
                            </span>
                        </div>
                        <p className="text-xs font-inter leading-relaxed max-w-xs">
                            Lavadoras restauradas con revisión técnica, entrega e instalación. Una experiencia organizada para tu hogar.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                        {[
                            { label: "Categorías", href: "#categorias" },
                            { label: "Cómo funciona", href: "#como-funciona" },
                            { label: "Preguntas frecuentes", href: "#faq" },
                        ].map(l => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-xs font-inter text-white/60 hover:text-white transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs font-inter text-white/40">
                        © {new Date().getFullYear()} Hogar Plus. Todos los derechos reservados.
                    </p>
                    <p className="text-xs font-inter text-white/40">
                        Colombia · Lavadoras restauradas de confianza
                    </p>
                </div>
            </div>
        </footer>
    );
}