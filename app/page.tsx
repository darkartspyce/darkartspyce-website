import Image from "next/image";

const artists = [
  { name: "OLY DASINGER", image: "/artists/oly.jpg" },
  { name: "YUNGG DADDY FW", image: "/artists/yungg.jpg" },
  { name: "VIBEZ-KING", image: "/artists/vibez.jpg" },
  { name: "BLACK D-C", image: "/artists/blackdc.jpg" },
  { name: "LEVEL", image: "/artists/level.jpg" },
  { name: "KING BRIXXY", image: "/artists/king.jpg" },
];

const staff = [
  {
    name: "Kingsley Chibueze Chidi",
    role: "Founder & CEO",
    image: "/staff/kingsley.jpg",
  },
  {
    name: "Ricch Cord",
    role: "Producer & Social Media Manager",
    image: "/staff/ricchcord.jpg",
  },
  {
    name: "KIV",
    role: "Producer & Senior Staff",
    image: "/staff/kiv.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <nav className="flex items-center justify-between px-6 py-4 border-b border-purple-800">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Dark Art Spyce"
            width={50}
            height={50}
          />
          <h1 className="text-xl font-bold text-purple-400">
            DARK ART SPYCE
          </h1>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          DARK ART SPYCE MUSIC
        </h1>

        <p className="mt-4 text-purple-400 text-xl">
          Creating Culture. Building Artists. Shaping The Future.
        </p>

        <p className="mt-6 max-w-3xl text-gray-300">
          Founded in 2025, Dark Art Spyce Music is a fast-rising independent
          music label dedicated to discovering, developing and promoting
          exceptional musical talent across Africa and beyond.
        </p>
      </section>

      <section className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          OUR ARTISTS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >
              <Image
                src={artist.image}
                alt={artist.name}
                width={500}
                height={500}
                className="w-full h-80 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {artist.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          MANAGEMENT TEAM
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {staff.map((member) => (
            <div
              key={member.name}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="w-full h-80 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {member.name}
                </h3>

                <p className="text-purple-400">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">
          CONTACT US
        </h2>

        <p className="text-gray-300">
          Dark Art Spyce Music
        </p>

        <p className="text-gray-300 mt-2">
          Lagos, Nigeria
        </p>

        <button className="mt-8 bg-purple-600 px-8 py-3 rounded-full">
          Contact Management
        </button>
      </section>

    </main>
  );
}
