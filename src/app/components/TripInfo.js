import { Plane } from "lucide-react";

export default function TripInfo() {
    return (
        <section id="viaje" className="section-container bg-blue-100">
            <div className="flex items-center justify-center mb-6">
                <Plane className="w-12 h-12 text-[var(--color-cyan)] mr-4" />
                <h2 className="text-3xl text-center bg-[var(--color-cyan)] text-white px-4 py-2 rotate-[-2deg] shadow-hard border-black border-2">
                    EL VIAJE
                </h2>
            </div>

            <div className="card bg-white p-6 relative">
                <div className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full p-2 w-12 h-12 flex items-center justify-center font-bold border-2 border-black animate-spin-slow">
                    ✈️
                </div>

                <div className="space-y-4 text-center">
                    <p className="text-xl font-bold">GUATEMALA ➔ BOGOTÁ</p>
                    <p className="text-lg">Salida: <span className="font-bold text-red-600">11 de Marzo</span></p>
                    <hr className="border-black border-dashed my-2" />
                    <p className="text-xl font-bold">BOGOTÁ ➔ GUATEMALA</p>
                    <p className="text-lg">Regreso: <span className="font-bold text-red-600">15 de Marzo</span></p>

                    <div className="mt-6">
                        <a
                            href="https://www.avianca.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-andres"
                        >
                            Buscar Vuelos en Avianca
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
