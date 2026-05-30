const lines = {
    "Línea Estándar": {
        color: "border-border bg-muted/40",
        badge: "bg-muted text-muted-foreground border-border",
        title: "Línea Estándar",
        description:
            "Lavadoras funcionales, revisadas y listas para uso, con detalles estéticos normales por uso previo. Ideal si buscas economía y buen funcionamiento sin sacrificar calidad técnica.",
    },
    "Línea Premium": {
        color: "border-green-deep/20 bg-green-deep/5",
        badge: "bg-green-deep/10 text-green-deep border-green-deep/20",
        title: "Línea Premium",
        description:
            "Lavadoras seleccionadas por mejor estado estético, mejor presentación y mejores condiciones generales. Ideal si buscas una opción más completa visual y funcionalmente.",
    },
};

export default function DetailLineExplainer({ segmento }) {
    return (
        <div>
            <h2 className="font-playfair font-semibold text-xl text-foreground mb-4">¿Qué significa {segmento}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.values(lines).map((line) => (
                    <div
                        key={line.title}
                        className={`rounded-2xl border p-5 ${line.color} ${segmento === line.title ? "ring-2 ring-green-deep/30" : "opacity-70"}`}
                    >
                        <span className={`inline-block text-[10px] font-bold font-inter px-2.5 py-1 rounded-full border mb-3 ${line.badge}`}>
                            {line.title}
                        </span>
                        <p className="text-sm text-foreground font-inter leading-relaxed">{line.description}</p>
                        {segmento === line.title && (
                            <p className="text-[11px] text-green-deep font-semibold font-inter mt-3">
                                ← Esta es la categoría que estás viendo
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}