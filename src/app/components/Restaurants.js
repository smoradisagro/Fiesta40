import { Utensils } from "lucide-react";

export default function Restaurants() {
    const zonas = [
        {
            name: "USAQUÉN",
            desc: "Pueblito colonial dentro de la ciudad. Romántico y artesanal.",
            places: ["80 Sillas", "Abasto", "Amarta"]
        },
        {
            name: "PARQUE 93",
            desc: "El punto de encuentro. Vibrante y cosmopolita.",
            places: ["Gaira Café", "Cuzco", "El Corral Gourmet (Clásico)"]
        },
        {
            name: "ZONA G",
            desc: "G de Gastronomía. Alta cocina y arquitectura inglesa.",
            places: ["Criterión", "Harry Sasson", "La Despensa"]
        },
        {
            name: "ZONA T",
            desc: "Fiesta y compras. El corazón de la rumba.",
            places: ["Andrés DC", "El Cielo", "Cantina La 15"]
        }
    ];

    return (
        <section id="restaurantes" className="section-container bg-white">
            <div className="flex items-center justify-center mb-8">
                <Utensils className="w-10 h-10 mr-2 text-red-600" />
                <h2 className="text-3xl text-center bg-red-600 text-white px-4 py-1 rotate-2 border-black border-2">
                    RESTAURANTES
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {zonas.map((zona, index) => (
                    <div key={index} className="card hover:rotate-1 transition-transform">
                        <h3 className="font-black text-xl text-[var(--color-red-dark)] border-b-2 border-black mb-2">
                            {zona.name}
                        </h3>
                        <p className="text-sm italic mb-2">{zona.desc}</p>
                        <ul className="list-disc list-inside">
                            {zona.places.map((place, i) => (
                                <li key={i} className="font-bold">{place}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
