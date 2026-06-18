// components/Spotlight.js
export default function Spotlight({ spotlight }) {
  return (
    <section className="spotlight-card">
      <h2>Spotlight</h2>

      <p>{spotlight?.title || "Loading..."}</p>
      <p>{spotlight?.artist || ""}</p>
      <p>{spotlight?.status || ""}</p>
    </section>
  );
}
