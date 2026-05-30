import { useState } from "react";

// Extra reference images (generic washing machine photos from Unsplash)
const extraImages = [
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=700&q=80",
    "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=700&q=80",
    "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=700&q=80",
];

export default function DetailGallery({ product }) {
    const images = [
        product.image,
        ...extraImages.filter((img) => img !== product.image).slice(0, 2),
    ];

    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden bg-secondary/20 aspect-[4/3]">
                <img
                    src={images[active]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500"
                />
                {/* Referencial badge */}
                <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-semibold font-inter px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Imagen referencial
                </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`relative rounded-xl overflow-hidden aspect-square w-20 flex-shrink-0 border-2 transition-all duration-150 ${active === i ? "border-green-deep shadow-sm" : "border-border hover:border-green-deep/40"
                            }`}
                    >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-muted-foreground font-inter leading-relaxed bg-muted/60 rounded-xl px-4 py-3">
                Las imágenes son de referencia. Las unidades disponibles pueden variar en color, detalles estéticos y modelo exacto según el inventario actual.
            </p>
        </div>
    );
}