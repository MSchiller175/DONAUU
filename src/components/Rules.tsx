import React from 'react';
import { motion } from 'framer-motion';
import { Book, Download } from 'lucide-react';

const Rules = () => {
  const rules = [
    { number: 1, title: "Respekt und Toleranz", content: "Behandle alle Mitglieder respektvoll und vermeide Beleidigungen, Diskriminierung oder Mobbing." },
    { number: 2, title: "Keine NSFW- oder illegalen Inhalte", content: "Posten von NSFW-Inhalten, illegalen Links und strafbarem Material ist verboten." },
    { number: 3, title: "Kein Spam oder Trolling", content: "Vermeide Nachrichtenflut, unnötige Erwähnungen und absichtliches Stören." },
    { number: 4, title: "Werbung nur mit Erlaubnis", content: "Werbung oder Selbstpromotion ist nur in dafür vorgesehenen Kanälen und mit Zustimmung der Mods erlaubt." },
    { number: 5, title: "Konstruktive Kritik und Feedback", content: "Kritik ist willkommen, solange sie respektvoll bleibt. Feedback bitte direkt an die Mods oder über Umfragen." },
    { number: 6, title: "Privatsphäre respektieren", content: "Teile keine persönlichen Daten und respektiere die Privatsphäre anderer." },
    { number: 7, title: "Keine Hacks oder Cheats", content: "Verwende keine Cheats, Hacks oder Exploits in Spielen." },
    { number: 8, title: "Keine politischen oder religiösen Diskussionen", content: "Vermeide politische und religiöse Themen, um Streit zu vermeiden." },
    { number: 9, title: "Spoiler kennzeichnen", content: "Markiere Spoiler, damit das Spielerlebnis anderer nicht ruiniert wird." },
    { number: 10, title: "Mod-Entscheidungen respektieren", content: "Folge den Anweisungen des Teams und diskutiere Moderationsentscheidungen nicht öffentlich." },
    { number: 11, title: "Themen der Kanäle beachten", content: "Poste im richtigen Kanal und halte dich an das Thema des Kanals." },
    { number: 12, title: "Anständiges Profil", content: "Halte deinen Benutzernamen und Avatar angemessen und frei von beleidigenden Inhalten." },
    { number: 13, title: "Richtlinien für Sprachkanäle", content: "Vermeide laute Hintergrundgeräusche und Störungen in Voice-Chats." },
    { number: 14, title: "Support und Reports", content: "Nutze Support-Kanäle nur bei echten Problemen, und missbrauche das Meldesystem nicht." },
    { number: 15, title: "Verantwortung für Verhalten", content: "Jeder ist für seine Aussagen und Handlungen selbst verantwortlich." },
    { number: 16, title: "Hab Spaß und respektiere das Spiel", content: "Genieße die Community, respektiere andere und das Gaming-Erlebnis aller!" }
  ];

  return (
    <section id="rules" className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Regelwerk</h2>
          <p className="text-emerald-400">Unsere Community-Richtlinien für ein faires Miteinander</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {rules.map((rule) => (
            <motion.div
              key={rule.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-emerald-900/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-800/50"
            >
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Book className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {rule.number}. {rule.title}
                  </h3>
                  <p className="text-emerald-100/80">{rule.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            <Download className="w-5 h-5" />
            Regelwerk als PDF herunterladen
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;