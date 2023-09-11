export default function Blog2({ params }) {
  // [blog] => params.blog
  return (
    <div className="content">
      <h2>-Blog2 Page-</h2>
      <br />
      <br />
      <p>params: {params.blog2}</p>
    </div>
  );
}
