import { useState } from "react";
import {
  Home,
  Search,
  Bell,
  Users,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Shuffle,
  MoreHorizontal,
  Heart,
  SkipBack,
  SkipForward,
  Repeat,
  ListMusic,
  Laptop2,
  Volume2,
  Maximize2,
  Clock,
  ChevronDown,
  AudioLines,
} from "lucide-react";

// Generic stock-photo placeholders (picsum.photos), not tied to any real
// artist/label art — swap these src values for real licensed assets later.
const img = (seed, w = 300, h = 300) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const library = [
  { id: 1, label: "Liked Songs", kind: "pinned", gradient: "from-indigo-400 to-white" },
  { id: 2, label: "Warm Tones", seed: "warm-tones" },
  { id: 3, label: "Night Drive", seed: "night-drive" },
  { id: 4, label: "Focus", seed: "focus-pl" },
  { id: 5, label: "Reset", seed: "reset-pl" },
  { id: 6, label: "8-bit", seed: "8-bit-pl" },
  { id: 7, label: "Wind Down", seed: "wind-down" },
  { id: 8, label: "Collage", seed: "collage-pl" },
  { id: 9, label: "Tactics", seed: "tactics-pl" },
  { id: 10, label: "Mono", seed: "mono-pl" },
  { id: 11, label: "Sprint", seed: "sprint-pl" },
  { id: 12, label: "Op-Ed", seed: "op-ed-pl" },
  { id: 13, label: "Field Notes", seed: "field-notes" },
  { id: 14, label: "Pixel", seed: "pixel-pl" },
];

const tracks = [
  { n: 1, title: "SMELLS LIKE INCENSE", artist: "Jack Harlow", album: "Confetti", added: "Sept 21, 2023", dur: "2:33", seed: "track-1" },
  { n: 2, title: "Rendezvous", artist: "Jack Harlow", album: "Thats What They All Say", added: "Sept 21, 2023", dur: "1:53", seed: "track-2" },
  { n: 3, title: "WALK IN THE PARK", artist: "Jack Harlow", album: "Sweet Action", added: "Sept 25, 2023", dur: "2:05", liked: true, seed: "track-3" },
  { n: 4, title: "SUNDOWN", artist: "Jack Harlow", album: "Loose", added: "Oct 1, 2023", dur: "2:02", active: true, seed: "track-4" },
  { n: 5, title: "CODY BANKS", artist: "Jack Harlow", album: "Loose", added: "Oct 1, 2023", dur: "2:32", seed: "track-5" },
  { n: 6, title: "WARSAW", artist: "Jack Harlow", album: "Sweet Action", added: "Oct 1, 2023", dur: "2:32", seed: "track-6" },
  { n: 7, title: "Moana", artist: "G-Eazy, Jack Harlow", album: "Moana", added: "Oct 4, 2023", dur: "2:58", seed: "track-7" },
  { n: 8, title: "Creme", artist: "Jack Harlow", album: "Thats What They All Say", added: "Oct 4, 2023", dur: "2:58", seed: "track-8" },
  { n: 9, title: "What's Poppin (feat. DaBaby, Tory Lanez...)", artist: "Jack Harlow", album: "Confetti", added: "Oct 4, 2023", dur: "2:58", seed: "track-9" },
  { n: 10, title: "What's Poppin (feat. DaBaby, Tory Lanez...)", artist: "Jack Harlow", album: "Confetti", added: "Oct 4, 2023", dur: "2:58", seed: "track-10" },
];

function SidebarThumb({ item }) {
  return (
    <button
      title={item.label}
      className="h-11 w-11 shrink-0 overflow-hidden rounded-md shadow-inner shadow-black/30 transition hover:scale-[1.04]"
    >
      <img src={img(item.seed, 88, 88)} alt={item.label} className="h-full w-full object-cover" />
    </button>
  );
}

function TrackRow({ track }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`grid grid-cols-[32px_4fr_2fr_1.3fr_70px] items-center gap-4 rounded-md px-4 py-2 ${
        hover ? "bg-white/5" : ""
      }`}
    >
      <div className="text-sm text-white/50">
        {track.active ? (
          <AudioLines className="h-4 w-4 text-emerald-500" />
        ) : hover ? (
          <Play className="h-3.5 w-3.5 fill-white text-white" />
        ) : (
          track.n
        )}
      </div>

      <div className="flex min-w-0 items-center gap-3">
        <img
          src={img(track.seed, 80, 80)}
          alt={track.title}
          className="h-10 w-10 shrink-0 rounded object-cover"
        />
        <div className="min-w-0">
          <div
            className={`truncate text-[15px] ${
              track.active ? "text-emerald-500" : "text-white"
            }`}
          >
            {track.title}
          </div>
          <div className="truncate text-[13px] text-white/50">
            <span className="mr-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-white/40 align-[-2px] text-[9px] leading-none text-white/60">
              E
            </span>
            {track.artist}
          </div>
        </div>
      </div>

      <div className="truncate text-sm text-white/50">{track.album}</div>
      <div className="truncate text-sm text-white/50">{track.added}</div>

      <div className="flex items-center justify-end gap-3 text-sm text-white/50">
        {track.liked && <Heart className="h-4 w-4 fill-emerald-500 text-emerald-500" />}
        {track.dur}
      </div>
    </div>
  );
}

export default function SpotifyCloneJackPlaylist() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="flex h-screen w-full bg-black text-white">
      {/* Icon rail */}
      <div className="flex w-20 shrink-0 flex-col items-center gap-5 border-r border-white/5 bg-black py-6">
        <button className="rounded-full p-2 text-white hover:bg-white/10">
          <Home className="h-6 w-6" />
        </button>
        <button className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white">
          <Search className="h-6 w-6" />
        </button>

        <div className="mt-2 flex flex-col items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-indigo-400 to-violet-700 shadow-inner shadow-black/30">
            <Heart className="h-5 w-5 fill-white text-white" />
          </button>
          {library.slice(1).map((item) => (
            <SidebarThumb key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Hero */}
          <div className="relative bg-gradient-to-b from-orange-800/70 via-red-950/60 to-black px-8 pb-8 pt-6">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/80 hover:bg-black/60">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/80 hover:bg-black/60">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-white/70 hover:text-white" />
                <Users className="h-5 w-5 text-white/70 hover:text-white" />
                <img
                src={img("user-avatar", 56, 56)}
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
              </div>
            </div>

            <div className="flex items-end gap-6">
              <div className="grid h-44 w-44 shrink-0 grid-cols-2 grid-rows-2 overflow-hidden rounded shadow-2xl shadow-black/60">
                <img src={img("collage-a", 200, 200)} alt="" className="h-full w-full object-cover" />
                <img src={img("collage-b", 200, 200)} alt="" className="h-full w-full object-cover" />
                <img src={img("collage-c", 200, 200)} alt="" className="h-full w-full object-cover" />
                <img src={img("collage-d", 200, 200)} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 pb-1">
                <p className="text-sm font-medium text-white/90">Public Playlist</p>
                <h1 className="mt-2 truncate text-7xl font-black tracking-tight">Jack</h1>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                  <img
                    src={img("user-avatar", 56, 56)}
                    alt="Reza"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="font-semibold text-white">Reza</span>
                  <span className="text-white/50">· 10 songs, 24 min 38 sec</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between bg-gradient-to-b from-black/40 to-black px-8 py-5">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setPlaying((p) => !p)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-black transition hover:scale-105 hover:bg-emerald-400"
              >
                {playing ? (
                  <Pause className="h-6 w-6 fill-black" />
                ) : (
                  <Play className="ml-0.5 h-6 w-6 fill-black" />
                )}
              </button>
              <Shuffle className="h-6 w-6 text-white/70 hover:text-white" />
              <MoreHorizontal className="h-6 w-6 text-white/70 hover:text-white" />
            </div>
            <div className="flex items-center gap-5 text-white/60">
              <Search className="h-5 w-5 hover:text-white" />
              <button className="flex items-center gap-1 text-sm hover:text-white">
                Custom order
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Track list */}
          <div className="px-8">
            <div className="grid grid-cols-[32px_4fr_2fr_1.3fr_70px] gap-4 border-b border-white/10 px-4 pb-2 text-xs font-medium uppercase tracking-wide text-white/50">
              <div>#</div>
              <div>Title</div>
              <div>Album</div>
              <div>Date Added</div>
              <div className="flex justify-end">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 pb-6">
              {tracks.map((t) => (
                <TrackRow key={t.n} track={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Player bar */}
        <div className="absolute bottom-0 left-20 right-80 flex h-20 items-center justify-between border-t border-white/10 bg-neutral-950 px-4">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={img("track-4", 112, 112)}
              alt="SUNDOWN"
              className="h-14 w-14 shrink-0 rounded object-cover"
            />
            <div className="min-w-0">
              <div className="truncate text-sm text-white">SMELLS LIKE INCENSE</div>
              <div className="flex items-center gap-1 truncate text-xs text-white/50">
                <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-sm border border-white/40 text-[9px] leading-none text-white/60">
                  E
                </span>
                Jack Harlow
              </div>
            </div>
            <Heart className="ml-3 h-4 w-4 shrink-0 text-white/50 hover:text-white" />
          </div>

          <div className="flex w-full max-w-xl flex-col items-center gap-2">
            <div className="flex items-center gap-5 text-white/70">
              <Shuffle className="h-4 w-4 hover:text-white" />
              <SkipBack className="h-4 w-4 fill-current hover:text-white" />
              <button
                onClick={() => setPlaying((p) => !p)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:scale-105"
              >
                {playing ? (
                  <Pause className="h-4 w-4 fill-black" />
                ) : (
                  <Play className="ml-0.5 h-4 w-4 fill-black" />
                )}
              </button>
              <SkipForward className="h-4 w-4 fill-current hover:text-white" />
              <Repeat className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="flex w-full items-center gap-2 text-[11px] text-white/50">
              <span>1:23</span>
              <div className="h-1 flex-1 rounded-full bg-white/20">
                <div className="h-1 w-1/3 rounded-full bg-white" />
              </div>
              <span>-0:81</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white/60">
            <ListMusic className="h-4 w-4 rounded bg-emerald-500/20 p-0.5 text-emerald-400" />
            <ListMusic className="h-4 w-4 hover:text-white" />
            <Laptop2 className="h-4 w-4 hover:text-white" />
            <Volume2 className="h-4 w-4 hover:text-white" />
            <div className="h-1 w-20 rounded-full bg-white/20">
              <div className="h-1 w-2/3 rounded-full bg-white" />
            </div>
            <Maximize2 className="h-4 w-4 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="hidden w-80 shrink-0 flex-col gap-4 overflow-y-auto border-l border-white/5 bg-neutral-950 p-4 lg:flex">
        <h2 className="px-1 text-lg font-bold">Jack</h2>

        <div className="overflow-hidden rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900">
          <img
            src={img("track-4", 320, 320)}
            alt="SUNDOWN"
            className="aspect-square w-full object-cover"
          />
          <div className="p-3">
            <div className="text-lg font-bold">SUNDOWN</div>
            <div className="text-sm text-white/60">Jack Harlow</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-neutral-900">
          <div className="relative">
            <img
              src={img("artist-portrait", 480, 300)}
              alt="Jack Harlow"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute left-3 top-3 text-sm font-semibold text-white">
              About the Artist
            </span>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="text-base font-bold">Jack Harlow</div>
              <button className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white hover:border-white">
                Unfollow
              </button>
            </div>
            <div className="mt-1 text-sm text-white/50">59,905,128 monthly listeners</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              A Louisville, KY rapper known for laid-back delivery and radio-ready
              hooks, with multiple major-label albums and a string of chart hits
              to his name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
