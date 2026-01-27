import { Plane } from "lucide-react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function ViajePage() {
    return (
        <main className="min-h-screen p-4 flex flex-col items-center">
            <BackButton />

            <div className="bg-white/95 p-6 border-4 border-black shadow-[8px_8px_0px_#000] rotate-1 max-w-md w-full mt-4">
                {/* Decorative Icon */}
                <div className="flex justify-center -mt-16 mb-4">
                    <div className="w-24 h-24 relative drop-shadow-xl bg-white rounded-full border-4 border-black p-2">
                        <Image src="/assets/btn_viaje.png" alt="Avió" fill className="object-contain p-2" />
                    </div>
                </div>

                <h2 className="text-4xl text-center bg-[var(--color-cyan)] text-white px-4 py-2 rotate-[-2deg] border-black border-2 font-rye mb-6 shadow-sm">
                    EL VIAJE
                </h2>

                <div className="space-y-6 text-center font-marker">
                    <div className="border-b-2 border-dashed border-gray-400 pb-4">
                        <p className="text-2xl font-bold mb-1">GUATEMALA ➔ BOGOTÁ</p>
                        <p className="text-xl text-red-600 bg-yellow-200 inline-block px-2 transform -rotate-1">Salida: 11 de Marzo</p>
                    </div>

                    <div className="pb-4">
                        <p className="text-2xl font-bold mb-1">BOGOTÁ ➔ GUATEMALA</p>
                        <p className="text-xl text-red-600 bg-yellow-200 inline-block px-2 transform rotate-1">Regreso: 15 de Marzo</p>
                    </div>

                    <div className="mt-8">
                        <a
                            href="https://booking.avianca.com/av/booking/avail?departureDate=2026-03-11&tripType=round-trip&from=GUA&to=BOG&nbAdults=1&nbYoungs=0&nbChildren=0&nbInfants=0&language=ES&platform=WEBB2C&pointOfSale=GT&returnDate=2026-03-15&promoCode=&negoFare=&accessMethod=default&backend=PRD&FriendlyIDNegoF=&utmCampaign=&_ga=2.145670839.2042124658.1769491932-75703237.1769491932"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-andres w-full text-lg animate-pulse-slow hover:animate-none"
                        >
                            Reservar en Avianca ✈️
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
