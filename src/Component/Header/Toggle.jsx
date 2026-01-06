import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Store/Slice/themeSlice";
import { HiSun, HiMoon } from "react-icons/hi";

const Toggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`relative flex items-center justify-center p-2 rounded-xl transition-all duration-500 group border
        ${
          darkMode
            ? "bg-zinc-900 border-emerald-500/30 text-emerald-400 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            : "bg-white border-zinc-200 text-rose-500 hover:border-rose-300 hover:shadow-[0_0_15px_rgba(244,63,94,0.1)]"
        }`}
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
        {/* Sun Icon */}
        <div
          className={`absolute transition-all duration-500 transform ${
            darkMode ? "translate-y-0 rotate-0 opacity-100" : "translate-y-8 rotate-45 opacity-0"
          }`}
        >
          <HiSun size={22} />
        </div>

        {/* Moon Icon */}
        <div
          className={`absolute transition-all duration-500 transform ${
            darkMode ? "-translate-y-8 -rotate-45 opacity-0" : "translate-y-0 rotate-0 opacity-100"
          }`}
        >
          <HiMoon size={20} />
        </div>
      </div>
      
      {/* Subtle hover background for premium feel */}
      <span className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 
        ${darkMode ? "bg-emerald-500/5" : "bg-rose-500/5"}`} 
      />
    </button>
  );
};

export default Toggle;