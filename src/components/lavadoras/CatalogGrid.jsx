import { Link } from "react-router-dom";
import { products, WHATSAPP_NUMBER } from "./catalogData";

const segmentoBadge = {
    "Línea Premium": "bg-green-deep/10 text-green-deep border-green-deep/20",
    "Línea Estándar": "bg-muted text-muted-foreground border-border",
};

const WaIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

function ProductCard({ product }) {
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.msg)}`;

    return (
        <Link
            to={`/lavadoras/${product.id}`}
            className="group bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 hover:border-green-deep/20 transition-all duration-300 flex flex-col"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-[10px] font-bold font-inter px-3 py-1.5 rounded-full border ${segmentoBadge[product.segmento]}`}>
                    {product.segmento}
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-foreground text-[10px] font-semibold font-inter px-2.5 py-1 rounded-full border border-border">
                    {product.marca}
                </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1 gap-2">
                <div>
                    <h3 className="font-inter font-semibold text-sm text-foreground leading-tight">{product.name}</h3>
                    <p className="text-xs text-muted-foreground font-inter mt-0.5">{product.capacidad} · {product.tipo}</p>
                </div>

                {/* Price + CTA */}
                <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-3">
                    <div>
                        <p className="text-[9px] text-muted-foreground font-inter mb-0.5">Precio aprox.</p>
                        <p className="font-playfair font-bold text-lg text-foreground">{product.precio}</p>
                    </div>

                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 bg-green-deep/10 text-green-deep border border-green-deep/20 hover:bg-green-deep hover:text-white text-[11px] font-bold font-inter px-3 py-2 rounded-lg transition-all flex-shrink-0"
                    >
                        <WaIcon />
                        Lo quiero
                    </a>
                </div>
            </div>
        </Link>
    );
}

export default function CatalogGrid({ filters }) {
    const filtered = products.filter((p) => {
        if (filters.segmento !== "Todas" && p.segmento !== filters.segmento) return false;
        if (filters.marca && p.marca !== filters.marca) return false;
        if (p.precioNum < filters.precioMin || p.precioNum > filters.precioMax) return false;
        return true;
    });

    return (
        <section className="bg-background pb-10 md:pb-14">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="pt-6 mb-7">
                    <p className="text-sm font-semibold text-foreground font-inter">
                        Categorías disponibles
                        {filtered.length !== products.length && (
                            <span className="text-green-deep ml-1">({filtered.length} resultados)</span>
                        )}
                    </p>
                    <p className="text-xs text-muted-foreground font-inter mt-0.5">
                        Modelos exactos se validan por WhatsApp según disponibilidad.
                    </p>
                </div>

                {filtered.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground font-inter text-sm">
                        No hay categorías con esos filtros.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filtered.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}