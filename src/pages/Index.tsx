import { useState, useEffect } from "react";

const FULL_TEXT = "хороший человек не найден";

const Index = () => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length < FULL_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed(FULL_TEXT.slice(0, displayed.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [displayed]);

  useEffect(() => {
    if (!done) return;
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, [done]);

  const handleShowAll = () => {
    setDisplayed(FULL_TEXT);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {/* Scan line effect */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Search label */}
        <div
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          результат поиска
        </div>

        {/* Main text */}
        <div
          style={{
            color: "#fff",
            fontSize: "clamp(24px, 5vw, 40px)",
            fontWeight: "bold",
            letterSpacing: "0.05em",
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {displayed}
          <span
            style={{
              display: "inline-block",
              width: "3px",
              height: "1.1em",
              background: "#fff",
              marginLeft: "4px",
              opacity: done ? (showCursor ? 1 : 0) : 1,
              transition: done ? "opacity 0.1s" : "none",
              verticalAlign: "middle",
            }}
          />
        </div>

        {/* Buttons */}
        <div
          style={{
            marginTop: "56px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleShowAll}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.6)",
              padding: "8px 22px",
              fontSize: "12px",
              letterSpacing: "0.15em",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.7)";
              (e.target as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.25)";
              (e.target as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.6)";
            }}
          >
            ПОКАЗАТЬ СРАЗУ
          </button>
          <button
            onClick={() => {
              setDisplayed("");
              setDone(false);
            }}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.6)",
              padding: "8px 22px",
              fontSize: "12px",
              letterSpacing: "0.15em",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.7)";
              (e.target as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.25)";
              (e.target as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.6)";
            }}
          >
            ПОВТОРИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
