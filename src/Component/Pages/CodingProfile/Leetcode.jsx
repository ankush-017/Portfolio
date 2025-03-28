import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function LeetCodeProfile({ username }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [userData, setUserData] = useState({
    profileImage: "",
    totalSolved: 0,
    contestRating: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      if (!username) {
        setError("Username is required");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await axios.get(`https://coding-ptofile-api-1.onrender.com/lc/${username}`);

        console.log("Received Data:", response.data);
        if (!response.data.profile) {
          throw new Error("Invalid API response structure");
        }

        setUserData({
          profileImage: response.data.profile.avatar || "",
          totalSolved: response.data.solved.solvedProblem || 0,
          contestRating: response.data.contest.contestRating || 0,
        });

      } catch (err) {
        console.error("Error fetching LeetCode data:", err);
        setError("Server Busy ...");
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, [username]);

  if (loading) return <div className="p-4 text-center">Loading LeetCode profile...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    <div className={`p-5 rounded-lg shadow-md max-w-sm text-center border-solid border-2 
      ${darkMode ? "text-white bg-[#2a2a2a] border-gray-300" : "text-gray-800 border-gray-700 bg-[#f0f0f0]"}`}>
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
        <p className="text-[20px]">
          <span className="font-bold text-[#dd2cab]">Total Solved:</span> 
          <span className="text-[#ffb835] font-bold">{userData.totalSolved}</span>
        </p>
        <p className="mb-6">
          <span className="font-bold text-[#1da11d]">Contest Rating:</span> 
          <span className="text-[#eb822d] font-bold">{Math.round(userData.contestRating)}</span>
        </p>
      </div>
    </div>
  );
}