"use client";
import Link from "next/link";
import Image from "next/image";
import { track } from '@vercel/analytics/react';

export default function Home() {
    const modules = [
        // ... (rest of modules array)
    ];

    // ... (rest of simple render code)

    {/* WhatsApp Group Button */ }
    <div className="mt-12 mb-8 animate-bounce-slow">
        <a
            href="https://chat.whatsapp.com/DwU6hoQXkIG8Uo79TCEWTW?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('Click WhatsApp Group')}
            className="flex items-center gap-2 bg-[#25D366] text-white font-black px-6 py-3 rounded-full border-2 border-white shadow-[0_0_15px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
        >
            <Image src="/assets/btn_whatsapp.png" width={24} height={24} alt="WA" />
            UNIRME AL GRUPO
        </a>
    </div>

    {/* Credits */ }
    <div className="text-center text-white font-marker text-xs px-4 bg-black/60 p-2 rounded-full transform -rotate-1 border border-white/30 backdrop-blur-md">
        Diseñado por Sebastián Mora ❤️
    </div>
        </main >
    );
}
