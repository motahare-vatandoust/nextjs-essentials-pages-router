import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/nextjs">Nextjs is a great framework</Link></li>
        <li>something else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
