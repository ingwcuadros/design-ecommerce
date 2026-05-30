import { WHATSAPP_NUMBER } from "@/components/lavadoras/catalogData";
import { Package, Tag, Zap, CheckCircle } from "lucide-react";

const WaIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const segmentoBadge = {
    "Línea Premium": "bg-green-deep/10 text-green-deep border-green-deep/20",
    "Línea Estándar": "bg-muted text-muted-foreground border-border",
};

export default function DetailInfo({ product }) {
    const waMsg = encodeURIComponent(
        `Hola, estoy interesado en una ${product.name} - ${product.segmento}. ¿Qué unidades tienen disponibles actualmente?`
    );
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

    const specs = [
        { icon: Tag, label: "Marca", value: product.marca },
        { icon: Package, label: "Capacidad", value: product.capacidad },
        { icon: Zap, label: "Tipo", value: product.tipo },
    ];

    return (
        <div className="flex flex-col gap-6">
            {/* Badge línea */}
            <span className={`self-start text-xs font-bold font-inter px-3 py-1.5 rounded-full border ${segmentoBadge[product.segmento]}`}>
                {product.segmento}
            </span>

            {/* Title */}
            <div>
                <h1 className="font-playfair font-bold text-2xl md:text-3xl text-foreground leading-tight">
                    {product.name}
                </h1>
                <p className="text-sm text-muted-foreground font-inter mt-1">{product.segmento}</p>
            </div>

            {/* Price */}
            <div className="bg-secondary/50 rounded-2xl px-5 py-4">
                <p className="text-[10px] font-semibold text-muted-foreground font-inter uppercase tracking-wider mb-1">Precio aproximado</p>
                <p className="font-playfair font-bold text-3xl text-foreground">{product.precio}</p>
                <p className="text-xs text-muted-foreground font-inter mt-1">Disponibilidad sujeta a inventario actual</p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-3">
                {specs.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="bg-white border border-border rounded-xl p-3 text-center">
                        <Icon className="w-4 h-4 text-green-deep mx-auto mb-1.5" />
                        <p className="text-[9px] text-muted-foreground font-inter uppercase tracking-wider">{label}</p>
                        <p className="text-xs font-semibold text-foreground font-inter mt-0.5">{value}</p>
                    </div>
                ))}
            </div>

            {/* Description */}
            <div>
                <h3 className="text-sm font-semibold text-foreground font-inter mb-2">Sobre esta categoría</h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                    Lavadoras seleccionadas dentro de esta categoría, revisadas técnicamente y listas para uso. Al contactarnos por WhatsApp, te mostramos las unidades disponibles actualmente con características similares para que elijas la que mejor te convenga.
                </p>
            </div>

            {/* Trust items */}
            <div className="space-y-2">
                {[
                    "Revisión técnica incluida",
                    "Entrega e instalación disponible",
                    "Garantía de funcionamiento",
                ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-deep flex-shrink-0" />
                        <span className="text-xs text-foreground font-inter">{item}</span>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-deep text-white font-bold font-inter text-sm px-6 py-4 rounded-2xl hover:bg-green-deep/90 transition-colors shadow-md shadow-green-deep/20"
            >
                <WaIcon />
                Consultar disponibles por WhatsApp
            </a>

            <p className="text-[11px] text-center text-muted-foreground font-inter">
                Sin compromiso · Te mostramos unidades disponibles en este momento
            </p>
        </div>
    );
}