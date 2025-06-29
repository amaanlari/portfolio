import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react";

export default function HappyBirthdayFatima() {
    const [showSurprise, setShowSurprise] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-orange-100 overflow-hidden p-4 relative">
            {/* Sparkles */}
            {/* Sparkles / Glitter */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(40)].map((_, i) => {
                    const size = Math.random() * 5 + 3; // 3px to 8px
                    const colors = ["#ffffff", "#facc15", "#38bdf8", "#fcd34d", "#fde68a"];
                    const color = colors[Math.floor(Math.random() * colors.length)];

                    const left = Math.random() * 100; // vw
                    const top = Math.random() * 100; // vh

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${left}vw`,
                                top: `${top}vh`,
                                backgroundColor: color,
                                filter: "blur(1px)",
                            }}
                            initial={{
                                opacity: 0,
                                scale: 0,
                            }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [1, 2, 1],
                                y: "-20vh",
                            }}
                            transition={{
                                duration: Math.random() * 2 + 4, // 4–8s
                                delay: Math.random() * 0.5,
                                repeat: Infinity,
                            }}
                        />
                    );
                })}
            </div>

            {/* Card */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
                className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center"
            >
                <motion.img
                    src="/fatima_photo.png"
                    alt="Fatima"
                    className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-sky-300"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />

                <motion.h1
                    className="mt-6 text-4xl font-bold text-sky-600"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Happy Birthday Fatima!
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg text-gray-700"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    🎉 May your day be filled with laughter, love, and all the beautiful moments you truly deserve.
                    You bring so much light and warmth to everyone around you — never stop shining! 💖
                </motion.p>

                <motion.p
                    className="mt-4 text-base text-gray-600 italic"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    Wishing you a year ahead that’s as amazing as you are.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSurprise(true)}
                    className="mt-6 px-6 py-3 bg-sky-500 text-white font-semibold rounded-full shadow-md hover:bg-sky-600 transition"
                >
                    Open Surprise 🎁
                </motion.button>

                <AnimatePresence>
                    {showSurprise && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.8 }}
                            className="mt-6 p-4 bg-orange-50 rounded-xl text-gray-800 shadow-inner text-left"
                        >
                            <p className="mb-4 font-semibold">
                                🎂 Youm-e-Paidaish Mubarak! 🥳✨
                            </p>
                            <p className="mb-2 italic">
                                Ek bohot hi aala shayara ne kaha hai:
                            </p>
                            <p className="whitespace-pre-line mb-4">
                                {"\"Tum dil ka dareech khol ke dekho, amboh guzarne wala hai dil daron\nEk pile rang ki dhundh jami hai chehre pr, koi aake dekhe haal tere bimaron ka\nZamane bhar ka gham ya ek tera gham, yeh gham hoga toh kitne gham na honge\""}
                            </p>
                            <p className="text-base">
                                Just randomly mentioning this... but yeah it's a good one💫<br/>
                                Isi tarah sher share karte raho, muskurate raho<br/>
                                aur yome paidaish manate raho... Happy Birthday! 🎉😊
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
