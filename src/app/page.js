import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const modules = [
        { title: "VIAJE", href: "/viaje", src: "/assets/btn_viaje.png" },
        { title: "HOSPEDAJE", href: "/hospedaje", src: "/assets/btn_hospedaje.png" },
        { title: "ITINERARIO", href: "/itinerario", src: "/assets/btn_itinerario.png" },
        { title: "OUTFIT", href: "/outfit", src: "/assets/btn_outfit.png" },
        { title: "COMPRAS", href: "/compras", src: "/assets/btn_compras.png" },
        { title: "RESTAURANTES", href: "/restaurantes", src: "/assets/btn_restaurantes.png" },
        { title: "TRANSPORTE", href: "/transporte", src: "/assets/btn_transporte.png" },
        { title: "DIVISAS", href: "/divisas", src: "/assets/btn_divisas.png" },
    ];

    return (
        <main className="min-h-screen pb-20 flex flex-col items-center">
            {/* Header Image - Reduced spacing Top (1.5cm approx ~ mt-6) */}
            <div className="w-full max-w-md mt-6 px-6 mb-6">
                <Image
                    src="/assets/header.png"
                    alt="Cumpleaños Sebastián 40"
                    width={600}
                    height={300}
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    priority
                />
            </div>

            {/* Grid Menu */}
            <div className="max-w-md mx-auto px-4 grid grid-cols-2 gap-6 w-full">
                {modules.map((mod, i) => (
                    <Link
                        key={i}
                        href={mod.href}
                        className="block relative group focus:outline-none"
                    >
                        <div className="relative aspect-square transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-3 group-active:scale-95 shadow-2xl rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20">
                            <Image
                                src={mod.src}
                                alt={mod.title}
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute -bottom-3 left-0 w-full text-center">
                            <span className="bg-black/80 text-[#FFD60A] text-xs font-rye px-2 py-1 rounded border border-[#FFD60A] shadow-md uppercase tracking-wider">
                                {mod.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* WhatsApp Group Button */}
            <div className="mt-12 mb-8 animate-bounce-slow">
                <a
                    href="https://chat.whatsapp.com/DwU6hoQXkIG8Uo79TCEWTW?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white font-black px-6 py-3 rounded-full border-2 border-white shadow-[0_0_15px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
                >
                    <Image src="/assets/btn_whatsapp.png" width={24} height={24} alt="WA" />
                    UNIRME AL GRUPO
                </a>
            </div>

            {/* Credits */}
            <div className="text-center text-white font-marker text-xs px-4 bg-black/60 p-2 rounded-full transform -rotate-1 border border-white/30 backdrop-blur-md">
                Diseñado por Sebastián Mora ❤️
            </div>
        </main>
    );
}
