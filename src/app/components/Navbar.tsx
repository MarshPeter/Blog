import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex w-screen items-center justify-between bg-purple-600 p-8">
      <div className="text-4xl">Farmer's Blog</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
      </div>
    </nav>
  );
}
