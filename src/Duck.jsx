import { useState } from "react";

// Easter egg: metti il tuo file in public/media/ e scrivi qui il nome, es. "media/papera.mp4".
// Formati: .mp4 .webm (video in loop) oppure .gif .png .jpg .webp. Vuoto = emoji.
const DUCK = "";

export default function Duck() {
  const [bad, setBad] = useState(!DUCK);
  if (bad) return <span className="duck">🦆</span>;
  const src = import.meta.env.BASE_URL + DUCK;
  return /\.(mp4|webm)$/i.test(DUCK)
    ? <video className="duck" src={src} autoPlay loop muted playsInline onError={() => setBad(true)} />
    : <img className="duck" src={src} alt="" onError={() => setBad(true)} />;
}
