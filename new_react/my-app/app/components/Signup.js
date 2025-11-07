import { useState } from "react";
import { useAuth } from "../Providers/authProviders";

export default function signup() {
  const { signup } = useAuth();
  const [form, SetForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    signup(form);
    alert("Signup successful!");
    SetForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div classname="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4"> Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {["firstName", "lastName", "email", "phone", "password"].map((f) => (
          <input
            key={f}
            name={f}
            type={f === "password" ? "password" : "Text"}
            placeholder={f}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        ))}
        <button className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
