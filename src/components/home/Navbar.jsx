import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "573001234567";
const WHATSAPP_MSG = encodeURIComponent("Hola, me interesa conocer más sobre las lavadoras de Hogar Plus 🙂");
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Inicio", href: "/" },
        { label: "Lavadoras", href: "/lavadoras" },
        { label: "Preguntas", href: "#faq" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-center md:justify-start">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 mr-auto md:mr-0">
                    <div className="w-8 h-8 rounded-lg bg-green-deep flex items-center justify-center">
                        <span className="text-white text-xs font-bold font-inter">H+</span>
                    </div>
                    <span className="font-playfair font-semibold text-lg text-foreground tracking-tight">
                        Hogar<span className="text-green-deep">Plus</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-7 justify-center flex-1">
                    {links.map(l => (
                        <Link
                            key={l.href}
                            to={l.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-inter"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>



                {/* Mobile menu toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-warm-white border-t border-border px-5 py-4 flex flex-col gap-4">
                    {links.map(l => (
                        <Link
                            key={l.href}
                            to={l.href}
                            className="text-sm text-foreground font-inter py-1"
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}