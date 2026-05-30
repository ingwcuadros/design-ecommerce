import { useReveal } from "@/hooks/useReveal";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "573001234567";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero ayuda para elegir una lavadora restaurada para mi hogar 🙂")}`;

const steps = [
    {
        number: "01",
        title: "Explora el catálogo",
        desc: "Revisa las lavadoras restauradas disponibles en la página y elige la opción que más se ajuste a tu hogar.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Haz clic en WhatsApp",
        desc: "Desde cada producto puedes tocar el botón de WhatsApp para recibir más detalles y opciones similares.",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Coordinamos la entrega",
        desc: "Te acompañamos para resolver dudas, confirmar disponibilidad y coordinar entrega e instalación.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

function ChatMockup() {
    return (
        <div className="bg-[#E5DDD5] rounded-3xl p-5 flex flex-col gap-3 shadow-2xl shadow-black/12 w-full max-w-xs mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-black/10">
                <div className="w-9 h-9 rounded-full bg-green-deep flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold font-inter">H+</span>
                </div>
                <div>
                    <p className="text-[13px] font-semibold text-gray-800 font-inter">Hogar Plus</p>
                    <p className="text-[10px] text-gray-500 font-inter">Asesor disponible · en línea</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-2.5">
                {/* User */}
                <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[85%] shadow-sm">
                        <p className="text-[11.5px] text-gray-800 font-inter leading-relaxed">Hola, vi la lavadora LG automática 18kg en la página. ¿Sigue disponible?</p>
                        <p className="text-[9px] text-gray-400 font-inter text-right mt-1">9:41 ✓✓</p>
                    </div>
                </div>
                {/* Agent */}
                <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%] shadow-sm">
                        <p className="text-[11.5px] text-gray-800 font-inter leading-relaxed">Hola. Sí, te compartimos detalles y también opciones similares según tu presupuesto 📸</p>
                        <p className="text-[9px] text-gray-400 font-inter text-right mt-1">9:42</p>
                    </div>
                </div>
                {/* Agent 2 */}
                <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%] shadow-sm">
                        <p className="text-[11.5px] text-gray-800 font-inter leading-relaxed">Esta opción está restaurada, revisada y cuenta con garantía ✅</p>
                        <p className="text-[9px] text-gray-400 font-inter text-right mt-1">9:42</p>
                    </div>
                </div>
                {/* User */}
                <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[85%] shadow-sm">
                        <p className="text-[11.5px] text-gray-800 font-inter leading-relaxed">Me interesa. ¿También coordinan entrega e instalación?</p>
                        <p className="text-[9px] text-gray-400 font-inter text-right mt-1">9:43 ✓✓</p>
                    </div>
                </div>
                {/* Agent 3 */}
                <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%] shadow-sm">
                        <p className="text-[11.5px] text-gray-800 font-inter leading-relaxed">Sí. Te acompañamos con la entrega, instalación y cualquier duda antes de confirmar 🏠</p>
                        <p className="text-[9px] text-gray-400 font-inter text-right mt-1">9:44</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WhatsAppGuide() {
    const leftRef = useReveal(0);
    const rightRef = useReveal(100);

    return (
        <section id="como-comprar" className="py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(36,30%,96%) 0%, hsl(40,20%,98%) 60%, hsl(36,25%,94%) 100%)" }}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left — text */}
                    <div ref={leftRef}>
                        <p className="text-xs font-medium text-green-deep uppercase tracking-widest font-inter mb-4">
                            Cómo comprar
                        </p>
                        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-5">
                            Comprar una lavadora restaurada puede ser{" "}
                            <span className="italic text-green-deep">simple.</span>
                        </h2>
                        <p className="text-muted-foreground font-inter text-base leading-relaxed mb-10 max-w-md">
                            Te guiamos paso a paso para elegir una opción confiable para tu hogar. Sin formularios, sin complicaciones.
                        </p>

                        {/* Steps */}
                        <div className="flex flex-col gap-6 mb-10">
                            {steps.map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-green-deep text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-green-deep/25">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-bold font-inter text-green-deep/50 tracking-widest">{step.number}</span>
                                            <h3 className="font-inter font-semibold text-sm text-foreground">{step.title}</h3>
                                        </div>
                                        <p className="text-xs text-muted-foreground font-inter leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <Link
                                to="/lavadoras"
                                className="inline-flex items-center gap-2 bg-green-deep text-white font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all font-inter text-sm shadow-lg shadow-green-deep/25"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                                Ver catálogo
                            </Link>
                            <a
                                href={WA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white border border-green-deep/30 text-green-deep font-semibold px-6 py-3.5 rounded-xl hover:bg-green-deep hover:text-white hover:border-green-deep transition-all font-inter text-sm shadow-sm"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Hablar por WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right — chat mockup */}
                    <div ref={rightRef} className="flex items-center justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-green-deep/8 blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-beige blur-2xl pointer-events-none" />
                            <div className="relative">
                                <ChatMockup />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
