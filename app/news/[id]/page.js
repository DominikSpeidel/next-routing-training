export default function DetailsPage({ params }) {
  const newsId = params.id;
  return (
    <>
      <h1>Details Page</h1>
      <p>News ID: {newsId}</p>
    </>
  );
}
