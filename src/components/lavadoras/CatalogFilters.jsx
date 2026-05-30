import { useRef, useCallback } from "react";

const segmentos = ["Todas", "Línea Estándar", "Línea Premium"];
const marcas = ["LG", "Samsung", "Haceb", "Whirlpool", "Mabe", "Centrales"];

const PRICE_MIN = 650000;
const PRICE_MAX = 1000000;

function formatPrice(v) {
    return "$" + (v / 1000).toFixed(0) + "k";
}

function Chip({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex-shrink-0 text-xs font-semibold font-inter px-4 py-2 rounded-full border transition-all duration-150 whitespace-nowrap
        ${active
                    ? "bg-green-deep text-white border-green-deep shadow-sm"
                    : "bg-white text-foreground border-border hover:border-green-deep/40 hover:text-green-deep"
                }`}
        >
            {label}
        </button>
    );
}

function PriceSlider({ precioMin, precioMax, onChange }) {
    const trackRef = useRef(null);
    const dragging = useRef(null);

    const toPercent = (v) => ((v - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

    const fromPercent = (pct) =>
        Math.round((PRICE_MIN + (pct / 100) * (PRICE_MAX - PRICE_MIN)) / 10000) * 10000;

    const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

    const handleMove = useCallback((e) => {
        if (!dragging.current || !trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const pct = Math.max(0, Math.min(100, ((getClientX(e) - rect.left) / rect.width) * 100));
        const val = fromPercent(pct);

        if (dragging.current === "min") {
            onChange(Math.min(val, precioMax - 10000), precioMax);
        } else {
            onChange(precioMin, Math.max(val, precioMin + 10000));
        }
    }, [precioMin, precioMax, onChange]);

    const handleUp = useCallback(() => {
        dragging.current = null;
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleUp);
        window.removeEventListener("touchmove", handleMove);
        window.removeEventListener("touchend", handleUp);
    }, [handleMove]);

    const startDrag = (thumb) => (e) => {
        e.preventDefault();
        dragging.current = thumb;
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleUp);
        window.addEventListener("touchmove", handleMove, { passive: false });
        window.addEventListener("touchend", handleUp);
    };

    const minPct = toPercent(precioMin);
    const maxPct = toPercent(precioMax);

    return (
        <div className="w-full max-w-sm">
            {/* Labels */}
            <div className="flex justify-between mb-3">
                <span className="text-xs font-semibold font-inter text-foreground">{formatPrice(precioMin)}</span>
                <span className="text-xs font-semibold font-inter text-foreground">{formatPrice(precioMax)}</span>
            </div>

            {/* Track */}
            <div ref={trackRef} className="relative h-2 rounded-full bg-border cursor-pointer select-none">
                {/* Active range */}
                <div
                    className="absolute h-full rounded-full bg-green-deep"
                    style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
                />
                {/* Min thumb */}
                <button
                    className="absolute top-1/2 w-5 h-5 bg-white border-2 border-green-deep rounded-full shadow-md -translate-y-1/2 -translate-x-1/2 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-green-deep/40"
                    style={{ left: `${minPct}%` }}
                    onMouseDown={startDrag("min")}
                    onTouchStart={startDrag("min")}
                    aria-label="Precio mínimo"
                />
                {/* Max thumb */}
                <button
                    className="absolute top-1/2 w-5 h-5 bg-white border-2 border-green-deep rounded-full shadow-md -translate-y-1/2 -translate-x-1/2 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-green-deep/40"
                    style={{ left: `${maxPct}%` }}
                    onMouseDown={startDrag("max")}
                    onTouchStart={startDrag("max")}
                    aria-label="Precio máximo"
                />
            </div>

            {/* Range limits */}
            <div className="flex justify-between mt-2">
                <span className="text-[10px] text-muted-foreground font-inter">{formatPrice(PRICE_MIN)}</span>
                <span className="text-[10px] text-muted-foreground font-inter">{formatPrice(PRICE_MAX)}</span>
            </div>
        </div>
    );
}

export default function CatalogFilters({ filters, setFilters }) {
    const isDefault =
        filters.segmento === "Todas" &&
        !filters.marca &&
        filters.precioMin === PRICE_MIN &&
        filters.precioMax === PRICE_MAX;

    const clearFilters = () =>
        setFilters({ segmento: "Todas", marca: null, precioMin: PRICE_MIN, precioMax: PRICE_MAX });

    const toggleSegmento = (val) =>
        setFilters((prev) => ({ ...prev, segmento: val }));

    const toggleMarca = (val) =>
        setFilters((prev) => ({ ...prev, marca: prev.marca === val ? null : val }));

    const handlePrice = (min, max) =>
        setFilters((prev) => ({ ...prev, precioMin: min, precioMax: max }));

    return (
        <div id="catalogo" className="sticky top-0 z-30 bg-background pt-6">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-6 space-y-4 border-b border-border">

                {/* Row 1: Línea */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-semibold text-muted-foreground font-inter uppercase tracking-wider w-16 flex-shrink-0">Línea</span>
                    <div className="flex flex-wrap gap-2">
                        {segmentos.map((s) => (
                            <Chip key={s} label={s} active={filters.segmento === s} onClick={() => toggleSegmento(s)} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Marca */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-semibold text-muted-foreground font-inter uppercase tracking-wider w-16 flex-shrink-0">Marca</span>
                    <div className="flex flex-wrap gap-2">
                        {marcas.map((m) => (
                            <Chip key={m} label={m} active={filters.marca === m} onClick={() => toggleMarca(m)} />
                        ))}
                    </div>
                </div>

                {/* Row 3: Precio */}
                <div className="flex flex-wrap items-start gap-3">
                    <span className="text-[11px] font-semibold text-muted-foreground font-inter uppercase tracking-wider w-16 flex-shrink-0 mt-1">Precio</span>
                    <PriceSlider
                        precioMin={filters.precioMin}
                        precioMax={filters.precioMax}
                        onChange={handlePrice}
                    />
                </div>

                {/* Clear */}
                {!isDefault && (
                    <div className="flex justify-end pt-2">
                        <button
                            onClick={clearFilters}
                            className="text-xs font-semibold font-inter text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
