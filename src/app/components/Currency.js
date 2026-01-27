"use client";
import { useState } from 'react';
import { Calculator, DollarSign } from "lucide-react";

export default function Currency() {
    const [cop, setCop] = useState('');

    // Tasas aproximadas (Hardcoded for demo stabilitiy)
    const RATE_USD = 0.00025; // 1 COP = 0.00025 USD (approx 4000)
    const RATE_GTQ = 0.0019;  // 1 COP = 0.0019 GTQ (approx 520)

    return (
        <section id="divisas" className="section-container bg-indigo-50 pb-20">
            <h2 className="text-3xl text-center mb-8 rotate-[-1deg]">
                <span className="bg-green-600 text-white px-4 py-2 border-black border-2 shadow-hard">
                    $$$ y TAXES
                </span>
            </h2>

            {/* Calculator */}
            <div className="card bg-white mb-8 border-4 border-green-600">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Calculator className="text-green-600" />
                    <h3 className="font-bold text-xl">Calculadora Rápida</h3>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-gray-500">Pesos Colombianos (COP)</label>
                    <input
                        type="number"
                        value={cop}
                        onChange={(e) => setCop(e.target.value)}
                        placeholder="Ej: 50000"
                        className="border-2 border-black p-2 text-xl font-mono w-full"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                    <div className="bg-green-100 p-2 border border-green-300">
                        <p className="text-xs text-gray-500 font-bold">USD (Aprox)</p>
                        <p className="text-xl font-bold text-green-800">
                            ${(cop * RATE_USD).toFixed(2)}
                        </p>
                    </div>
                    <div className="bg-blue-100 p-2 border border-blue-300">
                        <p className="text-xs text-gray-500 font-bold">Quetzales (Aprox)</p>
                        <p className="text-xl font-bold text-blue-800">
                            Q{(cop * RATE_GTQ).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Tax Free Guide */}
            <div className="card rotate-1 bg-yellow-50">
                <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                    <DollarSign size={20} className="bg-black text-white rounded-full p-0.5" />
                    ABC DEVOLUCIÓN IVA (TAX FREE)
                </h3>
                <ul className="text-sm space-y-3 list-decimal list-inside">
                    <li>Al comprar, pide siempre <strong>Factura Electrónica</strong> a tu nombre (pasaporte).</li>
                    <li>Aplica para: Ropa, calzado, marroquinería, artesanías.</li>
                    <li>Compra mínima por factura: 3 UVT (~$130.000 COP).</li>
                    <li className="bg-red-100 p-1 border border-red-200 rounded">
                        <strong>OJO:</strong> Llega al aeropuerto <span className="font-bold text-red-600">4 HORAS ANTES</span>.
                    </li>
                    <li>Ubica la oficina de la <strong>DIAN</strong> antes del Check-in.</li>
                    <li>Debes mostrar: Pasaporte, Pasabordo, Facturas y los <strong>Productos comprados</strong> (no los guardes en maleta documentada antes de esto).</li>
                </ul>
            </div>
        </section>
    );
}
