import Image from "next/image";
import Link from "next/link";
import { staff } from "../../data/staff";

export default async function StaffPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = staff[slug as keyof typeof staff];

  if (!member) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl">Staff Member Not Found</h1>
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
            src={member.image}
            alt={member.name}
            width={600}
            height={600}
            className="rounded-2xl w-full object-cover"
          />

          <div>
            <h1 className="text-5xl font-bold text-purple-400">
              {member.name}
            </h1>

            <p className="mt-4 text-xl">
              <strong>Position:</strong> {member.role}
            </p>

            <p className="mt-6 text-gray-300 leading-8 whitespace-pre-line">
              {member.bio}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              {member.spotify && (
                <a
                  href={member.spotify}
                  target="_blank"
                  className="bg-green-600 px-4 py-2 rounded-lg"
                >
                  Spotify
                </a>
              )}

              {member.apple && (
                <a
                  href={member.apple}
                  target="_blank"
                  className="bg-zinc-700 px-4 py-2 rounded-lg"
                >
                  Apple Music
                </a>
              )}

              {member.whatsapp && (
                <a
                  href={member.whatsapp}
                  target="_blank"
                  className="bg-green-500 px-4 py-2 rounded-lg"
                >
                  WhatsApp
                </a>
              )}

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
