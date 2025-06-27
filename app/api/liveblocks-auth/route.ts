// File: app/api/liveblocks-auth/route.ts

import { Liveblocks } from "@liveblocks/node"; // ✅ Correct import
import { NextRequest, NextResponse } from "next/server";

// ⚠️ Load your secret key securely
const secretKey = process.env.LIVEBLOCKS_SECRET_KEY;
if (!secretKey) {
  console.error("🔴 LIVEBLOCKS_SECRET_KEY is missing");
  throw new Error("LIVEBLOCKS_SECRET_KEY is required.");
}

// Initialize the Liveblocks Node client
const liveblocks = new Liveblocks({ secret: secretKey });

export async function POST(request: NextRequest) {
  // Placeholder user data (replace with real auth in production)
  const userId = `user_${Math.random().toString(36).slice(2, 9)}`;
  const userInfo = {
    name: `Guest ${userId.substring(5)}`,
    avatar: `https://avatar.vercel.sh/${userId}.png`,
  };

  let roomId: string;
  try {
    const body = await request.json();
    roomId = body.room;
    if (!roomId) {
      return new NextResponse("Missing `room` in request", { status: 400 });
    }
  } catch {
    return new NextResponse("Invalid JSON body", { status: 400 });
  }

  try {
    // ✅ Use prepareSession for access tokens
    const session = liveblocks.prepareSession(userId, { userInfo });
    session.allow(roomId, session.FULL_ACCESS);
    const { body, status } = await session.authorize();

    return new NextResponse(body, { status });
  } catch (err) {
    console.error("Auth error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
