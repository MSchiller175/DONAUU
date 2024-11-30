import React from 'react';
import { motion } from 'framer-motion';
import { Keyboard, Command } from 'lucide-react';

const Controls = () => {
  const controls = [
    { key: 'F1', description: 'Handy (man muss eins besitzen)' },
    { key: 'F2', description: 'Inventar' },
    { key: 'F5', description: 'Emotes' },
    { key: 'F3', description: 'Interaktionsmenü' },
    { key: 'F6', description: 'Job-Interaktionen' },
    { key: 'F7', description: 'Rechnungen' },
    { key: 'F8', description: 'FiveM Console' },
    { key: 'F10', description: 'Scoreboard' },
    { key: 'F11', description: 'Fahrzeugsteuerung' },
    { key: 'G', description: 'Gurt' },
    { key: '´', description: 'Umfallen' },
    { key: 'U', description: 'Autoschlüssel Job und Privat' },
    { key: 'X', description: 'Emote abbrechen' },
    { key: 'H', description: 'Hände hoch' },
    { key: 'B', description: 'Mit dem Finger zeigen / Fahrzeugmotor starten' },
    { key: 'T', description: 'Befehlchat öffnen' },
    { key: 'K', description: 'Visn_are Menü (selbst einstellen unter Tastaturbelegungen)' },
    { key: 'J', description: 'Visn_are Open Self Menu (selbst einstellen unter Tastaturbelegungen)' },
    { key: 'Z', description: 'Kleidungsinteraktionen' },
    { key: 'L', description: 'Chat-Einstellungen anpassen (Verstecken)' },
    { key: 'N', description: 'Reden (einstellbar unter Tastaturbelegungen)' },
    { key: '^', description: 'Sprachreichweite umstellen (links von der 1)' },
    { key: 'Bild runter', description: 'Tempomat' },
    { key: '+', description: 'Open Tablet Emergency Dispatch (selbst einstellen)' },
    { key: '#', description: 'Leitstelle Emergency Dispatch (selbst einstellen)' },
    { key: 'ALT (links)', description: 'Target Script (90 % der Interaktionen)' },
    { key: 'I', description: 'Funkgerät' },
    { key: 'ß', description: 'Open ID Card Menü (alternativ über F4)' },
  ];

  return (
    <section id="controls" className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Tastenbelegung</h2>
          <p className="text-emerald-400">Alle wichtigen Steuerungstasten für DonauCity RP</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {controls.map((control, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-emerald-900/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-800/50 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Keyboard className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                    {control.key}
                  </h3>
                  <p className="text-emerald-100/80">{control.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-emerald-900/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-800/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <Command className="w-6 h-6 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Wichtige Befehle</h3>
          </div>
          <ul className="space-y-2 text-emerald-100/80">
            <li><span className="text-emerald-400">/report</span> - Um einen Admin zu rufen (Grund angeben)</li>
            <li><span className="text-emerald-400">/carry</span> - Person tragen</li>
            <li><span className="text-emerald-400">/driver</span> oder Shift-Taste - Sitzplatz wechseln</li>
            <li><span className="text-emerald-400">/me</span> - Nachricht im Chat schreiben</li>
            <li><span className="text-emerald-400">/bullets</span> - Zeigt Kugeln in eigenen Körperteilen</li>
            <li><span className="text-emerald-400">/showbullets</span> - Zeigt Kugeln im nächsten Spieler</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Controls;