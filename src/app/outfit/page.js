import { Shirt, CloudRain, Umbrella } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function OutfitPage() {
    return (
        <main className="min-h-screen p-4 flex flex-col items-center">
            <BackButton />

            <div className="bg-white/95 p-6 border-4 border-black shadow-[8px_8px_0px_#000] -rotate-1 max-w-md w-full mt-4">
                <div className="flex justify-center -mt-16 mb-4">
                    <div className="w-24 h-24 relative drop-shadow-xl bg-white rounded-full border-4 border-black p-2">
                        <Image src="/assets/btn_outfit.png" alt="Outfit" fill className="object-contain p-1" />
                    </div>
                </div>

                <h2 className="text-3xl text-center font-rye uppercase mb-6 bg-gray-200 inline-block px-4 border-2 border-black rotate-2 mx-auto block">
                    EL OUTFIT
                </h2>

                <div className="flex items-center justify-center gap-4 mb-6 text-gray-500 bg-gray-100 p-2 rounded-lg">
                    <CloudRain /> <Umbrella /> <span className="font-bold">Bogotá = "La Nevera"</span>
                </div>

                <p className="mb-6 text-center italic font-serif text-lg">
                    "En Bogotá hace sol, llueve y hace frío, ¡todo en 1 hora!"
                </p>

                <ul className="space-y-4 font-marker">
                    <li className="flex items-start bg-blue-50 p-2 rounded border border-blue-200">
                        <span className="mr-3 text-2xl">🧥</span>
                        <div>
                            <strong>Layers (Capas):</strong>
                            <p className="text-sm font-sans">Camiseta + Suéter + Chaqueta.</p>
                        </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-2 rounded border border-gray-200">
                        <span className="mr-3 text-2xl">👖</span>
                        <div>
                            <strong>Noche:</strong>
                            <p className="text-sm font-sans">Jeans oscuros, chaqueta de cuero o blazer. (Hace frío).</p>
                        </div>
                    </li>
                    <li className="flex items-start bg-yellow-50 p-2 rounded border border-yellow-200">
                        <span className="mr-3 text-2xl">👟</span>
                        <div>
                            <strong>Zapatos:</strong>
                            <p className="text-sm font-sans">¡Cómodos! Botas o Tenis de cuero.</p>
                        </div>
                    </li>
                    <li className="flex items-start bg-red-50 p-2 rounded border border-red-200">
                        <span className="mr-3 text-2xl">💃</span>
                        <div>
                            <strong>Andrés Chía:</strong>
                            <p className="text-sm font-sans">Guapo pero listo para bailar.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    );
}
