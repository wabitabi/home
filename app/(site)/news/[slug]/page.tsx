import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems } from "@/lib/data/news";
import { BUSINESS_CATEGORY_LABEL } from "@/lib/types";
import { Eyebrow } from "@/components/site/Eyebrow";
import { InstagramReel } from "@/components/site/InstagramReel";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <article className="py-20">
      <div className="mx-auto max-w-2xl px-6">
        <Eyebrow className="animate-tracking-in text-center">News</Eyebrow>
        <p className="mt-8 text-center text-[10px] tracking-[0.25em] text-gold">
          {item.date} — {BUSINESS_CATEGORY_LABEL[item.category]}
        </p>
        <h1 className="animate-fade-up animation-delay-300 mt-4 text-center text-2xl font-light leading-relaxed tracking-wide">
          {item.title}
        </h1>

        <div className="animate-fade-up animation-delay-600 mt-14 space-y-6 border-t border-sand pt-12 text-sm leading-[2.4] text-taupe">
          {item.body.map((block, i) => {
            if (block.type === "text") return <p key={i}>{block.text}</p>;
            if (block.type === "link")
              return (
                <p key={i}>
                  <a
                    href={block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block break-all border-b border-gold pb-0.5 text-ink transition hover:text-gold"
                  >
                    {block.label}
                  </a>
                </p>
              );
            if (block.type === "image")
              return <img key={i} src={block.src} alt={block.alt} className="w-full" />;
            if (block.type === "reel")
              return <InstagramReel key={i} id={block.id} className="my-2" />;
            return null;
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/news"
            className="inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] transition hover:text-gold"
          >
            お知らせ一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}
