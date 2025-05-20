import  { useEffect, useState } from "react";

function App() {
  const [apiUrl, setApiUrl] = useState("");
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    // Fetch environment variables injected via ConfigMap and Secret
    setApiUrl(import.meta.env.VITE_API_URL);
    setApiKey(import.meta.env.VITE_API_KEY);
  }, []);

  return (
    <div>
      <h1>Vite + React Frontend</h1>
      <p>API URL: {apiUrl}</p>
      <p>API Key: {apiKey}</p>
    </div>
  );
}

export default App;