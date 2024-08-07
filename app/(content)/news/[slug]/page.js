import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  //die Findmethode gibt ein neues Objekt zurück
  const newsItem = await getNewsItem(newsSlug);

  //die Filtermethode gibt einen neuen Array zurück
  //const newsItem = DUMMY_NEWS.filter((newsItem) => newsItem.slug === newsSlug);
  // die Reaxt-Einbettung wäre dann: <p>News ID: {newsItem[0].title}</p>

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <Link href={`/news/${newsItem.slug}/image`}>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </Link>
      <h1>Details Page</h1>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      <p>{newsItem.content}</p>
    </article>
  );
}
