import { Car, Info } from "lucide-react";
import BackButton from "../components/BackButton";

export default function TransportePage() {
    return (
        <main className="min-h-screen bg-teal-50">
            <BackButton />
            <section id="transporte" className="section-container border-none pt-0">
                <h2 className="text-3xl text-center mb-8 font-marker text-[var(--color-cyan)]">
                    TRANSPORTE
                </h2>

                <div className="card rotate-1 bg-white">
                    <div className="flex items-center gap-4 mb-4 border-b-2 border-dashed border-gray-400 pb-2">
                        <div className="bg-black text-white p-2 rounded-full">
                            <Car size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Recomendación #1: UBER</h3>
                            <p className="text-sm">Es lo más seguro y fácil. No uses taxi de calle.</p>
                        </div>
                    </div>

                    <h4 className="font-bold mb-2 bg-yellow-300 inline-block px-2">TARIFAS ESTIMADAS (Uber X)</h4>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-gray-50 border border-gray-200">
                            <span>✈️ Aeropuerto ➔ Hotel</span>
                            <span className="font-bold text-red-600">~ $12 - $15 USD</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 border border-gray-200">
                            <span>🏨 Hotel ➔ Andino/Zona T</span>
                            <span className="font-bold text-red-600">~ $4 - $6 USD</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 border border-gray-200">
                            <span>🏨 Hotel ➔ Andrés Chía</span>
                            <span className="font-bold text-red-600">~ $20 - $25 USD</span>
                        </div>
                    </div>

                    <div className="mt-4 flex items-start gap-2 text-xs bg-blue-100 p-2 rounded">
                        <Info size={16} className="mt-1 flex-shrink-0" />
                        <p>El tráfico en Bogotá es pesado. Planea siempre con 30-45 mins extra para cualquier trayecto.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
