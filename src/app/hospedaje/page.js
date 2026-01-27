import { MapPin, Wifi, Coffee, Droplets } from "lucide-react";
import BackButton from "../components/BackButton";

export default function HospedajePage() {
    const whatsappMessage = "Hola Alejandro, quiero reservar para el cumpleaños 40 de Sebastián del 11 al 15 de marzo";
    const whatsappLink = `https://wa.me/573124793284?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <main className="min-h-screen bg-yellow-50">
            <BackButton />
            <section id="hospedaje" className="section-container border-none pt-0">
                <h2 className="text-3xl text-center mb-8 rotate-1">
                    <span className="bg-[var(--color-pink)] text-white px-4 py-2 border-black border-2 shadow-hard">
                        HOSPEDAJE
                    </span>
                </h2>

                <div className="card">
                    <h3 className="text-xl font-black text-center mb-2">DoubleTree by Hilton</h3>
                    <p className="text-center text-sm font-bold text-gray-500 mb-4">Parque 93, Bogotá</p>

                    <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="flex flex-col items-center p-2 border-2 border-black bg-[var(--color-cyan)] text-white">
                            <Wifi size={24} />
                            <span className="text-xs font-bold mt-1">WIFI</span>
                        </div>
                        <div className="flex flex-col items-center p-2 border-2 border-black bg-[var(--color-yellow)] text-black">
                            <Coffee size={24} />
                            <span className="text-xs font-bold mt-1">DESAYUNO</span>
                        </div>
                        <div className="flex flex-col items-center p-2 border-2 border-black bg-[var(--color-pink)] text-white">
                            <Droplets size={24} />
                            <span className="text-xs font-bold mt-1">PISCINA</span>
                        </div>
                        <div className="flex flex-col items-center p-2 border-2 border-black bg-[var(--color-red)] text-white">
                            <span className="text-2xl">💪</span>
                            <span className="text-xs font-bold mt-1">GIMNASIO</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-6">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-andres text-center bg-green-500 text-white border-black"
                            style={{ backgroundColor: '#25D366', color: 'white' }}
                        >
                            Reservar por WhatsApp
                        </a>

                        <a
                            href="https://maps.google.com/?q=DoubleTree+by+Hilton+Bogota+Parque+93"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 underline font-bold"
                        >
                            <MapPin size={20} />
                            Ver ubicación en Mapa
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
