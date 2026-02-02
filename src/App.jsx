import { useState } from "react";
import { soalData } from "./data";

export default function App() {
  const [nomor, setNomor] = useState("");
  const [currentSoal, setCurrentSoal] = useState(null);
  const [showJawaban, setShowJawaban] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(nomor);

    if (num < 1 || num > 748 || isNaN(num)) {
      setError("Question is not available");
      setCurrentSoal(null);
      setShowJawaban(false);
      return;
    }

    const soal = soalData.find((s) => s.nomor === num);
    if (!soal) {
      setError("Question is not available");
      setCurrentSoal(null);
      setShowJawaban(false);
    } else {
      setCurrentSoal(soal);
      setError("");
      setShowJawaban(false);
    }
  };

  const handleBack = () => {
    setCurrentSoal(null);
    setNomor("");
    setShowJawaban(false);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-purple-400 flex items-center text-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6">
        {/* Tampilan input */}
        {!currentSoal && !error && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="font-semibold">Enter Question Number:</label>
            <input
              type="number"
              value={nomor}
              onChange={(e) => setNomor(e.target.value)}
              className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600 transition [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              type="submit"
              className="bg-violet-600 font-semibold text-white py-2 rounded-xl hover:bg-violet-700 transition "
            >
              Submit
            </button>
          </form>
        )}

        {/* Pop-up error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-xl flex flex-col gap-4">
            <p>{error}</p>
            <button
              onClick={handleBack}
              className="bg-green-600 text-white py-2 rounded-xl hover:bg-green-800 transition"
            >
              Back to Home
            </button>
          </div>
        )}

        {/* Tampilan soal */}
        {currentSoal && (
          <div className="flex flex-col gap-4">
            <h3>Question #{currentSoal.nomor}</h3>
            <p className="text-lg font-semibold">{currentSoal.soal}</p>

            {!showJawaban ? (
              <button
                onClick={() => setShowJawaban(true)}
                className="bg-green-700 text-white py-2 rounded-xl hover:bg-green-600/80 transition"
              >
                Show Answer
              </button>
            ) : (
              <div className="bg-gray-100 p-3 rounded-xl">
                <p className="font-semibold">Answer:</p>
                <p>{currentSoal.jawaban}</p>
              </div>
            )}

            <button
              onClick={handleBack}
              className="bg-gray-600 text-white py-2 rounded-xl hover:bg-gray-600/80 transition"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
