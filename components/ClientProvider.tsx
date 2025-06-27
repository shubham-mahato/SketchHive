"use client";

import { LiveblocksProvider } from "@liveblocks/react";
import { ReactNode } from "react";

interface ClientProviderProps {
  children: ReactNode;
}

export function ClientProvider({ children }: ClientProviderProps) {
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
    >
      {children}
    </LiveblocksProvider>
  );
}