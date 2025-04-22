import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const Users = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        const users = response.data
        setUsers(users);
        
      } catch (error) {
        console.log(error)
      }
    }
    Users();
  }, []);

  const [users, setUsers] = useState([]);


  const HandleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    console.log("🚀 ~ HandleLogin ~ user:", user)
    if (user) {
      navigate("/dashboard");
      localStorage.setItem("userId",user.id)
    } else {
      alert("incorrect");
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-md text-white">
    <h2 className="text-3xl font-bold mb-6 text-center tracking-widest text-cyan-400">Login</h2>

    <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="w-full px-4 py-3 mb-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
    />

    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="w-full px-4 py-3 mb-6 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
    />

    <button
      onClick={HandleLogin}
      className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
    >
      Login
    </button>
  </div>
</div>

  );
};

export default Login;
