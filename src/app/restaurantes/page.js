import { Utensils } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function RestaurantesPage() {
    const zonas = [
        {
            name: "USAQUÉN",
            desc: "Pueblito colonial. Artesanal.",
            places: ["80 Sillas", "Abasto", "Amarta"]
        },
        {
            name: "PARQUE 93",
            desc: "El punto de encuentro.",
            places: ["Gaira Café", "Cuzco", "El Corral Gourmet"]
        },
        {
            name: "ZONA G",
            desc: "G de Gastronomía. Top level.",
            places: ["Criterión", "Harry Sasson", "La Despensa"]
        },
        {
            name: "ZONA T",
            desc: "Fiesta y compras.",
            places: ["Andrés DC", "El Cielo", "Cantina La 15"]
        }
    ];

    return (
        <main className="min-h-screen p-4 flex flex-col items-center">
            <BackButton />

            <div className="flex justify-center -mb-8 z-10 relative">
                <div className="w-24 h-24 relative drop-shadow-xl bg-white rounded-full border-4 border-black p-2 animate-bounce-slow">
                    <Image src="/assets/btn_restaurantes.png" alt="Food" fill className="object-contain p-1" />
                </div>
            </div>

            <div className="bg-white/95 p-6 pt-10 border-4 border-black shadow-[8px_8px_0px_#000] rotate-1 max-w-md w-full mt-4">
                <h2 className="text-3xl text-center bg-red-600 text-white px-4 py-1 -rotate-2 border-black border-2 font-rye mb-6">
                    COMER RICO
                </h2>

                <div className="grid grid-cols-1 gap-4">
                    {zonas.map((zona, index) => (
                        <div key={index} className="bg-orange-50 p-3 border-2 border-orange-200 hover:border-black transition-colors">
                            <h3 className="font-black text-lg text-[var(--color-red-dark)] border-b-2 border-orange-300 mb-1 flex justify-between">
                                {zona.name}
                            </h3>
                            <p className="text-xs italic text-gray-500 mb-2">{zona.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {zona.places.map((place, i) => (
                                    <span key={i} className="text-xs font-bold bg-white px-2 py-1 border border-black rounded-full shadow-[2px_2px_0px_#000]">{place}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
