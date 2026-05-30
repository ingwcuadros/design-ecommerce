import { WHATSAPP_NUMBER } from "@/components/lavadoras/catalogData";

const WaIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const steps = [
    { num: "01", text: "Revisas esta categoría de lavadora y decides que te interesa." },
    { num: "02", text: "Nos contactas por WhatsApp con un solo clic." },
    { num: "03", text: "Te mostramos las unidades disponibles actualmente con fotos reales." },
    { num: "04", text: "Eliges la lavadora que más te guste según el estado y precio." },
    { num: "05", text: "Coordinamos entrega, instalación o recogida según lo que necesites." },
];

export default function DetailHowItWorks({ product }) {
    const waMsg = encodeURIComponent(
        `Hola, estoy interesado en una ${product.name} - ${product.segmento}. ¿Qué unidades tienen disponibles actualmente?`
    );
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

    return (
        <div className="bg-white border border-border rounded-3xl p-6 md:p-8">
            <h2 className="font-playfair font-semibold text-xl text-foreground mb-1">¿Cómo funciona?</h2>
            <p className="text-sm text-muted-foreground font-inter mb-6">El proceso es simple y sin compromisos.</p>

            <div className="space-y-4 mb-8">
                {steps.map((step) => (
                    <div key={step.num} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-deep/10 text-green-deep text-xs font-bold font-inter flex items-center justify-center">
                            {step.num}
                        </span>
                        <p className="text-sm text-foreground font-inter leading-relaxed pt-1">{step.text}</p>
                    </div>
                ))}
            </div>

            <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-green-deep text-white font-bold font-inter text-sm px-6 py-4 rounded-2xl hover:bg-green-deep/90 transition-colors w-full md:w-auto"
            >
                <WaIcon />
                Consultar disponibles por WhatsApp
            </a>
        </div>
    );
}