import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

export default function Login() {
  const { users, login } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // facultatif, juste visuel
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find((u) => u.email === email);

    if (foundUser) {
      login(foundUser);
    } else {
      setError("Utilisateur introuvable ou mot de passe incorrect.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Email :</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label>Mot de passe :</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
