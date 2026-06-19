import Image from "next/image";
import Link from "next/link";
import { artists } from "../../data/artists";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artist = artists[slug as keyof typeof artists];

  if (!artist) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl">Artist Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">

        <Link
          href="/"
          className="inline-block mb-8 bg-purple-600 px-5 py-2 rounded-lg"
        >
          ← Back Home
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          <Image
            src={artist.image}
            alt={artist.name}
            width={600}
            height={600}
            className="rounded-2xl w-full object-cover"
          />

          <div>
            <h1 className="text-5xl font-bold text-purple-400">
              {artist.name}
            </h1>

            <p className="mt-4 text-xl">
              <strong>Real Name:</strong> {artist.realName}
            </p>

            <p className="mt-2">
              <strong>Genre:</strong> {artist.genre}
            </p>

            <p className="mt-2">
              <strong>State of Origin:</strong> {artist.state}
            </p>

            <p className="mt-2">
              <strong>Residence:</strong> {artist.residence}
            </p>

            <p className="mt-6 text-gray-300 leading-8">
              {artist.bio}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
