import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    return (
        <div className="p-4">
            <Link href="/" className="btn-andres flex items-center gap-2 inline-block bg-white text-black hover:bg-yellow-400 text-sm">
                <ArrowLeft size={16} /> Volver al Menú
            </Link>
        </div>
    );
}
