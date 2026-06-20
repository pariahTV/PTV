export default function Chat() {
  return (
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
          <div className="chat-send-button">SEND</div>
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
  );
}
