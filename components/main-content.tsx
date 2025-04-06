import Image from "next/image";
import { Play } from "lucide-react";

const songs = [
  {
    title: "Set It Off",
    artist: "Madball",
    album: "Set It Off",
    duration: "5:55",
    src: "/madball.jpg",
  },
  {
    title: "Hard Times",
    artist: "Cro-Mags",
    album: "The Age of Quarrel",
    duration: "2:00",
    src: "/cro-mags.jpg",
  },
  {
    title: "Punishment",
    artist: "Biohazard",
    album: "Urban Discipline",
    duration: "4:44",
    src: "/biohazard.jpg",
  },
  {
    title: "In My Eyes",
    artist: "Minor Threat",
    album: "Complete Discography",
    duration: "2:51",
    src: "/terror.jpg",
  },
  {
    title: "Do or Die",
    artist: "Terror",
    album: "Lowest of the Low",
    duration: "2:20",
    src: "/minor-threat.jpg",
  },
];

export function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-black p-8 text-white">
      <div className="mb-8 flex items-center space-x-4">
        <Image
          src="/kotf.jpg"
          width={200}
          height={200}
          alt="Playlist cover"
          className="size-48 shadow-lg sm:size-52"
        />
        <div>
          <p className="text-sm font-semibold">PLAYLIST</p>
          <h1 className="mt-2 mb-3 text-4xl font-bold sm:mb-4 sm:text-5xl">Wild Ones</h1>
          <p className="text-sm text-gray-300">Created by egarrisxn • 96 songs, 4 hr 02 min</p>
        </div>
      </div>
      <div className="mb-8">
        <button className="rounded-full bg-green-500 px-6 py-2 font-semibold text-black hover:bg-green-400 sm:px-8 sm:py-3">
          <Play fill="currentColor" size={20} className="mr-2 inline" />
          Play
        </button>
      </div>
      <table className="w-full text-left text-xs text-gray-300 sm:text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="pb-3">#</th>
            <th className="pb-3">TITLE</th>
            <th className="pb-3">ALBUM</th>
            <th className="pb-3">DURATION</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index} className="hover:bg-white/10">
              <td className="py-3">{index + 1}</td>
              <td className="py-3">
                <div className="flex items-center">
                  <Image
                    src={song.src}
                    width={40}
                    height={40}
                    alt={`${song.title} cover`}
                    className="mr-3 hidden sm:block"
                  />
                  <div>
                    <p className="text-white">{song.title}</p>
                    <p>{song.artist}</p>
                  </div>
                </div>
              </td>
              <td className="py-3">{song.album}</td>
              <td className="py-3">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
