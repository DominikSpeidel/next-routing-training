import NewsList from "@/Components/news-list";
import { getLatestNews } from "@/lib/news";
const latestNews = getLatestNews();

export default function LatestNewsPage() {
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}
