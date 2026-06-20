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

      {/* 1. LOGO (GLASS PLATE) */}
      <section className="logo-section glass-panel">
        <img src="/logos/pariah-tv-full.PNG" alt="PariahTV Logo" />
      </section>

      {/* 2. ADS BANNER (TOP, GLASS FRAME) */}
      <section className="ads-banner glass-panel">
        <img src="/ads/sample-top-ad.png" alt="Top Ad" />
      </section>

      {/* 3. VIDEO PLAYER (GLASS SHELL) */}
      <section className="video-wrapper glass-panel">
        <div className="video-chrome">
          {/* custom controls will replace native later */}
          <video
            src={player?.videoUrl}
            controls
            className="video-player"
          />
        </div>
      </section>

      {/* 4. RADIO PLAYER (GLASS LED BAR) */}
      <section className="radio-bar glass-panel">
        <div className="radio-header">
          <span className="radio-live-dot" />
          <span className="radio-label">LIVE RADIO</span>
        </div>
        <p className="radio-title">Now Playing</p>
        <p className="radio-track">{player?.nowPlaying || "Loading..."}</p>
        <div className="radio-frequency-bar">
          <div className="radio-frequency-fill" />
        </div>
      </section>

      {/* 5. TICKER (GLASS STRIP) */}
      <section className="ticker glass-panel">
        <div className="ticker-text">
          {ticker?.text || "Loading..."}
        </div>
      </section>

      {/* 6. ADS BANNER (BOTTOM, GLASS FRAME) */}
      <section className="ads-banner glass-panel">
        <img src="/ads/sample-bottom-ad.png" alt="Bottom Ad" />
      </section>

      {/* 7. CHAT PANEL (GLASS BOX) */}
      <section className="chat-panel glass-panel">
        <div className="chat-header">
          <span className="chat-title">CHAT</span>
        </div>

        <div className="chat-messages">
          {/* messages will render here */}
        </div>

        <div className="chat-footer">
          <div className="chat-identity">
            <input
              type="text"
              className="chat-name-input"
              placeholder="Name (or leave blank for auto)"
            />
          </div>

          <div className="chat-input-row">
            <input
              type="text"
              className="chat-message-input"
              placeholder="Type a message..."
            />
            <div className="chat-send-button">
              SEND
            </div>
          </div>

          <div className="chat-reactions-row">
            {/* ONLY place emojis are allowed */}
            <button className="reaction-button">❤️</button>
            <button className="reaction-button">🔥</button>
            <button className="reaction-button">💯</button>
            <button className="reaction-button">🎤</button>
          </div>

          <div className="floating-reactions-layer">
            {/* floating emojis will be injected here */}
          </div>
        </div>
      </section>

      {/* 8. SPOTLIGHT CARD (GLASS CARD) */}
      <section className="spotlight-card glass-panel">
        <h2 className="spotlight-title">Spotlight</h2>
        <p className="spotlight-main">{spotlight?.title || "Loading..."}</p>
        <p className="spotlight-sub">{spotlight?.artist || ""}</p>
        <p className="spotlight-status">{spotlight?.status || ""}</p>
      </section>

    </main>
  );
}
