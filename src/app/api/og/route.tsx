import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    // dynamic params
    const title = searchParams.get('title') || 'ZERO FLUFF. MAXIMUM EXECUTION.';
    const date = searchParams.get('date') || 'OPERATIONS_AND_BUSINESS_ASSISTANT';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#0a0a0a',
            padding: '80px',
            fontFamily: 'monospace',
            color: '#ffffff',
            border: '20px solid #f9d857',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%)',
            backgroundSize: '50px 50px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#f9d857', marginBottom: '10px' }}>SYS_ADMIN: SUNNY ☀️</span>
              <span style={{ fontSize: '24px', color: '#888888', textTransform: 'uppercase' }}>VESTCODES / SOFTWARE & PRODUCT STUDIO</span>
            </div>
            
            <img 
              src="https://sunny.vestcodes.co/icon.jpg" 
              alt="Sunny" 
              style={{ width: '120px', height: '120px', borderRadius: '60px', border: '4px solid #f9d857' }} 
            />
          </div>

          <div style={{
            display: 'flex',
            fontSize: '80px',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'white',
            textTransform: 'uppercase',
            maxWidth: '900px',
            marginTop: '40px'
          }}>
            {title}
          </div>
          
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
             <div style={{ display: 'flex', fontSize: '28px', color: '#f9d857', backgroundColor: '#222', padding: '10px 20px', border: '2px solid #555' }}>
               [ {date} ]
             </div>
             <div style={{ display: 'flex', fontSize: '28px', color: '#ffffff', fontWeight: 'bold' }}>
               SUNNY.VESTCODES.CO
             </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
