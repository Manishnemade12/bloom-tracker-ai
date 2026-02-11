
import React from "react";

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginTop: '40px' }}>
    {[...Array(10)].map((_, i) => (
      <button key={i + 1} style={{ padding: '12px 24px', fontSize: '18px', borderRadius: '8px', border: '1px solid #ccc', background: '#f9f9f9', cursor: 'pointer' }}>
        Artist Profile {i + 1}
      </button>
    ))}
  </div>
);

export default App;
