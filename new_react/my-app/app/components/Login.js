"use client";

import { useState } from "react";
import { useAuth } from "../Providers/authProviders";

export default function Login() {
  const { login, currentUser, logout } = useAuth();
  const [form, SetForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    SetForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(form.email, form.password);
    if (ok) alert("Login successful!");
    else alert("Invalid email or password");
  };
  if (currentUser) {
    return (
      <div className="p-6 max-w-sm mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">
          Welcome, {currentUser.firstName}!
        </h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white p-2 rounded mt-2"
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className="pw-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          name="password"
          placeholder="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
        ></input>
        <button className="bg-green-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
