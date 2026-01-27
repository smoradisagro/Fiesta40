import { Shirt, CloudRain, Umbrella } from "lucide-react";

export default function Outfit() {
    return (
        <section id="outfit" className="section-container bg-gray-100">
            <div className="flex items-center justify-center mb-6">
                <Shirt className="w-10 h-10 mr-2" />
                <h2 className="text-3xl text-center font-rye uppercase">
                    EL OUTFIT
                </h2>
            </div>

            <div className="card bg-white p-6 rotate-2">
                <div className="flex items-center justify-center gap-4 mb-4 text-gray-500">
                    <CloudRain /> <Umbrella /> <span className="font-bold">Bogotá = "La Nevera"</span>
                </div>

                <p className="mb-4 text-center italic">
                    "En Bogotá hace sol, llueve y hace frío, ¡todo en 1 hora!"
                </p>

                <ul className="space-y-3">
                    <li className="flex items-start">
                        <span className="mr-2">🧥</span>
                        <span><strong>Capas (Layers):</strong> Camiseta + Suéter/Camisa + Chaqueta.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2">👖</span>
                        <span><strong>Noche:</strong> Smart Casual. Jeans oscuros, camisa, chaqueta de cuero o blazer informal. ¡Hace frío en la noche!</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2">👟</span>
                        <span><strong>Zapatos:</strong> Cómodos para caminar. Botas o Tenis de cuero van bien.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2">🕺</span>
                        <span><strong>Fiesta Andrés:</strong> ¡Ponte guapo pero cómodo para bailar!</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
