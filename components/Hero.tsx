import React from 'react';
import { motion } from 'framer-motion';
import { Users, Server, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://cdn-longterm.mee6.xyz/plugins/embeds/images/961606797418975232/634e1f5f1573c824bc18e6d0135e4cc1fb907d6b421894c547f0957ca4f5dcb4.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 to-emerald-900/75 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Willkommen in der DonauCity
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto">
            Erlebe Roleplay auf höchstem Niveau in einer lebendigen Community
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-4 text-white border border-emerald-500/20">
              <Users className="w-6 h-6 mb-2 mx-auto text-emerald-400" />
              <p className="text-sm">Online Spieler</p>
              <p className="text-2xl font-bold">127/150</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Server className="inline-block w-5 h-5 mr-2" />
              Server Beitreten
            </motion.button>

            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-4 text-white border border-emerald-500/20">
              <p className="text-sm">Server IP</p>
              <p className="text-xl font-mono">37.221.94.254</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto bg-emerald-900/40 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Unterstütze uns</h2>
            </div>
            <p className="text-emerald-100 mb-4">
              Dies ist der einzige Spenden Link wo ihr euch zu 1000% sicher sein könnt das diese an den Server gehen!
            </p>
            <motion.a
              href="https://www.paypal.com/paypalme/mcb320"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 w-full md:w-auto"
            >
              <Heart className="w-5 h-5" />
              Jetzt Spenden
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;