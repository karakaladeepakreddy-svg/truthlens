import { NextRequest, NextResponse } from 'next/server';
import { verifyClaimWithGroq, GroqVerifyRequest } from '@/lib/groq';

export async function POST(req: NextRequest) {
  try {
    const body: GroqVerifyRequest & { apiKey?: string } = await req.json();
    
    if (!body.claim) {
      return NextResponse.json({ error: 'Claim text is required' }, { status: 400 });
    }

    // Try calling Python FastAPI backend first
    try {
      const pyRes = await fetch('http://localhost:8000/api/verify/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          claim: body.claim,
          language: body.language,
          media_context: body.mediaContext,
          source_account: body.sourceAccount,
          api_key: body.apiKey
        }),
        signal: AbortSignal.timeout(3000)
      });

      if (pyRes.ok) {
        const pyData = await pyRes.json();
        return NextResponse.json(pyData);
      }
    } catch {
      // Fallback to internal Groq client if Python backend is busy
    }

    const result = await verifyClaimWithGroq(body, body.apiKey);
    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
