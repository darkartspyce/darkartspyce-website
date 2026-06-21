import Image from "next/image";
import Link from "next/link";

const artists = [
  {
    name: "OLY DASINGER",
    image: "/artists/oly.jpg",
    state: "Ondo State",
    genre: "Afrobeats",
  },
  {
    name: "YUNGG DADDY FW",
    image: "/artists/yungg.jpg",
    state: "Cross River State",
    genre: "Afrobeats",
  },
  {
    name: "VIBEZ-KING",
    image: "/artists/vibez.jpg",
    state: "Anambra State",
    genre: "Afrobeats",
  },
  {
    name: "BLACK D-C",
    image: "/artists/blackdc.jpg",
    state: "Oyo State",
    genre: "Afrobeats",
  },
  {
    name: "LEVEL",
    image: "/artists/level.jpg",
    state: "Ogun State",
    genre: "Afrobeats",
  },
  {
    name: "KING BRIXXY",
    image: "/artists/king.jpg",
    state: "Ogun State",
    genre: "Afrobeats",
  },
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

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

  <div className="absolute w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
<Image
  src="/logo.png"
  alt="Dark Art Spyce Music"
  width={220}
  height={220}
  className="mx-auto mb-8"
/>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide">
          DARK ART SPYCE MUSIC
        </h1>

        <p className="mt-4 text-purple-400 text-xl">
          Creating Culture. Building Artists. Shaping The Future.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
  <a
    href="#artists"
    className="bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700"
  >
    Meet Our Artists
  </a>

  <a
    href="#contact"
    className="border border-purple-500 px-8 py-3 rounded-full hover:bg-purple-500"
  >
    Contact Us
  </a>
</div>
      </section>

<section id="about" className="px-6 py-20 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold text-center text-purple-400 mb-8">
    ABOUT DARK ART SPYCE MUSIC
  </h2>

  <p className="text-gray-300 leading-8 whitespace-pre-line">
    {`Founded in 2025, Dark Art Spyce Music is a fast-rising independent music label dedicated to discovering, developing, and promoting exceptional musical talent across Africa and beyond.

Built on creativity, originality, and artistic excellence, the label has quickly established itself as a growing force within the African music industry.

Dark Art Spyce Music was created with a vision to empower artists, provide professional music development, and build a strong catalog of culturally impactful music.

With a focus on Afrobeats, Afro Sounds, Amapiano, Hip-Hop, and contemporary African music, Dark Art Spyce Music aims to create records that resonate with audiences worldwide while showcasing the richness of African talent and culture.

Creating Culture. Building Artists. Shaping the Future.

Established 2025.`}
  </p>

  <div className="mt-10 text-center">
    <h3 className="text-2xl font-bold text-purple-400 mb-4">
      Signed Artists
    </h3>

    <p className="text-gray-300">
      OLY DASINGER • YUNGG DADDY FW • VIBEZ-KING • BLACK D-C • LEVEL • KING BRIXXY
    </p>
  </div>
</section>

      <section id="artists" className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          OUR ARTISTS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist) => (
  <Link
    href={`/artists/${artist.name.toLowerCase().replace(/\s+/g, "-")}`}
    key={artist.name}
  >
    <div className="bg-zinc-900 rounded-2xl overflow-hidden">
      <Image
        src={artist.image}
        alt={artist.name}
        width={500}
        height={500}
        className="w-full h-80 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">
          {artist.name}
        </h3>

        <p className="text-purple-400 mt-2">
          {artist.genre}
        </p>

        <p className="text-gray-400 text-sm">
          {artist.state}, Nigeria
        </p>

        <button className="mt-4 w-full bg-purple-600 py-2 rounded-lg">
          View Profile
        </button>
      </div>
    </div>
  </Link>
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

      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">
          CONTACT US
        </h2>

        <p className="text-gray-300">
          Dark Art Spyce Music
        </p>

        <p className="text-gray-300 mt-2">
          Lagos, Nigeria
        </p>
        <p className="text-gray-300 mt-4 text-center">
  For bookings, collaborations, promotions,
  <br />
  and business inquiries.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
  <a
    href="tel:+2349078017729"
    className="bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700"
  >
    📞 Call Us
  </a>

  <a
    href="https://wa.me/2349016965927"
    className="bg-green-600 px-8 py-3 rounded-full hover:bg-green-700"
  >
    💬 WhatsApp
  </a>

  <a
    href="mailto:darkartspyce@gmail.com"
    className="bg-zinc-800 px-8 py-3 rounded-full hover:bg-zinc-700"
  >
    ✉️ Email Us
  </a>
</div>
      </section>

    </main>
  );
}
