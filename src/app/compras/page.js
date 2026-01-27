import { Navigation } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function ComprasPage() {
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

                <div className="text-center mb-6">
                    <h3 className="text-xl font-black mb-1">C.C. ANDINO</h3>
                    <p className="text-sm text-gray-600 mb-4">El mejor lugar para marcas de lujo Colombianas.</p>

                    <a
                        href="https://waze.com/ul?ll=4.6669,-74.0535&navigate=yes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-andres text-sm py-2 px-6 flex items-center justify-center gap-2 mx-auto w-fit"
                    >
                        <Navigation size={16} /> Ir con Waze
                    </a>
                </div>

                <div className="space-y-3 font-marker">
                    <div className="bg-pink-50 p-3 border-l-4 border-pink-500">
                        <h4 className="font-bold border-b border-pink-300 mb-2">MARCAS TOP:</h4>
                        <ul className="space-y-2">
                            <li><a href="https://www.velez.com.co/" target="_blank" className="hover:text-pink-600 underline">Vélez (Cuero)</a></li>
                            <li><a href="https://www.arturocalle.com/" target="_blank" className="hover:text-pink-600 underline">Arturo Calle (Clásico)</a></li>
                            <li><a href="https://www.gef.com.co/" target="_blank" className="hover:text-pink-600 underline">GEF (Básicos)</a></li>
                            <li><a href="https://ondademar.com/" target="_blank" className="hover:text-pink-600 underline">Onda de Mar (Playa)</a></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-100 p-3 text-sm border-2 border-black shadow-sm rotate-1">
                        <strong>💡 PRO TIP:</strong> Compra online 1 semana antes y envía al hotel. ¡Te ahorras tiempo!
                    </div>
                </div>
            </div>
        </main>
    );
}
