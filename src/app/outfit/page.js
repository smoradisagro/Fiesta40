import { CloudRain, Sun, Moon, PartyPopper, Shirt, Footprints } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function OutfitPage() {
    return (
        <main className="min-h-screen p-4 pb-20 flex flex-col items-center">
            <BackButton />

            <div className="bg-white/95 p-6 border-4 border-black shadow-[8px_8px_0px_#000] -rotate-1 max-w-lg w-full mt-4">
                <div className="flex justify-center -mt-16 mb-4">
                    <div className="w-24 h-24 relative drop-shadow-xl bg-white rounded-full border-4 border-black p-2">
                        <Image src="/assets/btn_outfit.png" alt="Outfit" fill className="object-contain p-1" />
                    </div>
                </div>

                <h2 className="text-3xl text-center font-rye uppercase mb-4 bg-gray-200 inline-block px-4 border-2 border-black rotate-2 mx-auto block">
                    EL OUTFIT
                </h2>

                {/* Hero Image */}
                <div className="mb-6 border-2 border-black p-1 bg-white shadow-sm rotate-1">
                    <Image
                        src="/assets/outfit_guide.jpg"
                        alt="Guía de Estilo"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* CLIMA */}
                <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl mb-6 relative">
                    <div className="absolute -top-3 left-4 bg-blue-500 text-white px-2 py-1 text-xs font-bold rounded-full flex items-center gap-1">
                        <CloudRain size={12} /> CLIMA BOGOTÁ
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center mt-2">
                        <div>
                            <Sun className="mx-auto text-yellow-500 mb-1" />
                            <p className="font-bold text-sm">Días</p>
                            <p className="text-xs">Fresco (15–20°C)</p>
                        </div>
                        <div>
                            <Moon className="mx-auto text-blue-800 mb-1" />
                            <p className="font-bold text-sm">Noches</p>
                            <p className="text-xs">Frío (8–10°C)</p>
                        </div>
                    </div>
                    <p className="text-center text-xs mt-3 italic text-gray-600 bg-white/50 p-1 rounded">
                        "En Bogotá hace sol, llueve y hace frío, ¡todo en 1 hora!"<br />
                        👉 <strong>Capas siempre:</strong> Chaqueta ligera o trench.
                    </p>
                </div>

                {/* SECTION: DÍA */}
                <div className="mb-8">
                    <h3 className="font-rye text-xl mb-3 flex items-center gap-2 border-b-2 border-black pb-1">
                        <span className="text-2xl">👟</span> OUTFITS DE DÍA
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 ml-1 font-mono uppercase">Turismo, Compras, Caminar</p>

                    <div className="grid grid-cols-1 gap-4">
                        {/* Mujeres Día */}
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <h4 className="font-black text-pink-600 mb-2 font-marker text-lg">👩 Mujeres</h4>
                            <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
                                <li>Jeans rectos, wide leg o sastre.</li>
                                <li>Camiseta básica o blusa casual.</li>
                                <li><strong>Tenis blancos</strong> (Imprescindibles).</li>
                                <li>Trench, blazer oversize o chaqueta.</li>
                                <li><em>Tip: Menos tacón, más estilo natural.</em></li>
                            </ul>
                        </div>
                        {/* Hombres Día */}
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <h4 className="font-black text-blue-600 mb-2 font-marker text-lg">👨 Hombres</h4>
                            <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
                                <li>Jeans o pantalones chinos.</li>
                                <li>Camiseta básica o Polo.</li>
                                <li>Tenis limpios o loafers.</li>
                                <li>Hoodie o chaqueta ligera.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SECTION: NOCHE */}
                <div className="mb-8">
                    <h3 className="font-rye text-xl mb-3 flex items-center gap-2 border-b-2 border-black pb-1">
                        <span className="text-2xl">🌆</span> OUTFITS NOCHE
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 ml-1 font-mono uppercase">Zona T, Parque 93, Cenas</p>

                    <div className="grid grid-cols-1 gap-4">
                        {/* Mujeres Noche */}
                        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                            <h4 className="font-black text-purple-600 mb-2 font-marker text-lg">👩 Mujeres</h4>
                            <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
                                <li>Jeans oscuros o pantalón elegante.</li>
                                <li>Blusa satinada, top o body.</li>
                                <li>Botines o tacón cómodo.</li>
                                <li><strong>Abrigo bonito</strong> (Suma mucho).</li>
                                <li><em>Look: Chic sin exagerar.</em></li>
                            </ul>
                        </div>
                        {/* Hombres Noche */}
                        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                            <h4 className="font-black text-indigo-600 mb-2 font-marker text-lg">👨 Hombres</h4>
                            <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
                                <li>Pantalón oscuro.</li>
                                <li>Camisa (Lino, negro, estampada).</li>
                                <li>Zapato casual elegante.</li>
                                <li>Chaqueta estructurada.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SECTION: ANDRÉS */}
                <div className="bg-[var(--color-yellow)] p-1 border-2 border-dashed border-red-500 transform rotate-1 shadow-lg">
                    <div className="bg-white p-4 border border-black h-full">
                        <h3 className="font-rye text-xl mb-2 text-center text-[var(--color-red)] uppercase leading-none">
                            VIERNES DE FIESTA<br />
                            <span className="text-black text-sm font-sans tracking-widest">EN ANDRÉS CARNE DE RES</span>
                        </h3>
                        <div className="text-center mb-4">
                            <span className="bg-red-600 text-white text-xs px-2 py-1 font-bold rounded">🔥 MOOD: Divertido & Colorido</span>
                        </div>

                        <div className="space-y-4">
                            {/* Mujeres Andrés */}
                            <div>
                                <h4 className="font-black text-pink-600 mb-1 font-marker text-lg">👩 Mujeres</h4>
                                <p className="text-xs text-gray-500 mb-1 lowercase">(¡Aquí arriesguen más!)</p>
                                <ul className="text-sm space-y-1 text-gray-800">
                                    <li>✨ Vestido corto/midi con movimiento.</li>
                                    <li>✨ Falda + Top llamativo.</li>
                                    <li>✨ Botines o plataformas (Para bailar).</li>
                                    <li>✨ Chaqueta cool (Cuero/Denim).</li>
                                </ul>
                            </div>
                            {/* Hombres Andrés */}
                            <div>
                                <h4 className="font-black text-blue-600 mb-1 font-marker text-lg">👨 Hombres</h4>
                                <ul className="text-sm space-y-1 text-gray-800">
                                    <li>⚡ Camisa divertida (Color/Estampada).</li>
                                    <li>⚡ Jeans oscuros o pantalón cool.</li>
                                    <li>⚡ Zapatos cómodos.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 pt-3 border-t-2 border-dashed border-gray-300 text-center text-xs font-bold text-red-600">
                            🚫 No ir demasiado formal, Andrés es descomplicado.
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
