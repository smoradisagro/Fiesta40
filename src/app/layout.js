import { Inter, Rye, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rye = Rye({ weight: "400", subsets: ["latin"], variable: "--font-rye" });
const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-marker" });

export const metadata = {
    title: "Cumpleaños Sebastián #40",
    description: "Celebración estilo Andrés Carne de Res",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${rye.variable} ${permanentMarker.variable} font-sans`}>
                <div className="main-container">
                    {children}
                </div>
            </body>
        </html>
    );
}
