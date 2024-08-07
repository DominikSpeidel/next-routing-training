import NewsList from "@/Components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>Newsheadline</h1>
      <NewsList news={news} />
    </>
  );
}
