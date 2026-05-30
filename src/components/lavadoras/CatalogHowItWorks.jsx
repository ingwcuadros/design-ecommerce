const steps = [
    {
        number: "01",
        title: "Elige una categoría",
        desc: "Explora las opciones disponibles y selecciona la que más se ajuste a tu necesidad y presupuesto.",
    },
    {
        number: "02",
        title: "Te mostramos opciones reales por WhatsApp",
        desc: "Un asesor te envía fotos, estado exacto y opciones disponibles en el momento.",
    },
    {
        number: "03",
        title: "Recibe instalada y probada",
        desc: "Coordinamos entrega a tu domicilio, la instalamos y la probamos antes de irnos.",
    },
];

export default function CatalogHowItWorks() {
    return (
        <section className="py-14 md:py-18 bg-white border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="text-center mb-10">
                    <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-2">Proceso</p>
                    <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground">¿Cómo funciona?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {/* Connector line desktop */}
                    <div className="hidden md:block absolute top-8 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-px bg-border z-0" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center gap-4 p-6 bg-secondary/20 rounded-2xl">
                            <div className="w-14 h-14 rounded-2xl bg-green-deep text-white font-playfair font-bold text-lg flex items-center justify-center shadow-lg shadow-green-deep/20">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="font-inter font-semibold text-sm text-foreground mb-1.5">{step.title}</h3>
                                <p className="text-xs text-muted-foreground font-inter leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}