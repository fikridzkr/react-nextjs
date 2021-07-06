import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/fikri">Fikri</Link>
        </li>
        <li> Ronaldo</li>
        <li>Pogba</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
