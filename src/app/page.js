import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const modules = [
        {
            title: "EL VIAJE",
            href: "/viaje",
            type: "image",
            src: "/icons/viaje.png",
            color: "bg-blue-200"
        },
        {
            title: "HOSPEDAJE",
            href: "/hospedaje",
            type: "image",
            src: "/icons/hotel.png",
            color: "bg-yellow-200"
        },
        {
            title: "ITINERARIO",
            href: "/itinerario",
            type: "emoji",
            icon: "📅",
            color: "bg-red-200"
        },
        {
            title: "OUTFIT",
            href: "/outfit",
            type: "emoji",
            icon: "🧥",
            color: "bg-gray-200"
        },
        {
            title: "COMPRAS",
            href: "/compras",
            type: "emoji",
            icon: "🛍️",
            color: "bg-pink-200"
        },
        {
            title: "RESTAURANTES",
            href: "/restaurantes",
            type: "emoji",
            icon: "🍽️",
            color: "bg-orange-200"
        },
        {
            title: "TRANSPORTE",
            href: "/transporte",
            type: "emoji",
            icon: "🚕",
            color: "bg-green-200"
        },
        {
            title: "$$$ y TAXES",
            href: "/divisas",
            type: "emoji",
            icon: "💰",
            color: "bg-indigo-200"
        },
    ];

    return (
        <main className="min-h-screen bg-red-600 pb-10">
            {/* Header */}
            <section className="text-center py-8 px-4 bg-red-600 text-yellow-400 relative overflow-hidden mb-6 border-b-4 border-black border-dashed">
                <div className="absolute top-2 left-2 text-2xl animate-spin-slow">⭐</div>
                <div className="absolute top-4 right-4 text-3xl animate-pulse">❤️</div>

                <div className="border-4 border-yellow-400 p-6 bg-white rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h2 className="text-sm font-bold uppercase tracking-widest mb-1 text-black font-inter">INVITACIÓN AL</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-red-600 mb-2 font-rye shadow-text">
                        CUMPLEAÑOS<br />
                        <span className="text-yellow-500 text-shadow-black">SEBASTIÁN #40</span>
                    </h1>
                    <p className="text-lg text-black font-marker rotate-[-2deg]">
                        ¡Bogotá, here we go! 🇨🇴
                    </p>
                </div>
            </section>

            {/* Grid Menu */}
            <div className="max-w-md mx-auto px-4 grid grid-cols-2 gap-4">
                {modules.map((mod, i) => (
                    <Link
                        key={i}
                        href={mod.href}
                        className={`
              block relative p-4 border-4 border-black shadow-hard 
              transition-transform hover:scale-105 hover:-rotate-1 active:scale-95
              flex flex-col items-center justify-center text-center aspect-square
              ${mod.color}
              ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}
            `}
                    >
                        {/* Sticker Look */}
                        <div className="absolute -top-3 -right-3 bg-white border-2 border-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-sm z-10">
                            {i + 1}
                        </div>

                        {mod.type === 'image' ? (
                            <div className="w-24 h-24 relative mb-2 drop-shadow-md">
                                <Image
                                    src={mod.src}
                                    alt={mod.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ) : (
                            <div className="text-6xl mb-2 filter drop-shadow-md animate-bounce-slow">
                                {mod.icon}
                            </div>
                        )}

                        <h3 className="font-black text-sm md:text-base border-t-2 border-black pt-1 w-full font-rye">
                            {mod.title}
                        </h3>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-10 text-white font-marker text-xs opacity-80">
                Diseñado con ❤️ estilo Andrés Carne de Res
            </div>
        </main>
    );
}
