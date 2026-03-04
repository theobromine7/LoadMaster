import { useState } from "react";
import api from "../api/axios";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    logo: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async () => {
    try {
      const res = await api.post("/auth/signup", form);

      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    } catch (err: any) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="p-10 space-y-3">
      <input name="name" placeholder="Name" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="password" placeholder="Password" onChange={handleChange}/>
      <input name="companyName" placeholder="Company" onChange={handleChange}/>
      <input name="logo" placeholder="Logo URL" onChange={handleChange}/>

      <button onClick={submit}>Signup</button>
    </div>
  );
}
