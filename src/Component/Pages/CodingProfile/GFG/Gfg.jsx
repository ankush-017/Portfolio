import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function GfgProfile({ username }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [userData, setUserData] = useState({ profileImage: "", totalSolved: 0, codingScore: 0,InstitutionRank: 0,streak:0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGfgData = async () => {
      try {
        setLoading(true);
        setError("");

        // Call your backend instead of using a CORS proxy
        const response = await axios.get(`https://portfoliobackendgfg-1.onrender.com/gfg/${username}`);

        if (!response.data) {
          throw new Error("Invalid API response structure");
        }

        setUserData({
          profileImage: response.data.info.profilePicture || "",
          totalSolved: response.data.info.totalProblemsSolved || 0,
          codingScore: response.data.info.codingScore || 0,
          InstitutionRank: response.data.info.instituteRank || 0,
          streak: response.data.info.currentStreak || 0,
        });
      } catch (err) {
        console.error("Error fetching GFG data:", err);
        setError(" try again later... ");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGfgData();
    } else {
      setError("Username is required");
      setLoading(false);
    }
  }, [username]);

  if (loading) return <div className="p-4 text-center">Loading GeeksforGeeks profile...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    
    <div className={`p-5 rounded-lg shadow-md max-w-sm text-center border-2 ${darkMode ? "text-white bg-[#2a2a2a] border-gray-300" : "text-gray-800 border-gray-700 bg-[#a09d9d0d]"}`}>
      {userData.profileImage ? (
        <img
          src={userData.profileImage}
          alt={`${username}'s profile`}
          className="w-24 h-24 rounded-full mx-auto border border-gray-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      ) : (
        <div className="w-24 h-24 rounded-full mx-auto border border-gray-300 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600">No Image</span>
        </div>
      )}
      <h2 className="text-xl font-bold mt-3">{username}</h2>
      <div className="mt-2">
        <p className="text-lg">
          <span className="font-bold text-[#dd2cab]">Total Solved:</span>{" "}
          <span className="text-[#ffb835] font-bold">{userData.totalSolved}</span>
        </p>
        <p className="">
          <span className="font-bold text-[#1da11d]">Coding Score:</span>{" "}
          <span className="text-[#eb822d] font-bold">{Math.round(userData.codingScore)}</span>
        </p>
        <p className="">
          <span className="font-bold text-[#1da11d]">Institution Rank:</span>{" "}
          <span className="text-[#eb822d] font-bold">{userData.InstitutionRank}</span>
        </p>
        <p className="mb-4">
          <span className="font-bold text-[#1da11d]">Current Streak:</span>{" "}
          <span className="text-[#eb822d] font-bold">{userData.streak}</span>
        </p>
      </div>
    </div>
  );
}