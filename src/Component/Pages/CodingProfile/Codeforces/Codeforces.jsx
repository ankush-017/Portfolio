import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { cf } from "../../../../../public/image/index.js";

export default function Codeforces({ username }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [userData, setUserData] = useState({
    profileImage: "",
    rank: 0,
    contestRating: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCodeChefData = async () => {
      try {
        setLoading(true);
        setError("");

        // Call your backend API
        const response = await axios.get(`https://coding-ptofile-api-3.onrender.com/codeforces/${username}`);

        console.log("Received Data:", response.data);

        if (!response.data) {
          throw new Error("Invalid API response structure");
        }

        const userInfo = response.data.result[0];

        // Extracting correct fields
        setUserData({
          profileImage: userInfo.avatar || "",
          rank: userInfo.rank || 0,
          contestRating: userInfo.maxRating || 0,
        });

      } catch (err) {
        console.error("Error fetching CodeChef data:", err);
        setError("Server Busy or Invalid Username...");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchCodeChefData();
    } else {
      setError("Username is required");
      setLoading(false);
    }
  }, [username]);

  if (loading) return (
    <div className="p-4 text-center rounded-lg">
      <img src={cf} alt="LeetCode Logo" className="w-[300px] h-auto rounded-lg mx-auto animate-pulse" />
    </div>
  );
  
  if (error) return (
    <div className="p-4 text-center">
      <img src={cf} alt="LeetCode Logo" className="w-[300px] h-auto rounded-lg mx-auto animate-pulse" />
    </div>
  );

  return (
    <div className={`p-5 rounded-lg shadow-md w-[300px] text-center border-solid border-[2px]
      ${darkMode ? "text-white bg-[#2a2a2a] border-gray-300" : "text-gray-800 border-gray-700 bg-[#a09d9d0d]"}`}>
      
      {userData.profileImage ? (
        <img
          src={userData.profileImage}
          alt={`${username}'s profile`}
          className="w-40 h-40 rounded-full mx-auto border border-gray-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      ) : (
        <div className="w-24 h-24 rounded-full mx-auto border border-gray-300 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-300">No Image</span>
        </div>
      )}
      
      <h2 className="text-xl font-bold mt-3">{username}</h2>
      <div className="mt-2">
        <p className="text-[24px]">
          <span className="font-bold text-[#dd2cab]">Rank:</span> 
          <span className="text-[#ffb835] font-bold"> {userData.rank}</span>
        </p>
        <p className="mb-6 text-[24px]">
          <span className="font-bold text-[#1da11d]">Contest Rating:</span> 
          <span className="text-[#eb822d] font-bold"> {Math.round(userData.contestRating)}</span>
        </p>
      </div>
    </div>
  );
}