import Link from "next/link";

function Navigation() {
  return (
    <li>
      <ul>
        <Link href="/">home</Link>
      </ul>
      <ul>
        <Link href="/cabins">Cabins</Link>
      </ul>
      <ul>
        <Link href="/about">About</Link>
      </ul>
      <ul>
        <Link href="/">home</Link>
      </ul>
    </li>
  );
}

export default Navigation;
