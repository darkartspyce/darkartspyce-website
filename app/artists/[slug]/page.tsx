export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-purple-400 mb-6">
          {slug.replace(/-/g, " ").toUpperCase()}
        </h1>

        <p className="text-lg text-gray-300 leading-8">
          Official artist profile of {slug.replace(/-/g, " ").toUpperCase()}
          under Dark Art Spyce Music.
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="bg-purple-600 px-6 py-3 rounded-lg"
          >
            ← Back Home
          </a>
        </div>

      </div>
    </main>
  );
}
