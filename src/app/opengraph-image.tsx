import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Elite FUT SNIPER - #1 FC 26, FC 25 & FC 27 Sniping Tool';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderTop: '16px solid #ccff00',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'rgba(204, 255, 0, 0.15)',
            filter: 'blur(100px)',
            borderRadius: '50%',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', zIndex: 10 }}>
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              color: 'white',
              display: 'flex',
              gap: '16px',
            }}
          >
            Elite FUT <span style={{ color: '#ccff00', fontStyle: 'italic' }}>SNIPER</span>
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: '#a3a3a3',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
              letterSpacing: '-0.02em',
            }}
          >
            The Ultimate FC 26, FC 25 & FC 27 Sniping Tool
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
