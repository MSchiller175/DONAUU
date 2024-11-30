import React from 'react';
import { motion } from 'framer-motion';
import { Home, MessageSquare, ArrowRight } from 'lucide-react';

const FloatingCircle = ({ delay = 0, size = 'large' }) => {
  const variants = {
    animate: {
      y: ['0%', '-50%', '0%'],
      x: ['0%', '30%', '0%'],
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.3, 0.1],
      transition: {
        duration: 15,
        ease: 'easeInOut',
        repeat: Infinity,
        delay,
      },
    },
  };

  const dimensions = size === 'large' ? 'w-96 h-96' : 'w-64 h-64';

  return (
    <motion.div
      variants={variants}
      animate="animate"
      className={`absolute ${dimensions} rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-300/5 blur-3xl pointer-events-none`}
    />
  );
};

const GridPattern = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
);

const Properties = () => {
  const discordUrl = 'https://discord.gg/hwuefs5bjE';

  return (
    <section id="properties" className="relative py-16 min-h-screen bg-gray-950 overflow-hidden">
      <GridPattern />
      
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingCircle delay={0} size="large" />
        <FloatingCircle delay={5} size="small" />
        <FloatingCircle delay={2} size="large" />
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Home className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">
            🏡 Immobilienangebot
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Jedes Haus kann ab jetzt bewohnbar gemacht werden! Stellen Sie Ihre Anfrage, 
            und wir kümmern uns schnellstmöglich um Ihr Anliegen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-gray-900/50 rounded-2xl p-8 backdrop-blur-md border border-gray-800/50 shadow-xl"
        >
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="w-8 h-8 text-emerald-400 mr-3" />
            <h3 className="text-2xl font-semibold text-white">
              Discord Ticket System
            </h3>
          </div>
          
          <div className="space-y-4 text-emerald-100 mb-8">
            <p className="text-center">
              Immobilienanfragen werden ausschließlich über unser Discord-Ticket-System bearbeitet.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
              <h4 className="font-semibold text-white mb-2">So funktioniert's:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Treten Sie unserem Discord-Server bei</li>
                <li>Navigieren Sie zum Ticket-Bereich</li>
                <li>Erstellen Sie ein neues Ticket für Ihre Immobilienanfrage</li>
                <li>Unser Team wird sich umgehend mit Ihnen in Verbindung setzen</li>
              </ol>
            </div>
          </div>

          <motion.a
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group w-full sm:w-auto mx-auto shadow-lg hover:shadow-emerald-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Zum Discord Server</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;