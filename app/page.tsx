'use client';
import { Button } from "@/components/ui/button";
import { LiveblocksProvider} from "@/components/LiveblocksProvider";

export default function Home() {
  return (
    <RoomProviderWrapper roomId="whiteboard">
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">SketchHive</h1>

        <Button
          variant="outline"
          size="lg"
          onClick={() => alert("Button Clicked!")}
        >
          Click Me!
        </Button>

        <div className="flex gap-4 mt-4">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </main>
    </RoomProviderWrapper>
  );
}