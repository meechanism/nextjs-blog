import Link from 'next/link';

export default function Playground() {
  return (
    <>
      <h1>Playground for React Stuff</h1>
      <ul>
        <li>
          <Link href="/playground/use-reducer">UseReducer</Link>
        </li>
        <li>
          <Link href="/playground/custom-hook">Custom Hook (Pokemon)</Link>
        </li>
        <li>
          <Link href="/playground/use-with-prev-state">
            Use with previous state
          </Link>
        </li>
      </ul>
    </>
  );
}
