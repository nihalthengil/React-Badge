import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const Users = async () => {

        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();
        setUsers(users);
    }
    Users();
  }, []);

  const [users, setUsers] = useState([]);

  const HandleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      navigate("/dashboard");
    } else {
      alert("incorrect");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={HandleLogin}>Login</button>
    </div>
  );
};

export default Login;
