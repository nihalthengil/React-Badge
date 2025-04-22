import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../Redux/userSlice";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);


  const HandleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const Users = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        const users = response.data;

        dispatch(addUser(users));
      } catch (error) {
        console.log(error);
      }
    };
    if (userId) {
      Users();
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-10 w-full max-w-lg text-center space-y-6">
      
      <h2 className="text-3xl font-bold tracking-widest text-cyan-400">Dashboard</h2>
      
      <Link
        to="/product"
        className="inline-block text-cyan-300 hover:text-cyan-400 underline decoration-cyan-400 transition duration-300"
      >
        Go to Product
      </Link>
  
      <p className="text-lg font-medium text-white/80">
        Welcome, <span className="text-cyan-300">{user?.name}</span>
      </p>
  
      <button
        onClick={HandleLogout}
        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition shadow-md shadow-red-500/20 hover:shadow-red-500/40"
      >
        Logout
      </button>
    </div>
  </div>
  
  );
};

export default Dashboard;
