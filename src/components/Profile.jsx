import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import iamge from "../assets/Profile.jpg";
import { profile } from "../utils/data";
import { IoLocation } from "react-icons/io5";

export default function Profile({ className }) {
  const handleDownload = () => {
    const cvUrl = profile?.cv || "/resume.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`${className} 
        bg-linear-to-br from-[#030406] via-[#05070a] to-[#020305]
        rounded-3xl p-10 sm:p-12 shadow-xl ring-1 ring-white/5
        backdrop-blur-md font-[Inter]
        flex flex-col items-center justify-center text-center space-y-8`}
    >
      {/* Profile Image */}
      <div className="relative group">
        <img
          draggable={false}
          src={iamge}
          alt={`${profile.name} profile`}
          className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full
                     ring-3 ring-cyan-300/80 shadow-md
                     transition-transform duration-500 group-hover:scale-105"
        />
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="absolute -bottom-3 right-0 inline-flex items-center px-3 py-1
                     rounded-full bg-black/80 text-cyan-300 text-xs
                     font-semibold font-[Poppins] ring-1 ring-cyan-600/30
                     hover:bg-black/20"
        >
          {profile.domain}
        </motion.span>
      </div>

      {/* Name & Summary */}
      <div className="space-y-2">
        <h1 className="text-4xl font-[Poppins] font-semibold tracking-tight text-white">
          {profile.name}
        </h1>
        <p className="text-base text-zinc-400 max-w-[44ch] leading-relaxed font-light">
          {profile.summary}
        </p>
        {profile.location && (
          <span className="text-sm text-zinc-400 w-full h-max flex justify-center items-center gap-2">
            <IoLocation className="w-4 h-4 text-cyan-300" />
            {profile.location}
          </span>
        )}
      </div>

      {/* Contacts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.22 }}
        className="flex flex-wrap justify-center gap-3 pt-2"
      >
        {profile.contact.map((pro, i) => (
          <div
            onClick={() => window.open("https://" + pro.link, "_blank")}
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full
                       bg-[#0a0e12]/70 border border-[#0d1418]
                       text-sm text-zinc-100
                       hover:bg-[#0f1a1f]/90 hover:text-cyan-300
                       hover:border-cyan-500/30
                       transition-all cursor-pointer font-[Inter] font-medium"
          >
            <pro.icon className="w-4 h-4 text-cyan-300" />
            <span className="text-[13px]">{pro.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Resume Button */}
      <motion.button
        whileHover={{
          scale: 1.03,
          background:
            "linear-gradient(to right, rgba(14,165,233,0.85), rgba(6,182,212,0.85))",
        }}
        whileTap={{ scale: 0.97 }}
        onClick={handleDownload}
        className="flex items-center gap-3 px-6 py-3 rounded-2xl
                   bg-linear-to-r from-cyan-700/80 to-sky-700/70
                   text-white font-[Poppins] font-medium tracking-wide
                   transition-all ring-1 ring-white/10"
        aria-label="Download CV"
      >
        <Download className="w-4 h-4" />
        <span>Resume</span>
      </motion.button>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.22 }}
        className="flex flex-wrap justify-center gap-3 pt-2"
      >
        {profile.social.map((pro, i) => (
          <motion.div
            whileTap={{ scale: 0.9}}
            transition={{ delay:0.1 }}
            // onClick={() => window.open("https://" + pro.link, "_blank")}
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full
                       bg-[#0a0e12]/70 border border-[#2374b7]
                       text-sm text-zinc-100
                       hover:bg-[#0f1a1f]/90
                       hover:border-cyan-500/30
                       transition-all cursor-pointer font-[Inter] font-medium"
          >
            <pro.icon className="w-5 h-5" style={{ color: pro.color }}  />
          </motion.div>
        ))}
      </motion.div>
    </motion.aside>
  );
}
