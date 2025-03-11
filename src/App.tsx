import React, { useEffect, useState } from 'react';
import { Hammer, Wrench, HardHat, Ruler, Construction } from 'lucide-react';

function App() {
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [
    { component: Hammer, text: "Lavori in corso" },
    { component: Wrench, text: "Stiamo costruendo" },
    { component: HardHat, text: "Torneremo presto" },
    { component: Ruler, text: "In costruzione" },
    { component: Construction, text: "Novità in arrivo" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((current) => (current + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 tracking-tighter">
            EDILP2
          </h1>
          <div className="text-orange-500/60 text-sm font-medium tracking-widest mt-2">
            COSTRUZIONI E RISTRUTTURAZIONI
          </div>
          <div className="mt-4 space-y-2">
            <div className="text-white/80 text-lg font-medium">
              MAGAZZINO EDILE • NOLEGGIO MEZZI PESANTI • VENDITA MATERIALI
            </div>
            <div className="text-orange-500/80 text-lg font-semibold italic">
              SOLARINO
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
          <div className="flex items-center justify-center mb-8">
            <div className="relative h-32 w-32">
              {icons.map((Icon, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 transition-all duration-500 transform ${
                    activeIcon === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <Icon.component
                    size={128}
                    className="text-orange-500"
                    strokeWidth={1.5}
                  />
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-4 text-orange-500 font-serif">
            Sito in Costruzione
          </h2>

          <div className="space-y-4 text-center">
            <p className="text-xl text-white/90 italic">
              {icons[activeIcon].text}
            </p>
            <p className="text-white/70">
              Stiamo lavorando duramente per creare qualcosa di speciale per voi.
              Tornate presto a trovarci!
            </p>
          </div>

          <div className="mt-12 flex justify-center space-x-4">
            <div className="animate-bounce delay-100">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
            <div className="animate-bounce delay-200">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
            <div className="animate-bounce delay-300">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-white/50 italic text-sm">
          © 2024 EDILP2 - Torniamo più forti che mai
        </div>
      </div>
    </div>
  );
}

export default App;