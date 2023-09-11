import Link from "next/link";

export default function Post() {
  return (
    <div className="content">
      <h2> -Post Page-</h2>
      <br />
      <br />
      <Link href={"/about"}>About</Link>
      <br />
      <Link
        href={{
          pathname: "/contact",
          query: {
            name: "Next",
          },
        }}
      >
        Contact
      </Link>
    </div>
  );
}
