import { Sidebar } from "@/components/sidebar";
import { MainContent } from "@/components/main-content";
import { PlayerControls } from "@/components/player-controls";

export default function SpotifyPage() {
  return (
    <main className="flex h-screen w-full flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <PlayerControls />
    </main>
  );
}
