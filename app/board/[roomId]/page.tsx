// File: app/board/[roomId]/page.tsx

// Import the provider component you created
import { LiveblocksProvider } from "@/components/LiveblocksProvider";
// Import the placeholder client component that will hold the whiteboard UI
import { Room } from "@/components/Room";

// Define the interface for the page props, including params
interface BoardPageProps {
  params: {
    roomId: string; // The dynamic segment from the URL, e.g., "my-first-board"
  };
}

/**
 * This is the main page component for displaying a specific whiteboard.
 * It acts as a Server Component by default in the App Router.
 * Its primary roles are:
 * 1. Extract the `roomId` from the URL parameters.
 * 2. Render the `LiveblocksProvider` for that specific room.
 * 3. Render the client-side `Room` component which contains the actual whiteboard logic.
 */
const BoardPage = ({ params }: BoardPageProps) => {
  // Extract the roomId from the page parameters
  const roomId = params.roomId;

  // Check if roomId is available (basic validation)
  if (!roomId) {
    // Handle the case where roomId is missing, maybe redirect or show an error
    // For now, we can render a simple message or null
    return <div>Error: Room ID is missing.</div>;
  }

  return (
    // Use the LiveblocksProvider you created.
    // Pass the extracted roomId to the provider.
    // All components rendered inside this provider will have access
    // to the Liveblocks room context for this specific roomId.
    <LiveblocksProvider roomId={roomId}>
      {/*
        Inside the provider, we render the actual component responsible
        for the whiteboard UI and interaction. This component (`Room`)
        needs to be a Client Component because it will use Liveblocks hooks.
      */}
      <Room />
    </LiveblocksProvider>
  );
};

export default BoardPage; // Export the page component