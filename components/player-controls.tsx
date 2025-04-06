import Image from "next/image";
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from "lucide-react";

export function PlayerControls() {
  return (
    <div className="flex items-center justify-between bg-black p-4 text-white">
      <div className="flex items-center space-x-4">
        <Image
          src="/placeholder.svg?height=56&width=56"
          width={56}
          height={56}
          alt="Now playing"
          className="size-14"
        />
        <div>
          <p className="font-semibold">Song Title</p>
          <p className="text-sm text-gray-400">Artist Name</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-6">
          <Shuffle size={20} className="text-gray-400 hover:text-white" />
          <SkipBack size={20} className="text-gray-400 hover:text-white" />
          <button className="rounded-full bg-white p-2 text-black transition hover:scale-105">
            <Play fill="currentColor" size={20} />
          </button>
          <SkipForward size={20} className="text-gray-400 hover:text-white" />
          <Repeat size={20} className="text-gray-400 hover:text-white" />
        </div>
        <div className="mt-2 w-full max-w-md">
          <div className="h-1 w-full rounded-full bg-gray-500">
            <div className="h-1 w-1/3 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Volume2 size={20} />
        <div className="w-24">
          <div className="h-1 w-full rounded-full bg-gray-500">
            <div className="h-1 w-2/3 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
