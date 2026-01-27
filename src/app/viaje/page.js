import { Plane } from "lucide-react";
import BackButton from "../components/BackButton";

export default function ViajePage() {
    return (
        <main className="min-h-screen bg-blue-100">
            <BackButton />
            <section id="viaje" className="section-container border-none pt-0">
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

                        <div className="mt-8">
                            <p className="mb-2 font-bold text-sm">Vuelo Recomendado:</p>
                            <a
                                href="https://booking.avianca.com/av/booking/avail?departureDate=2026-03-11&tripType=round-trip&from=GUA&to=BOG&nbAdults=1&nbYoungs=0&nbChildren=0&nbInfants=0&language=ES&platform=WEBB2C&pointOfSale=GT&returnDate=2026-03-15&promoCode=&negoFare=&accessMethod=default&backend=PRD&FriendlyIDNegoF=&utmCampaign=&_ga=2.145670839.2042124658.1769491932-75703237.1769491932"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-andres bg-red-600 text-white hover:bg-red-700 hover:scale-105 transition-transform"
                            >
                                Reservar en Avianca ✈️
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
