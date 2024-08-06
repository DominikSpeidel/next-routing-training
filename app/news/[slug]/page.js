import { DUMMY_NEWS } from "@/dummy-news";

export default function DetailsPage({ params }) {
  const newsSlug = params.slug;
  //die Findmethode gibt ein neues Objekt zurück
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  //die Filtermethode gibt einen neuen Array zurück
  //const newsItem = DUMMY_NEWS.filter((newsItem) => newsItem.slug === newsSlug);
  // die Reaxt-Einbettung wäre dann: <p>News ID: {newsItem[0].title}</p>

  return (
    <article className="news-article">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      <h1>Details Page</h1>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      <p>{newsItem.content}</p>
    </article>
  );
}
