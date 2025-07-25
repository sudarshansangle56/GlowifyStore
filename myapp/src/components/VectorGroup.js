import React from 'react';

function VectorGroup() {
  return (
    <div className="relative w-full h-full">
      {/* Vector 1 */}
      <div
        style={{
          position: 'absolute',
          left: '0.62%',
          right: '0.62%',
          top: '0.62%',
          bottom: '0.62%',
          border: '1px solid #2D3B36',
        }}
      />

      {/* Vector 2 */}
      <div
        style={{
          position: 'absolute',
          left: '48.75%',
          right: '0%',
          top: '40.8%',
          bottom: '40.79%',
          background: '#2D3B36',
        }}
      />

      {/* Vector 3 */}
      <div
        style={{
          position: 'absolute',
          left: '1.23%',
          right: '46.91%',
          top: '40.8%',
          bottom: '40.79%',
          background: '#FEFFF4',
        }}
      />
    </div>
  );
}

export default VectorGroup;
