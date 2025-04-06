import { Sidebar } from "@/components/sidebar";
import { MainContent } from "@/components/main-content";
import { PlayerControls } from "@/components/player-controls";

export default function SpotifyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col sm:h-screen">
      <div className="flex flex-1 flex-col overflow-hidden sm:flex-row">
        <Sidebar />
        <MainContent />
      </div>
      <PlayerControls />
    </main>
  );
}
