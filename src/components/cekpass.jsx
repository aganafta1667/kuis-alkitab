import { useState } from "react";

export default function CekPass({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const PASSWORD_BENAR = "agafia12"; // ganti password

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === PASSWORD_BENAR) {
      onSuccess();
    } else {
      setError("Password salah. Coba lagi.");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-indigo-500 via-purple-500 to-purple-400 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          🔒 Restricted access
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please enter the password to continue
        </p>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />

        {error && (
          <p className="text-sm text-red-500 mt-2 animate-pulse">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-[0.98] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
