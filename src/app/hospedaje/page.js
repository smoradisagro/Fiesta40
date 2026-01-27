import { MapPin, Wifi, Coffee, Droplets } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function HospedajePage() {
    const whatsappMessage = "Hola Jessica, quiero reservar para el cumpleaños 40 de Sebastián del 11 al 15 de marzo";
    const whatsappLink = `https://wa.me/573017752701?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <main className="min-h-screen pb-10">
            <BackButton />

            <section id="hospedaje" className="max-w-md mx-auto px-4 pt-2">
                <div className="text-center mb-6">
                    <div className="bg-white/90 p-4 rotate-1 shadow-hard border-2 border-black">
                        <h2 className="text-3xl font-black mb-2 font-rye text-[var(--color-red-dark)]">HOSPEDAJE</h2>
                        <h3 className="text-xl font-bold">DoubleTree by Hilton</h3>
                        <p className="text-sm text-gray-600 font-bold">Parque 93, Bogotá</p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-2 gap-2 mb-6 -rotate-1">
                    <div className="border-4 border-white shadow-lg transform rotate-2 relative h-32">
                        <Image src="/assets/Doubletreehotel.jpg" alt="Fachada" fill className="object-cover" />
                    </div>
                    <div className="border-4 border-white shadow-lg transform -rotate-2 relative h-32">
                        <Image src="/assets/Doubletreepool.jpg" alt="Piscina" fill className="object-cover" />
                    </div>
                </div>

                <div className="bg-white/95 p-6 border-2 border-black shadow-hard rounded-sm mb-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex flex-col items-center p-2 border-2 border-black bg-[var(--color-cyan)] text-white">
                            <Wifi size={24} /> <span className="text-xs font-bold mt-1">WIFI</span>
                        </div>
                        <div className="flex flex-col items-center p-2 border-2 border-black bg-[var(--color-yellow)] text-black">
                            <Coffee size={24} /> <span className="text-xs font-bold mt-1">DESAYUNO</span>
                        </div>
                        <div className="flex flex-col items-center p-2 border-2 border-black bg-[var(--color-pink)] text-white">
                            <Droplets size={24} /> <span className="text-xs font-bold mt-1">PISCINA</span>
                        </div>
                        <div className="flex flex-col items-center p-2 border-2 border-black bg-[var(--color-red)] text-white">
                            <span className="text-2xl">💪</span> <span className="text-xs font-bold mt-1">GYM</span>
                        </div>
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-[#25D366] text-white border-2 border-black shadow-[4px_4px_0px_#000] p-3 font-bold hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 mb-4"
                    >
                        <Image src="/assets/btn_whatsapp.png" width={24} height={24} alt="WA" />
                        Reservar con Jessica
                    </a>

                    <div className="text-xs text-center text-gray-500 font-mono mb-4">
                        Contacto directo: +57 301 775 2701
                    </div>
                </div>

                {/* Map Image Link */}
                <div className="bg-yellow-100 p-2 border-2 border-black rotate-1 shadow-lg">
                    <p className="text-center font-bold mb-2">📍 UBICACIÓN</p>
                    <a href="https://maps.google.com/?q=DoubleTree+by+Hilton+Parque+93" target="_blank" className="block relative h-40 border border-black overflow-hidden">
                        <Image
                            src="https://api.mapbox.com/styles/v1/guestreservations/cjri539fb0xv02slesrxwgvia/static/pin-l+E94335(-74.04627228,4.68048000)/-74.04627228,4.68048000,14,0,0/690x360?access_token=pk.eyJ1IjoiZ3Vlc3RyZXNlcnZhdGlvbnMiLCJhIjoiY2p3dzRhbnQyMDBzcTQ0bnV1NzhmNXo1OCJ9.NFhf9HJg387AZD6VK8mtxg"
                            alt="Mapa Ubicación"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                            unoptimized
                        />
                    </a>
                    <p className="text-xs text-center mt-1 text-gray-600">Click para abrir en Google Maps</p>
                </div>

            </section>
        </main>
    );
}
