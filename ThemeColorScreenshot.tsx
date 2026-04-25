// Theme preview component for screenshots
// Requires a TypeScript config with `resolveJsonModule: true` and `allowSyntheticDefaultImports: true`
import React from 'react';
import theme from './themes/milky-way-color-theme.json';
import { useState } from 'react';

type ThemeColor = {
  name?: string;
  scope: string | string[];
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

const ThemeColorScreenshot: React.FC = () => {
  const t = theme as ThemeJson;
  const colors = t.colors;
  const [copiedScope, setCopiedScope] = useState<string | null>(null);

  const getStyle = (scope: string): React.CSSProperties => {
    const token = t.tokenColors.find((tc) => {
      if (Array.isArray(tc.scope)) {
        return tc.scope.includes(scope);
      }
      return tc.scope === scope;
    });
    return {
      color:
        token?.settings.foreground || colors['editor.foreground'] || '#ffffff',
      fontStyle: token?.settings.fontStyle?.includes('italic')
        ? 'italic'
        : 'normal',
      fontWeight: token?.settings.fontStyle?.includes('bold')
        ? 'bold'
        : 'normal',
    };
  };

  // Sample code structure for a comprehensive preview
  const code = [
    { text: 'import', scope: 'keyword.control' },
    { text: ' ', scope: 'plain' },
    { text: 'React', scope: 'variable' },
    { text: ', { ', scope: 'punctuation' },
    { text: 'useState', scope: 'variable' },
    { text: ' } ', scope: 'punctuation' },
    { text: 'from', scope: 'keyword.control' },
    { text: ' ', scope: 'plain' },
    { text: "'react'", scope: 'string' },
    { text: ';', scope: 'punctuation' },
    { text: '\n\n', scope: 'plain' },
    {
      text: '// ✨ Milky Way: A galactic coding experience',
      scope: 'comment',
    },
    { text: '\n', scope: 'plain' },
    { text: 'const', scope: 'storage.type' },
    { text: ' ', scope: 'plain' },
    { text: 'Galaxy', scope: 'entity.name.function' },
    { text: ' = ', scope: 'keyword.operator' },
    { text: '(', scope: 'punctuation' },
    { text: 'stars', scope: 'variable.parameter' },
    { text: ':', scope: 'punctuation' },
    { text: ' number', scope: 'support.type.primitive' },
    { text: ')', scope: 'punctuation' },
    { text: ' => ', scope: 'keyword.control' },
    { text: '{\n', scope: 'punctuation' },
    { text: '  const', scope: 'storage.type' },
    { text: ' [', scope: 'punctuation' },
    { text: 'isVisible', scope: 'variable' },
    { text: ', ', scope: 'punctuation' },
    { text: 'setVisible', scope: 'variable' },
    { text: '] = ', scope: 'keyword.operator' },
    { text: 'useState', scope: 'variable' },
    { text: '(', scope: 'punctuation' },
    { text: 'true', scope: 'constant.language.boolean' },
    { text: ')', scope: 'punctuation' },
    { text: ';\n\n', scope: 'punctuation' },
    { text: '  if', scope: 'keyword.control' },
    { text: ' (', scope: 'punctuation' },
    { text: 'stars', scope: 'variable' },
    { text: ' > ', scope: 'keyword.operator' },
    { text: '1000', scope: 'constant.numeric' },
    { text: ') ', scope: 'punctuation' },
    { text: '{\n', scope: 'punctuation' },
    { text: '    console', scope: 'variable' },
    { text: '.', scope: 'punctuation' },
    { text: 'log', scope: 'support.function' },
    { text: '(', scope: 'punctuation' },
    { text: '"Infinite stars"', scope: 'string' },
    { text: ')', scope: 'punctuation' },
    { text: ';', scope: 'punctuation' },
    { text: '\n  }\n\n', scope: 'punctuation' },
    { text: '  return', scope: 'keyword.control' },
    { text: ' (\n', scope: 'punctuation' },
    { text: '    <', scope: 'punctuation' },
    { text: 'div', scope: 'entity.name.tag' },
    { text: ' ', scope: 'plain' },
    { text: 'className', scope: 'entity.other.attribute-name' },
    { text: '=', scope: 'keyword.operator' },
    { text: '"nebula-container"', scope: 'string' },
    { text: '>\n', scope: 'punctuation' },
    { text: '      <', scope: 'punctuation' },
    { text: 'h1', scope: 'entity.name.tag' },
    { text: '>', scope: 'punctuation' },
    { text: 'Milky Way', scope: 'plain' },
    { text: '</', scope: 'punctuation' },
    { text: 'h1', scope: 'entity.name.tag' },
    { text: '>\n', scope: 'punctuation' },
    { text: '    </', scope: 'punctuation' },
    { text: 'div', scope: 'entity.name.tag' },
    { text: '>\n', scope: 'punctuation' },
    { text: '  )', scope: 'punctuation' },
    { text: ';', scope: 'punctuation' },
    { text: '\n', scope: 'plain' },
    { text: '}', scope: 'punctuation' },
    { text: ';', scope: 'punctuation' },
  ];

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #020617 0%, #1e1b4b 100%)',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          background: colors['editor.background'] || '#1a1b26',
          borderRadius: 16,
          boxShadow:
            '0 50px 100px -20px rgba(0,0,0,0.6), 0 30px 60px -30px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.1)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transform: 'scale(1.05)',
        }}
      >
        {/* Title Bar */}
        <div
          style={{
            background: colors['titleBar.activeBackground'] || '#131520',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${colors['sideBar.border'] || '#323a63'}`,
          }}
        >
          <div style={{ display: 'flex', gap: 10 }}>
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: '#ff5f56',
                boxShadow: 'inset 0 0 2px rgba(0,0,0,0.2)',
              }}
            />
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: '#ffbd2e',
                boxShadow: 'inset 0 0 2px rgba(0,0,0,0.2)',
              }}
            />
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: '#27c93f',
                boxShadow: 'inset 0 0 2px rgba(0,0,0,0.2)',
              }}
            />
          </div>
          <div
            style={{
              color: colors['sideBarTitle.foreground'] || '#888',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            Preview.tsx — Milky Way
          </div>
          <div style={{ width: 60 }} />
        </div>

        {/* Editor Body */}
        <div style={{ display: 'flex', flex: 1 }}>
          {/* Code Area */}
          <div
            style={{
              flex: 1,
              padding: '40px 48px',
              position: 'relative',
              background: colors['editor.background'],
            }}
          >
            <pre
              style={{
                margin: 0,
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                fontSize: 17,
                lineHeight: 1.7,
                color: colors['editor.foreground'] || '#ebebeb',
                letterSpacing: '-0.01em',
              }}
            >
              {code.map((token, i) => (
                <span key={i} style={getStyle(token.scope)}>
                  {token.text}
                </span>
              ))}
            </pre>

            {/* Line Highlight Simulation */}
            <div
              style={{
                position: 'absolute',
                top: 40 + 1.7 * 17 * 15.5, // Highlight line 16 (return)
                left: 0,
                right: 0,
                height: 1.7 * 17,
                background:
                  colors['editor.lineHighlightBackground'] || '#272a33ff',
                opacity: 0.4,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* Status Bar */}
        <div
          style={{
            background: colors['statusBar.background'] || '#131520',
            color: colors['statusBar.foreground'] || '#d3d3d3',
            padding: '6px 20px',
            fontSize: 12,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: `1px solid ${colors['sideBar.border'] || '#323a63'}`,
          }}
        >
          <div style={{ display: 'flex', gap: 16 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#03b2f1',
                }}
              />
              Main
            </span>
            <span style={{ opacity: 0.8 }}>0 Δ 0 ⊗</span>
          </div>
          <div style={{ display: 'flex', gap: 20, opacity: 0.8 }}>
            <span>Spaces: 2</span>
            <span>UTF-8</span>
            <span>TypeScript JSX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeColorScreenshot;
