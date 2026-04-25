// Theme preview component for screenshots
// Requires a TypeScript config with `resolveJsonModule: true` and `allowSyntheticDefaultImports: true`
import React from "react";
import theme from "./themes/via-lactea-color-theme.json";

type ThemeColor = {
  name: string;
  scope?: string | string[];
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?: string;
  };
};

type ThemeJson = {
  name: string;
  type: string;
  colors: Record<string, string>;
  tokenColors: ThemeColor[];
};

const editorColorKeys = [
  "editor.background",
  "editor.foreground",
  "editor.lineHighlightBackground",
  "input.background",
  "input.foreground",
  "focusBorder",
  "input.focusBorder",
  "activityBar.background",
  "sideBar.background",
  "statusBar.background",
];

const tokenSamples = [
  { text: "const ", scope: "keyword" },
  { text: "theme", scope: "variable" },
  { text: " = ", scope: "operator" },
  { text: "{", scope: "punctuation" },
  { text: '"name"', scope: "constant.other.key" },
  { text: ": ", scope: "punctuation" },
  { text: '"Via Lactea"', scope: "string" },
  { text: " }", scope: "punctuation" },
];

const findTokenStyle = (scope: string): React.CSSProperties => {
  const entry = (theme as ThemeJson).tokenColors.find((token) => {
    if (Array.isArray(token.scope)) {
      return token.scope.includes(scope);
    }
    return token.scope === scope;
  });

  if (!entry) {
    return {};
  }

  return {
    color: entry.settings.foreground,
    fontStyle: entry.settings.fontStyle?.includes("italic")
      ? "italic"
      : "normal",
    fontWeight: entry.settings.fontStyle?.includes("bold") ? "bold" : "normal",
  };
};

const ThemeColorScreenshot: React.FC = () => {
  const colors = (theme as ThemeJson).colors;

  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        background: "#10131d",
        minHeight: "100vh",
        padding: 24,
        color: "#f5f7ff",
      }}
    >
      <div
        style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 24 }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 24 }}>
              Via Lactea Editor Preview
            </h1>
            <p style={{ margin: "8px 0 0", color: "#d0d4e0cc" }}>
              Captura los colores de editor definidos en el theme JSON.
            </p>
          </div>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <span
              style={{
                background: "#222532",
                color: "#d0d4e0",
                borderRadius: 999,
                padding: "6px 12px",
                fontSize: 12,
              }}
            >
              Dark theme
            </span>
            <span
              style={{
                background: "#2a2f45",
                color: "#a0c8ff",
                borderRadius: 999,
                padding: "6px 12px",
                fontSize: 12,
              }}
            >
              VS Code style
            </span>
          </div>
        </header>

        <section
          style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 20 }}
        >
          <aside
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${colors["focusBorder"] || "#69D2F8"}`,
              background: colors["sideBar.background"] || "#171a27",
            }}
          >
            <div
              style={{
                padding: "16px 18px",
                borderBottom: `1px solid ${colors["focusBorder"] || "#69D2F8"}`,
                background: "#1c2032",
              }}
            >
              <strong style={{ color: "#e8f2ff" }}>Explorador</strong>
            </div>
            <div
              style={{
                padding: 18,
                display: "grid",
                gap: 12,
                color: colors["sideBar.foreground"] || "#cccccc",
              }}
            >
              <div
                style={{
                  background: "#22273d",
                  borderRadius: 10,
                  padding: "12px 14px",
                }}
              >
                src
              </div>
              <div
                style={{
                  background: "#22273d",
                  borderRadius: 10,
                  padding: "12px 14px",
                }}
              >
                themes
              </div>
              <div
                style={{
                  background: "#22273d",
                  borderRadius: 10,
                  padding: "12px 14px",
                }}
              >
                README.md
              </div>
            </div>
          </aside>

          <div style={{ display: "grid", gap: 18 }}>
            <div
              style={{
                borderRadius: 18,
                overflow: "hidden",
                border: `1px solid ${colors["focusBorder"] || "#69D2F8"}`,
              }}
            >
              <div
                style={{
                  background: colors["activityBar.background"] || "#171a27",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#ff5f56",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#ffbd2e",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#27c93f",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    color: colors["editor.foreground"] || "#ebebeb",
                    marginLeft: 12,
                    fontWeight: 600,
                  }}
                >
                  via-lactea-color-theme.json
                </span>
              </div>
              <div
                style={{
                  background: colors["editor.background"] || "#1a1b26",
                  color: colors["editor.foreground"] || "#ebebeb",
                  padding: 24,
                  minHeight: 320,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor:
                      colors["editor.lineHighlightBackground"] || "#272a33ff",
                    opacity: 0.08,
                    pointerEvents: "none",
                  }}
                />
                <pre
                  style={{
                    position: "relative",
                    margin: 0,
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 14,
                    lineHeight: 1.6,
                    zIndex: 1,
                  }}
                >
                  {tokenSamples.map((token, index) => (
                    <span
                      key={index}
                      style={findTokenStyle(token.scope || "text")}
                    >
                      {token.text}
                    </span>
                  ))}
                </pre>
                <div
                  style={{
                    marginTop: 24,
                    display: "inline-flex",
                    gap: 8,
                    alignItems: "center",
                    flexWrap: "wrap",
                    color: "#b7c1ffdd",
                  }}
                >
                  <span
                    style={{
                      background: "#2a3051",
                      borderRadius: 8,
                      padding: "8px 12px",
                    }}
                  >
                    Editor preview
                  </span>
                  <span
                    style={{
                      background: "#2a3051",
                      borderRadius: 8,
                      padding: "8px 12px",
                    }}
                  >
                    Token color simulation
                  </span>
                  <span
                    style={{
                      background: "#2a3051",
                      borderRadius: 8,
                      padding: "8px 12px",
                    }}
                  >
                    Focus border visible
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 16,
                borderRadius: 16,
                border: `1px solid ${colors["focusBorder"] || "#69D2F8"}`,
                padding: 18,
                background: "#171a2b",
              }}
            >
              <h2 style={{ margin: 0, fontSize: 18, color: "#eef4ff" }}>
                Colores del editor
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: 12,
                }}
              >
                {editorColorKeys.map((key) => (
                  <div
                    key={key}
                    style={{
                      display: "grid",
                      gap: 8,
                      padding: 12,
                      borderRadius: 12,
                      background: "#1b1f2f",
                      border: `1px solid ${colors["focusBorder"] || "#69D2F8"}`,
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: 4,
                          background: colors[key] || "#000",
                        }}
                      />
                      <strong style={{ fontSize: 13, color: "#e7ecff" }}>
                        {key}
                      </strong>
                    </div>
                    <div style={{ fontSize: 13, color: "#a1a9c6" }}>
                      {colors[key] || "not defined"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ThemeColorScreenshot;
