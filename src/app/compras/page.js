import { Navigation, Store } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function ComprasPage() {
    const zonas = [
        { name: "Parque 93", desc: "Plaza vibrante rodeada de restaurantes y eventos culturales.", url: "https://parque93.com/" },
        { name: "C.C. Andino", desc: "El centro comercial más exclusivo y tradicional de Bogotá.", url: "https://centroandino.com.co/" },
        { name: "C.C. El Retiro", desc: "Lujo, diseño y alta gastronomía en un solo lugar.", url: "https://elretiroshoppingcenter.com/" },
        { name: "Zona T", desc: "El corazón de la vida nocturna y moda (Calles peatonales).", url: "https://maps.app.goo.gl/ZonaT" }, // Zona T doesn't usually have a site
        { name: "Calle de los Anticuarios", desc: "Diseño interior, arte, antigüedades y boutiques con encanto.", url: "https://www.instagram.com/calledelosanticuarios/?hl=es" },
        { name: "Mercado Usaquén (Dom)", desc: "Imperdible feria artesanal en un barrio colonial (Solo Domingos).", url: "https://mercadopulgasusaquen.com/" },
    ];

    return (
        <main className="min-h-screen p-4 flex flex-col items-center">
            <BackButton />

            <div className="bg-white/95 p-6 border-4 border-black shadow-[8px_8px_0px_#000] rotate-1 max-w-md w-full mt-4">
                <div className="flex justify-center -mt-16 mb-4">
                    <div className="w-24 h-24 relative drop-shadow-xl bg-white rounded-full border-4 border-black p-2">
                        <Image src="/assets/btn_compras.png" alt="Shopping" fill className="object-contain p-1" />
                    </div>
                </div>

                <h2 className="text-3xl text-center mb-6 -rotate-2">
                    <span className="bg-[var(--color-yellow)] text-black px-4 py-2 border-black border-2 shadow-hard font-rye">
                        SHOPPING
                    </span>
                </h2>

                {/* Sección Zonas TOP */}
                <div className="mb-8 font-marker">
                    <h3 className="text-xl font-black mb-3 border-b-2 border-black inline-block bg-pink-100 px-2 rotate-1">
                        ZONAS TOP
                    </h3>
                    <div className="space-y-3">
                        {zonas.map((zona, i) => (
                            <a key={i} href={zona.url} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 hover:bg-yellow-50 p-2 border border-gray-300 rounded transition-colors group">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg group-hover:text-red-600">{zona.name}</span>
                                    <Store size={16} className="text-gray-400 group-hover:text-red-500" />
                                </div>
                                <p className="text-xs text-gray-600 font-sans leading-tight mt-1">
                                    {zona.desc}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sección Marcas de Diseño Colombianas */}
                <div className="space-y-3 font-marker">
                    <h3 className="text-xl font-black mb-1 border-b-2 border-black inline-block bg-cyan-100 px-2 -rotate-1">
                        MARCAS DISEÑO COLOMBIA
                    </h3>

                    <div className="bg-pink-50 p-3 border-l-4 border-pink-500 mt-2">
                        <ul className="space-y-2">
                            <li><a href="https://www.velez.com.co/" target="_blank" className="hover:text-pink-600 underline">Vélez (Cueros)</a></li>
                            <li><a href="https://www.arturocalle.com/" target="_blank" className="hover:text-pink-600 underline">Arturo Calle (Menswear)</a></li>
                            <li><a href="https://www.gef.com.co/" target="_blank" className="hover:text-pink-600 underline">GEF (Básicos)</a></li>
                            <li><a href="https://ondademar.com/" target="_blank" className="hover:text-pink-600 underline">Onda de Mar (Beachwear)</a></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-100 p-3 text-sm border-2 border-black shadow-sm rotate-1 font-sans">
                        <strong>💡 PRO TIP:</strong> Compra online 1 semana antes y envía al hotel. ¡Te ahorras tiempo!
                    </div>
                </div>
            </div>
        </main>
    );
}
