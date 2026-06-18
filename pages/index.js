// pages/index.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import "../styles/globals.css";

export default function Viewer() {
  const [spotlight, setSpotlight] = useState(null);
  const [player, setPlayer] = useState(null);
  const [ticker, setTicker] = useState(null);

  useEffect(() => {
    onValue(ref(db, "spotlight"), snap => setSpotlight(snap.val()));
    onValue(ref(db, "player"), snap => setPlayer(snap.val()));
    onValue(ref(db, "ticker"), snap => setTicker(snap.val()));
  }, []);

  return (
    <main className="viewer">

      {/* LOGO */}
      <section className="logo-section">
        <img src="/logos/pariah-tv-full.PNG" alt="PariahTV Logo" />
      </section>

      {/* SPOTLIGHT CARD */}
      <section className="spotlight-card">
        <h2>Spotlight</h2>
        <p>{spotlight?.title || "Loading..."}</p>
        <p>{spotlight?.artist || ""}</p>
        <p>{spotlight?.status || ""}</p>
      </section>

      {/* PLAYER */}
      <section className="player">
        <h2 className="player-title">Now Playing</h2>
        <p>{player?.nowPlaying || "Loading..."}</p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p style={{ marginTop: "10px", opacity: 0.7 }}>
          {player?.duration || ""}
        </p>
      </section>

      {/* TICKER */}
      <section className="ticker">
        <div className="ticker-text">
          {ticker?.text || "Loading..."}
        </div>
      </section>

      {/* REACTIONS */}
      <div className="reactions">
        🎤❤️🔥💯
      </div>

    </main>
  );
}
