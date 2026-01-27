import { Calendar } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function ItinerarioPage() {
    return (
        <main className="min-h-screen p-4 flex flex-col items-center">
            <BackButton />

            <div className="bg-white/95 p-6 border-4 border-black shadow-[8px_8px_0px_#000] rotate-1 max-w-md w-full mt-4">
                <div className="flex justify-center -mt-16 mb-4">
                    <div className="w-24 h-24 relative drop-shadow-xl bg-white rounded-full border-4 border-black p-2">
                        <Image src="/assets/btn_itinerario.png" alt="Fiesta" fill className="object-cover rounded-full" />
                    </div>
                </div>

                <h2 className="text-3xl text-center mb-6">
                    <span className="bg-black text-white px-4 py-2 border-yellow-400 border-b-4 -rotate-1 inline-block font-rye">
                        ITINERARIO
                    </span>
                </h2>

                <div className="space-y-6 font-marker">
                    {/* Miércoles */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-3">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-red-600 text-white font-bold px-2 py-1 rounded text-xs">MIÉRCOLES 12</span>
                        </div>
                        <ul className="list-disc list-inside text-sm">
                            <li>Llegada y Check-in</li>
                            <li><strong className="text-red-800">6:00 PM:</strong> Cena zona Parque 93</li>
                            <li>Drinks tranqui 🍹</li>
                        </ul>
                    </div>

                    {/* Jueves */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-yellow-500 text-black font-bold px-2 py-1 rounded text-xs">JUEVES 13</span>
                        </div>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>🥣 Desayuno (¡Caldo de costilla!)</li>
                            <li>🏛️ Centro Histórico</li>
                            <li>🍲 Almuerzo Típico</li>
                            <li>🍻 Noche Zona G / Chapinero</li>
                        </ul>
                    </div>

                    {/* Viernes */}
                    <div className="bg-cyan-50 border-l-4 border-cyan-500 p-3 relative overflow-hidden">
                        <div className="absolute -right-2 top-0 text-4xl animate-bounce opacity-50">🎉</div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-cyan-500 text-white font-bold px-2 py-1 rounded text-xs">VIERNES 14</span>
                        </div>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Mañana libre / Spa</li>
                            <li><strong className="text-red-600 text-lg">6:00 PM:</strong> BUS PARTY ▶ ANDRÉS CHÍA 🥩💃</li>
                        </ul>
                    </div>

                    {/* Sábado */}
                    <div className="bg-pink-50 border-l-4 border-pink-500 p-3">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-pink-500 text-white font-bold px-2 py-1 rounded text-xs">SÁBADO 15</span>
                        </div>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>🛍️ Compras (Zona T / Andino)</li>
                            <li>🍻 Tardeo: Irish Pub Zona T</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
