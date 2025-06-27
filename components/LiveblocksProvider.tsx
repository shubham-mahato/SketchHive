// File: components/LiveblocksProvider.tsx
"use client";

import { ReactNode } from "react";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react";

interface LiveblocksProviderProps {
  children: ReactNode;
  roomId: string;
}

// ✅ Renamed to match your guide's expectations
export function LiveblocksProvider({ children, roomId }: LiveblocksProviderProps) {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2">Loading whiteboard...</span>
        </div>
      }>
        {children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}