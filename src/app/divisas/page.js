"use client";
import { useState } from 'react';
import { Calculator, DollarSign } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function DivisasPage() {
    const [cop, setCop] = useState('');
    const RATE_USD = 0.00025;
    const RATE_GTQ = 0.0019;

    return (
        <main className="min-h-screen p-4 flex flex-col items-center pb-20">
            <BackButton />

            <div className="bg-white/95 p-6 border-4 border-black shadow-[8px_8px_0px_#000] max-w-md w-full mt-4">
                <div className="flex justify-center -mt-16 mb-4">
                    <div className="w-24 h-24 relative drop-shadow-xl bg-white rounded-full border-4 border-black p-2">
                        <Image src="/assets/btn_divisas.png" alt="Money" fill className="object-contain p-1" />
                    </div>
                </div>

                <h2 className="text-3xl text-center mb-6 rotate-[-1deg]">
                    <span className="bg-green-600 text-white px-4 py-2 border-black border-2 shadow-hard font-rye">
                        $$$ MONEY
                    </span>
                </h2>

                {/* Calculator */}
                <div className="bg-green-50 p-4 border-2 border-green-600 mb-8 rounded-xl relative">
                    <div className="absolute -top-3 -left-3 bg-green-600 text-white p-1 rounded border border-black"><Calculator size={20} /></div>

                    <label className="text-xs font-bold uppercase text-gray-500 mb-1 block">Pesos Colombianos (COP)</label>
                    <input
                        type="number"
                        value={cop}
                        onChange={(e) => setCop(e.target.value)}
                        placeholder="50000"
                        className="border-2 border-black p-2 text-2xl font-mono w-full text-center focus:outline-none focus:ring-4 ring-green-300"
                    />

                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="text-center bg-white border border-gray-300 p-2 rounded">
                            <p className="text-xs text-gray-400 font-bold">USD</p>
                            <p className="font-bold text-green-700 text-lg">${(cop * RATE_USD).toFixed(2)}</p>
                        </div>
                        <div className="text-center bg-white border border-gray-300 p-2 rounded">
                            <p className="text-xs text-gray-400 font-bold">GTQ</p>
                            <p className="font-bold text-blue-700 text-lg">Q{(cop * RATE_GTQ).toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                {/* Tax Free Guide */}
                <div className="bg-yellow-50 p-4 border-2 border-black rotate-1 relative">
                    <div className="absolute -top-4 right-0 bg-red-600 text-white font-bold text-xs px-2 py-1 rotate-3 border border-black">IMPORTANTE</div>
                    <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                        <DollarSign size={20} className="bg-black text-white rounded-full p-0.5" />
                        TAX FREE (IVA)
                    </h3>
                    <ul className="text-sm space-y-2 list-decimal list-inside font-marker text-gray-800">
                        <li>Pide <strong>Factura Electrónica</strong>.</li>
                        <li>Mínimo $130.000 COP por factura.</li>
                        <li>Llega al aeropuerto <strong>4 HORAS ANTES</strong>.</li>
                        <li>Busca la DIAN antes de hacer check-in (necesitas mostrar la mercancía).</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
