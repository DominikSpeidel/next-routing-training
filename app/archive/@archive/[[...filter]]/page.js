import NewsList from "@/Components/news-list";
import { getAvailableNewsMonths, getNewsForYear } from "@/lib/news";
import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function FilterdNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  // andere Schreibweise wäre filter ? filter[0] : undefined
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
