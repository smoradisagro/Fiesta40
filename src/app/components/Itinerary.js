import { Calendar, Coffee, ShoppingBag, Beer } from "lucide-react";

export default function Itinerary() {
    return (
        <section id="itinerario" className="section-container bg-white">
            <h2 className="text-3xl text-center mb-8">
                <span className="bg-black text-white px-4 py-2 border-yellow-400 border-b-4 rotate-1 inline-block">
                    ITINERARIO DE FIESTA
                </span>
            </h2>

            <div className="space-y-6">
                {/* Miércoles */}
                <div className="card bg-red-50 border-red-500">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-600 text-white font-bold px-2 py-1 rounded">MIÉRCOLES 12</span>
                        <span className="font-marker text-xl">Calentando Motores</span>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Llegada y Check-in</li>
                        <li><strong className="text-red-600">6:00 PM:</strong> Cena zona Parque 93</li>
                        <li>Drinks tranqui 🍹</li>
                    </ul>
                </div>

                {/* Jueves */}
                <div className="card bg-yellow-50 border-yellow-500 rotate-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-yellow-500 text-black font-bold px-2 py-1 rounded">JUEVES 13</span>
                        <span className="font-marker text-xl">Bogotá Cultural</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        <li>🥣 Desayuno en Hotel (¡Caldo de costilla!)</li>
                        <li>🏛️ Recorrido Centro Histórico (Candelaria, Plaza Bolívar)</li>
                        <li>🍲 Almuerzo Típico (¿Ajiaco en La Puerta Falsa?)</li>
                        <li>🍻 Noche de propuesta (Zona G / Chapinero)</li>
                    </ul>
                </div>

                {/* Viernes */}
                <div className="card bg-cyan-50 border-cyan-500 -rotate-1 relative">
                    <div className="absolute top-0 right-0 text-4xl animate-bounce">🎉</div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-cyan-500 text-white font-bold px-2 py-1 rounded">VIERNES 14</span>
                        <span className="font-marker text-xl">¡LA GRAN FIESTA!</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Mañana libre / Spa en hotel</li>
                        <li><strong className="text-red-600 text-xl">6:00 PM:</strong> 🎉 BUS PARTY ▶ ANDRÉS CHÍA</li>
                        <li>🚌 Salida desde el Hotel</li>
                        <li>🥩 Rumba hasta que el cuerpo aguante</li>
                    </ul>
                </div>

                {/* Sábado */}
                <div className="card bg-pink-50 border-pink-500">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-pink-500 text-white font-bold px-2 py-1 rounded">SÁBADO 15</span>
                        <span className="font-marker text-xl">Compras & Chill</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        <li>🛍️ Mañana de Compras (Zona T / Andino)</li>
                        <li>🍻 <strong className="text-red-600">Tardeo:</strong> Irish Pub Zona T</li>
                        <li>✈️ Preparar regreso</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
