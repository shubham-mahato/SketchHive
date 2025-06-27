// Centralized config file to create the Liveblocks client
import { createClient } from "@liveblocks/client";

export const client = createClient({
  authEndpoint: "/api/liveblocks-auth", // ✅ Only this is needed
});
