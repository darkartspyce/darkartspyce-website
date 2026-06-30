import Link from "next/link";
import Image from "next/image";
import { news } from "../data/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 bg-purple-600 px-5 py-2 rounded-lg"
        >
          ← Back Home
        </Link>

        <h1 className="text-5xl font-bold text-purple-400 mb-10">
          Latest News
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-purple-400">{item.date}</p>

                <h2 className="text-2xl font-bold mt-2">
                  {item.title}
                </h2>

                <p className="text-gray-400 mt-3">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
