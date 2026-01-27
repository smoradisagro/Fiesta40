import { Car, Info } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function TransportePage() {
    return (
        <main className="min-h-screen p-4 flex flex-col items-center">
            <BackButton />

            <div className="bg-white/95 p-6 border-4 border-black shadow-[8px_8px_0px_#000] max-w-md w-full mt-4 relative">
                <div className="absolute -top-10 -right-6 rotate-12">
                    <Image src="/assets/btn_transporte.png" width={100} height={100} alt="Car" className="drop-shadow-lg" />
                </div>

                <h2 className="text-3xl text-center mb-8 font-marker text-[var(--color-cyan)] border-b-4 border-[var(--color-cyan)] inline-block">
                    TRANSPORTE
                </h2>

                <div className="bg-teal-50 p-4 border-2 border-dashed border-teal-500 rounded-lg mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-black text-white p-2 rounded-full"><Car size={20} /></div>
                        <h3 className="font-bold text-xl uppercase">Solo Uber</h3>
                    </div>
                    <p className="text-sm">Por seguridad y facilidad, no uses taxi de calle.</p>
                </div>

                <h4 className="font-bold mb-3 bg-yellow-300 inline-block px-2 transform -rotate-1 shadow-sm border border-black">
                    TARIFAS ESTIMADAS (Uber X)
                </h4>

                <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between items-center p-2 bg-gray-50 border border-gray-200">
                        <span>✈️ Aero ➔ Hotel</span>
                        <span className="font-bold text-red-600 bg-red-100 px-1 rounded">$12-15 USD</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 border border-gray-200">
                        <span>🏨 Hotel ➔ Zona T</span>
                        <span className="font-bold text-red-600 bg-red-100 px-1 rounded">$4-6 USD</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 border border-gray-200">
                        <span>🏨 Hotel ➔ Chía</span>
                        <span className="font-bold text-red-600 bg-red-100 px-1 rounded">$20-25 USD</span>
                    </div>
                </div>

                <div className="mt-6 flex items-start gap-2 text-xs bg-blue-100 p-3 rounded border border-blue-300">
                    <Info size={32} className="text-blue-600" />
                    <p><strong>ALERTA DE TRÁFICO:</strong> Bogotá es caótico. Siempre sal 45 minutos antes de lo que creas necesario.</p>
                </div>
            </div>
        </main>
    );
}
