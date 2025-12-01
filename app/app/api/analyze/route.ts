import { NextResponse } from 'next/server';
import { PROVINCE_DB } from '@/lib/mock-data';

export async function POST(req: Request) {
  const body = await req.json();
  const { profile, interest } = body;

  // --- SIMULATED AI LOGIC (Rule-Based for MVP) ---
  // In production, replace this block with OpenAI API call
  
  await new Promise(resolve => setTimeout(resolve, 1500)); // Fake "Thinking" delay

  let recommendedId = "51"; // Default to Bali

  const text = (profile + " " + interest).toLowerCase();

  if (text.includes("city") || text.includes("tech") || text.includes("finance")) {
    recommendedId = "31"; // Jakarta
  } else if (text.includes("furniture") || text.includes("manufacturing") || text.includes("cheap")) {
    recommendedId = "33"; // Central Java
  }

  const result = PROVINCE_DB.find(p => p.id === recommendedId);
  
  if (!result) return NextResponse.json({ error: "No match" }, { status: 404 });

  return NextResponse.json({
    recommended_province_code: result.id,
    province_name: result.name,
    match_score: Math.floor(Math.random() * (99 - 85) + 85),
    reasoning_travel: result.description_travel,
    reasoning_economic: result.description_econ,
    suggested_actions: result.actions,
    coordinates: result.coordinates
  });
}