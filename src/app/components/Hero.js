export default function Hero() {
    return (
        <section className="text-center py-10 bg-red-600 text-yellow-400 relative overflow-hidden" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--color-red)' }}>
            {/* Decorative stars/hearts */}
            <div className="absolute top-5 left-5 text-4xl animate-bounce">⭐</div>
            <div className="absolute bottom-5 right-5 text-4xl animate-pulse">❤️</div>

            <div className="border-4 border-yellow-400 p-8 m-4 rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white transform transition-transform hover:scale-105 duration-300">
                <h2 className="text-xl font-bold uppercase tracking-widest mb-2 text-black" style={{ fontFamily: 'var(--font-inter)' }}>Estás invitado al</h2>
                <h1 className="text-6xl md:text-8xl font-black text-red-600 mb-4" style={{ fontFamily: 'var(--font-rye)', textShadow: '4px 4px 0px #000' }}>
                    CUMPLEAÑOS<br />
                    <span className="text-yellow-500" style={{ textShadow: '4px 4px 0px #000' }}>SEBASTIÁN #40</span>
                </h1>
                <p className="text-2xl text-black font-marker rotate-[-2deg] mt-4" style={{ fontFamily: 'var(--font-marker)' }}>
                    ¡A celebrar la vida!
                </p>
            </div>

            <div className="mt-8 space-y-2">
                <p className="text-xl text-white font-bold bg-black inline-block px-4 py-1 rotate-1">MARZO 11 - 15</p>
                <br />
                <p className="text-xl text-black font-bold bg-yellow-400 inline-block px-4 py-1 -rotate-1">BOGOTÁ, COLOMBIA</p>
            </div>
        </section>
    );
}
