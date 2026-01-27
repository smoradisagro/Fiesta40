import { Navigation } from "lucide-react";
import BackButton from "../components/BackButton";

export default function ComprasPage() {
    return (
        <main className="min-h-screen bg-pink-50">
            <BackButton />
            <section id="compras" className="section-container border-none pt-0">
                <h2 className="text-3xl text-center mb-8 -rotate-1">
                    <span className="bg-[var(--color-yellow)] text-black px-4 py-2 border-black border-2 shadow-hard">
                        SHOPPING
                    </span>
                </h2>

                <div className="card">
                    <h3 className="text-2xl font-black mb-2 text-center">C.C. ANDINO</h3>
                    <p className="text-center mb-4">El mejor lugar para encontrar marcas colombianas de lujo.</p>

                    <div className="text-center mb-6">
                        <a
                            href="https://waze.com/ul?ll=4.6669,-74.0535&navigate=yes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-andres text-sm py-2 px-4"
                        >
                            <Navigation className="inline w-4 h-4 mr-1" /> Ir con Waze
                        </a>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold border-b-2 border-black inline-block">MARCAS RECOMENDADAS:</h4>

                        <div className="grid grid-cols-1 gap-3">
                            <a href="https://www.velez.com.co/" target="_blank" className="block p-2 border hover:bg-gray-100 flex justify-between items-center group">
                                <span className="font-bold">Vélez</span>
                                <span className="text-xs text-gray-500 group-hover:text-red-500">Cuero increíble ➔</span>
                            </a>
                            <a href="https://www.arturocalle.com/" target="_blank" className="block p-2 border hover:bg-gray-100 flex justify-between items-center group">
                                <span className="font-bold">Arturo Calle</span>
                                <span className="text-xs text-gray-500 group-hover:text-red-500">Clásico masculino ➔</span>
                            </a>
                            <a href="https://www.gef.com.co/" target="_blank" className="block p-2 border hover:bg-gray-100 flex justify-between items-center group">
                                <span className="font-bold">GEF</span>
                                <span className="text-xs text-gray-500 group-hover:text-red-500">Básicos cool ➔</span>
                            </a>
                            <a href="https://shop.mango.com/co" target="_blank" className="block p-2 border hover:bg-gray-100 flex justify-between items-center group">
                                <span className="font-bold">Mango</span>
                                <span className="text-xs text-gray-500 group-hover:text-red-500">Moda ➔</span>
                            </a>
                            <a href="https://ondademar.com/" target="_blank" className="block p-2 border hover:bg-gray-100 flex justify-between items-center group">
                                <span className="font-bold">Onda de Mar</span>
                                <span className="text-xs text-gray-500 group-hover:text-red-500">Beachwear de lujo ➔</span>
                            </a>
                        </div>

                        <div className="bg-yellow-100 p-3 mt-4 text-sm border-l-4 border-yellow-500">
                            <strong>💡 PRO TIP:</strong> Compra online con 1 semana de anticipación y pon la dirección del Hotel DoubleTree. ¡Llega directo a recepción!
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
