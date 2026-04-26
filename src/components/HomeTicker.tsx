import { useEffect, useState } from 'react';

const items = ['FOUNDER.', 'BUILDER.', 'INVESTOR.', 'FATHER.', 'RUNNER.'];

export default function HomeTicker() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
      <div
        style={{
          padding: '6px 14px',
          borderRadius: 6,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: 'var(--text-soft)',
          letterSpacing: '0.1em',
        }}
      >
        JOHN_FIGUEIREDO.exe
      </div>
      <div
        key={idx}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          color: 'var(--accent)',
          letterSpacing: '0.2em',
          animation: 'fadein 0.4s ease',
        }}
      >
        // {items[idx]}
      </div>
    </div>
  );
}
