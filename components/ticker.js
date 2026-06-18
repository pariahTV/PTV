// components/Ticker.js
export default function Ticker({ ticker }) {
  return (
    <section className="ticker">
      <div className="ticker-text">
        {ticker?.text || "Loading..."}
      </div>
    </section>
  );
}
