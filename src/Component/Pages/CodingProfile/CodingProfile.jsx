import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Zap, Code2, ArrowRight } from 'lucide-react';
import { leetcode, gfg, codechef, cf } from "../../../../public/svgs/image";

const VerticalProfileRow = ({ profile, darkMode, isFeatured }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 10 }}
        className={`relative w-full flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-[2rem] border transition-all duration-300 ${
            darkMode 
            ? `bg-zinc-900/40 border-zinc-800 hover:border-emerald-500/50 ${isFeatured ? 'ring-1 ring-emerald-500/20' : ''}` 
            : `bg-white border-zinc-200 shadow-sm hover:shadow-xl ${isFeatured ? 'ring-1 ring-emerald-500/10' : ''}`
        }`}
    >
        {/* Platform Icon */}
        <div className={`p-4 rounded-2xl shrink-0 ${darkMode ? "bg-zinc-800" : "bg-emerald-50"}`}>
            <img src={profile.icon} alt={profile.name} className={`${isFeatured ? 'h-14 w-14' : 'h-10 w-10'} object-contain`} />
        </div>

        {/* Content Area */}
        <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h2 className={`${isFeatured ? 'text-2xl' : 'text-xl'} font-black tracking-tight`}>{profile.name}</h2>
                {isFeatured && (
                    <span className="w-fit mx-auto md:mx-0 px-2 py-0.5 rounded-md bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase">
                        Primary Focus
                    </span>
                )}
            </div>
            <p className={`text-sm opacity-60 max-w-xl ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                {profile.achievement}
            </p>
        </div>

        {/* Stats Section */}
        <div className="flex items-center gap-8 px-6 py-3 rounded-2xl bg-opacity-10 bg-black/5 dark:bg-white/5 border border-transparent dark:border-zinc-800">
            <div className="text-center">
                <p className="text-[9px] uppercase tracking-widest opacity-50 font-bold mb-1">Rating</p>
                <p className="text-lg font-black text-emerald-500">{profile.rating}</p>
            </div>
            <div className="w-px h-8 bg-zinc-500/20" />
            <div className="text-center">
                <p className="text-[9px] uppercase tracking-widest opacity-50 font-bold mb-1">Solved</p>
                <p className="text-lg font-black text-rose-500">{profile.solved}</p>
            </div>
        </div>

        {/* Link Button */}
        <a 
            href={profile.link} 
            target="_blank" 
            className={`p-4 rounded-full transition-all ${
                darkMode ? "bg-zinc-800 text-emerald-400 hover:bg-emerald-500 hover:text-zinc-950" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-900 hover:text-white"
            }`}
        >
            <ExternalLink size={20} />
        </a>
    </motion.div>
);

function CodingProfile() {
    const darkMode = useSelector((state) => state.theme.darkMode);

    const profiles = [
        { name: "LeetCode", icon: leetcode, rating: "1875+", solved: "1180+", achievement: "Knight Badge. Global Top 5% contender. Specialized in Algorithms and System Design.", link: "https://leetcode.com/u/ankush017/", isFeatured: true },
        { name: "GeeksForGeeks", icon: gfg, rating: "?", solved: "620+", achievement: "Rank 33 in University. Consistently ranked in top percentiles in monthly challenges.", link: "https://www.geeksforgeeks.org/user/ankush017/" },
        { name: "CodeChef", icon: codechef, rating: "1650", solved: "3★", achievement: "Advanced to 3-star ranking through consistent performance in Long Challenges.", link: "https://www.codechef.com/users/ankush0001" },
        { name: "CodeForces", icon: cf, rating: "1448", solved: "100+", achievement: "Specialist rank achieved. Participated in 11+ Global Division contests.", link: "https://codeforces.com/profile/ankush_017" }
    ];

    return (
        <section className={`relative py-24 px-6 min-h-screen transition-colors duration-500 ${darkMode ? "bg-[#050505] text-white" : "bg-slate-50 text-zinc-900"}`}>
            
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-xs font-mono tracking-[0.4em] text-emerald-500 mb-2 uppercase font-bold">
                        &lt; Engineering_Performance /&gt;
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
                        Coding <span className="text-emerald-500">Profiles</span>
                    </h1>
                </div>

                {/* Vertical List Container */}
                <div className="flex flex-col gap-6">
                    {profiles.map((profile, index) => (
                        <VerticalProfileRow 
                            key={index} 
                            profile={profile} 
                            darkMode={darkMode} 
                            isFeatured={profile.isFeatured}
                        />
                    ))}
                </div>

                {/* Aggregate Footer */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`mt-12 p-6 rounded-3xl border border-dashed flex flex-col md:flex-row items-center justify-between gap-4 ${
                        darkMode ? "border-zinc-800 bg-zinc-900/20" : "border-zinc-200 bg-white"
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <Code2 size={20} className="text-emerald-500" />
                        <span className="text-xs font-mono uppercase tracking-widest opacity-50 font-bold">Total Algorithmic Units Solved:</span>
                    </div>
                    <span className="text-xl font-black text-emerald-500 tracking-tighter">2,000+ PROBLEMS</span>
                </motion.div>
            </div>
        </section>
    );
}

export default CodingProfile;