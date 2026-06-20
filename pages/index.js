import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import "../styles/globals.css";

import Header from "../components/header";
import Player from "../components/player";
import Radio from "../components/radio";
import Ticker from "../components/ticker";
import Chat from "../components/chat";
import Spotlight from "../components/spotlight";

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
      <Header />
      <section className="ads-banner glass-panel">
        <img src="/ads/sample-top-ad.png" alt="Top Ad" />
      </section>
      <Player player={player} />
      <Radio player={player} />
      <Ticker ticker={ticker} />
      <section className="ads-banner glass-panel">
        <img src="/ads/sample-bottom-ad.png" alt="Bottom Ad" />
      </section>
      <Chat />
      <Spotlight spotlight={spotlight} />
    </main>
  );
}
