import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Store/Slice/themeSlice";

const Toggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`flex items-center gap-2 p-2 rounded-lg transition border-green-900 dark:border-white border-[3px] bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200`}
    >
      <span className="material-symbols-outlined text-[20px] md:text-2xl text-white">
        {darkMode ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};
export default Toggle;