import { NextRequest, NextResponse } from 'next/server';
import { verifyClaimWithGroq, GroqVerifyRequest } from '@/lib/groq';

export async function POST(req: NextRequest) {
  try {
    const body: GroqVerifyRequest & { apiKey?: string } = await req.json();
    
    if (!body.claim) {
      return NextResponse.json({ error: 'Claim text is required' }, { status: 400 });
    }

    const result = await verifyClaimWithGroq(body, body.apiKey);
    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

