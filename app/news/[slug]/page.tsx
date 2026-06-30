import Image from "next/image";
import Link from "next/link";
import { news } from "../../data/news";

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl">Article Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/news"
          className="inline-block mb-8 bg-purple-600 px-5 py-2 rounded-lg"
        >
          ← Back to News
        </Link>

        <Image
          src={article.image}
          alt={article.title}
          width={1000}
          height={600}
          className="rounded-2xl w-full"
        />

        <p className="text-purple-400 mt-6">
          {article.date}
        </p>

        <h1 className="text-5xl font-bold mt-3">
          {article.title}
        </h1>

        <p className="mt-8 text-gray-300 whitespace-pre-line leading-8">
          {article.content}
        </p>
      </div>
    </main>
  );
}
