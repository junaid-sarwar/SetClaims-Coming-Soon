import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';
import Preloader from '../components/Preloader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  // if (loading) return <Preloader onComplete={() => setLoading(false)} />;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white font-['Poppins'] flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Animated Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#38B0E3]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1D2B80]/20 rounded-full blur-[120px]" />

      {/* CONTENT */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10 max-w-4xl mt-24"
      >
        <div className="inline-block px-4 py-1 rounded-full border border-[#38B0E3]/30 bg-[#38B0E3]/5 text-[#38B0E3] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
          The Future of RCM is coming
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8 uppercase">
          WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38B0E3] to-[#1D2B80]">LAUNCHING</span> SOON.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          SET CLAIMS SOLUTIONS INC is redefining the medical billing industry with AI-driven technology. We are currently onboarding our pilot practices.
        </p>

        {/* Contact Strip for Investors */}
        <div className="grid md:grid-cols-3 gap-8 py-10 border-y border-white/5 mb-12">
            <div className="flex flex-col items-center gap-2">
                <Phone className="text-[#38B0E3]" size={20} />
                <p className="text-xs text-gray-500 uppercase font-bold">Call Us</p>
                <p className="font-bold">413-328-3913</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Mail className="text-[#38B0E3]" size={20} />
                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                <p className="font-bold">info@setclaimssolutionsinc.com</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <MapPin className="text-[#38B0E3]" size={20} />
                <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                <p className="font-bold text-sm">Livermore, CA 94550</p>
            </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-center gap-8 opacity-50">
            <Globe size={18} className="hover:text-[#38B0E3] cursor-pointer" />
            <Linkedin size={18} className="hover:text-[#38B0E3] cursor-pointer" />
            <Twitter size={18} className="hover:text-[#38B0E3] cursor-pointer" />
        </div>
      </motion.div>

      {/* FOOTER */}
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] font-bold">
          © 2026 SET CLAIMS SOLUTIONS INC | CONFIDENTIAL INVESTOR PREVIEW
        </p>
      </div>

    </div>
  );
};

export default Home;