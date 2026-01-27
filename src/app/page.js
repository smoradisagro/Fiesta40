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
        <main className="min-h-screen pb-10 flex flex-col items-center">
            {/* Header Image */}
            <div className="w-full max-w-md mt-6 px-4 mb-4 animate-pulse-slow">
                <Image
                    src="/assets/header.png"
                    alt="Cumpleaños Sebastián 40"
                    width={600}
                    height={300}
                    className="w-full h-auto drop-shadow-xl"
                    priority
                />
            </div>

            {/* Grid Menu */}
            <div className="max-w-md mx-auto px-4 grid grid-cols-2 gap-6 w-full">
                {modules.map((mod, i) => (
                    <Link
                        key={i}
                        href={mod.href}
                        className="block relative transform transition-all duration-300 hover:scale-110 active:scale-95 hover:rotate-2 group"
                    >
                        <div className="relative aspect-square drop-shadow-2xl">
                            <Image
                                src={mod.src}
                                alt={mod.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-12 text-white font-marker text-sm px-4 bg-black/50 p-2 rounded transform -rotate-1">
                Diseñado estilo Andrés Carne de Res ❤️
            </div>
        </main>
    );
}
